import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baka med fullkorn',
  description:
    'Lär dig baka bröd med fullkornsmjöl. Tips och tricks för att lyckas med fullkornsbröd.',
  alternates: {
    canonical: '/guides/baka-med-fullkorn',
  },
};

export default function BakaMedFullkornPage() {
  return (
    <>
      <h2>Baka med fullkorn</h2>
      <p>Info</p>
    </>
  );
}
