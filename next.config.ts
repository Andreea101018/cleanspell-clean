import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';

              script-src
                'self'
                'unsafe-inline'
                'unsafe-eval'
                https://www.googletagmanager.com
                https://www.google-analytics.com
                https://www.googleadservices.com
                https://pagead2.googlesyndication.com
                https://googleads.g.doubleclick.net;

              connect-src
                'self'
                https://www.google-analytics.com
                https://region1.google-analytics.com
                https://www.googletagmanager.com
                https://www.googleadservices.com
                https://pagead2.googlesyndication.com
                https://googleads.g.doubleclick.net
                https://stats.g.doubleclick.net
                https://www.google.com
                https://www.google.dk;

              img-src
                'self'
                data:
                blob:
                https://www.google-analytics.com
                https://www.googletagmanager.com
                https://www.googleadservices.com
                https://googleads.g.doubleclick.net
                https://pagead2.googlesyndication.com
                https://stats.g.doubleclick.net
                https://www.google.com
                https://www.google.dk;

              frame-src
                https://www.googletagmanager.com
                https://googleads.g.doubleclick.net;

              style-src
                'self'
                'unsafe-inline';

              font-src
                'self'
                data:;
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
