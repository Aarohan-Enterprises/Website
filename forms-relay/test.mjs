// Offline checks for the relay's validation. Run: node forms-relay/test.mjs
import assert from 'node:assert/strict';
import { validate, cleanUrl, resumeKind, safeFilename, archivePrefix, isGithubProfile, verifyCaptcha, APPLY_CHECKS, MAX_RESUME_BYTES } from './index.mjs';
const ALL = Object.fromEntries(APPLY_CHECKS.map((k) => [k, true]));
const app = (o) => ({ kind: 'application', website: 'riya.github.io', video: 'youtu.be/abc', checks: ALL, ...o });

const pdf = Buffer.from('%PDF-1.7\n...').toString('base64');
const exe = Buffer.from('MZ\x90\x00 not a resume').toString('base64');

assert.equal(cleanUrl('riya.github.io'), 'https://riya.github.io/');
assert.equal(cleanUrl('javascript:alert(1)'), null);
assert.equal(cleanUrl('nodot'), null);
assert.equal(cleanUrl(''), '');

assert.equal(resumeKind(Buffer.from('%PDF-1.4')).ext, 'pdf');
assert.equal(resumeKind(Buffer.from([0x50, 0x4b, 3, 4, 0])).ext, 'docx');
assert.equal(resumeKind(Buffer.from('MZ')), null);
assert.equal(safeFilename('../../etc/Riya CV<>.exe', 'pdf'), 'etcRiya CV.pdf');

const ok = validate(app({ website: 'riya.netlify.app', resume: { name: 'cv.pdf', data: pdf } }));
assert.equal(ok.kind, 'application');
assert.equal(ok.website, 'https://riya.netlify.app/');
assert.equal(ok.filename, 'cv.pdf');

assert.match(validate(app({ website: '', resume: { data: pdf } })).error, /website/);
assert.equal(ok.video, 'https://youtu.be/abc');
// a GitHub profile or repo is not the live site
assert.ok(isGithubProfile('https://github.com/nikhil')); assert.ok(!isGithubProfile('https://nikhil.github.io/'));
assert.match(validate(app({ website: 'https://github.com/someone', resume: { data: pdf } })).error, /live website/);
assert.match(validate(app({ video: '', resume: { data: pdf } })).error, /video/);
// every box must be ticked
assert.match(validate(app({ checks: { ...ALL, nagpur: false }, resume: { data: pdf } })).error, /every box/);
assert.match(validate(app({ checks: undefined, resume: { data: pdf } })).error, /every box/);
assert.match(validate(app({ code: 'bad link', resume: { data: pdf } })).error, /source code/);
assert.match(validate(app({ resume: { name: 'x.pdf', data: exe } })).error, /PDF or Word/);
assert.match(validate(app({})).error, /attach/);
const big = Buffer.concat([Buffer.from('%PDF-'), Buffer.alloc(MAX_RESUME_BYTES)]).toString('base64');
assert.match(validate(app({ resume: { data: big } })).error, /4 MB/);

assert.equal(validate({ kind: 'application', company: 'bot', website: 'a.com' }).spam, true);

const c = validate({ kind: 'contact', name: 'A', email: 'a@b.co', phone: '9876543210', service: 'Not sure yet' });
assert.equal(c.kind, 'contact');
assert.ok(validate({ kind: 'contact', name: 'A', email: 'bad', phone: '1', service: 'x' }).error);
assert.ok(validate({ kind: 'nope' }).error);

assert.equal(archivePrefix('application', new Date('2026-11-25T07:12:06.723Z'), 'abcdef12-xxxx'), 'applications/2026-11-25T07-12-06-723Z-abcdef12');
assert.equal(archivePrefix('contact', new Date('2026-11-25T07:12:06.723Z'), '0123456789'), 'contacts/2026-11-25T07-12-06-723Z-01234567');

// captcha: passes with no secret configured (local), fails closed on a missing token or a bad secret
assert.equal(await verifyCaptcha('', '1.2.3.4', ''), true);
assert.equal(await verifyCaptcha('', '1.2.3.4', 'x'), false);
// Cloudflare's documented always-fail test secret must reject
assert.equal(await verifyCaptcha('XXXX.DUMMY.TOKEN.XXXX', '1.2.3.4', '2x0000000000000000000000000000000AA'), false);

console.log('forms-relay: all checks passed');
