// Offline checks for the relay's validation. Run: node forms-relay/test.mjs
import assert from 'node:assert/strict';
import { validate, cleanUrl, resumeKind, safeFilename, MAX_RESUME_BYTES } from './index.mjs';

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

const ok = validate({ kind: 'application', website: 'riya.netlify.app', resume: { name: 'cv.pdf', data: pdf } });
assert.equal(ok.kind, 'application');
assert.equal(ok.website, 'https://riya.netlify.app/');
assert.equal(ok.filename, 'cv.pdf');

assert.match(validate({ kind: 'application', website: '', resume: { data: pdf } }).error, /website/);
assert.match(validate({ kind: 'application', website: 'a.com', code: 'bad link', resume: { data: pdf } }).error, /source code/);
assert.match(validate({ kind: 'application', website: 'a.com', resume: { name: 'x.pdf', data: exe } }).error, /PDF or Word/);
assert.match(validate({ kind: 'application', website: 'a.com' }).error, /attach/);
const big = Buffer.concat([Buffer.from('%PDF-'), Buffer.alloc(MAX_RESUME_BYTES)]).toString('base64');
assert.match(validate({ kind: 'application', website: 'a.com', resume: { data: big } }).error, /4 MB/);

assert.equal(validate({ kind: 'application', company: 'bot', website: 'a.com' }).spam, true);

const c = validate({ kind: 'contact', name: 'A', email: 'a@b.co', phone: '9876543210', service: 'Not sure yet' });
assert.equal(c.kind, 'contact');
assert.ok(validate({ kind: 'contact', name: 'A', email: 'bad', phone: '1', service: 'x' }).error);
assert.ok(validate({ kind: 'nope' }).error);

console.log('forms-relay: all checks passed');
