import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Starta din egen surdegsgrund',
  description:
    'Lär dig starta din egen surdegsgrund från grunden. En enkel guide för nybörjare.',
  alternates: {
    canonical: '/guides/starta-egen',
  },
};

export default function StartaEgenPage() {
  return (
    <>
      <h2>Starta din egen surdegsgrund</h2>
      <p>Här är info om hur du kan göra det.</p>
    </>
  );
}
