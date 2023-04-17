import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-9xl font-bold uppercase">Gatsby</h1>
      <p className="text-3xl">TypeScript + Tailwind CSS + Material UI</p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
