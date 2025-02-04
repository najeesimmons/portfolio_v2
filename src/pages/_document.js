import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Najee Simmons Portfolio</title>
      <meta
        name="description"
        content="Najee Simmons is a software engineer specializing in building scalable, feature-rich web applications. Explore his portfolio to see projects, skills, and experience."
      />
      <meta property="og:title" content="Najee Simmons Resume" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
