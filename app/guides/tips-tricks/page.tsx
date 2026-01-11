import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tips & tricks för surdegsbröd',
  description:
    'Samling av tips och tricks för att baka perfekt surdegsbröd varje gång.',
  alternates: {
    canonical: '/guides/tips-tricks',
  },
};

export default function TipsTricksPage() {
  return (
    <>
      <h2>Tips &amp; tricks</h2>
      <p>Tips mm</p>
    </>
  );
}
