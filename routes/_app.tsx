import type { PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OGP画像えでぃたー</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="font-biz-udgothic">
        <Component />
      </body>
    </html>
  );
}
