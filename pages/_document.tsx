import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Travel Hunters" />
        <title>
          Travel Hunters | Explore, Discover & Book Your Next Adventure
        </title>
        <meta
          name="description"
          content="Travel Hunters helps you discover the best travel destinations, deals, and personalized itineraries. Explore top-rated hotels, flights, and travel guides—all in one place."
        />
        <meta
          name="keywords"
          content="travel, trips, vacation, travel deals, travel guides, Travel Hunters"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
