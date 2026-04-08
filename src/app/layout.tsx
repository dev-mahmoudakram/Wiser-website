import { ReactNode } from 'react';

// Since we have a dynamic [locale] segment, the root layout just passes children through.
// The html and body tags are defined in app/[locale]/layout.tsx

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
