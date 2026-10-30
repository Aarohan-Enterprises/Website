import { pageMetadata } from '@/lib/metadata';
import { MainLayout } from '@/components/layouts';
import { BackToTop } from '@/components/ui';
import { Block, SectionHead, ProductGrid, ClientWorkGrid, CtaBand } from '@/components/sections';
import { products } from '@/data/products';
import { siteConfig } from '@/data/seo';

export const metadata = pageMetadata('/products/', {
  title: 'Our Products - SaaS Tools for WhatsApp, PDFs, Alerts and More',
  description:
    'Eight software products from Aarohan Enterprises: AlertSync, Loadout, Volatility Screener, GroupSync, PDF Editor, Section63, ChatIntoPDF and Meridian. Free and paid plans.',
});

const productsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Aarohan Enterprises products',
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'SoftwareApplication',
      name: p.name,
      description: p.description,
      url: p.href,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, Windows, Chrome',
      publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    },
  })),
};

export default function ProductsPage() {
  return (
    <MainLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }} />
      <Block>
        <SectionHead
          as="h1"
          title="Software from our desk, ready to use"
          lead="Tools we first built for our own work, opened up for yours. Each one does a single job properly, and each has its own site."
        />
        <ProductGrid />
      </Block>

      <Block tone="band">
        <SectionHead
          title="Built for individual clients"
          lead="Some systems are made for a single company and never sold. We describe them without names."
        />
        <ClientWorkGrid />
      </Block>

      <CtaBand
        title="Need something that does not exist yet?"
        lead="Tell us the problem. We will scope it and send a written quote."
      />
      <BackToTop />
    </MainLayout>
  );
}
