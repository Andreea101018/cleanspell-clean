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
                https://googleads.g.doubleclick.net;

              connect-src
                'self'
                https://www.google-analytics.com
                https://region1.google-analytics.com
                https://www.googletagmanager.com
                https://www.googleadservices.com
                https://www.google.com
                https://googleads.g.doubleclick.net
                https://pagead2.googlesyndication.com;

              img-src
                'self'
                blob:
                data:
                https://www.google-analytics.com
                https://www.googleadservices.com
                https://googleads.g.doubleclick.net
                https://pagead2.googlesyndication.com;

              style-src 'self' 'unsafe-inline';
              font-src 'self' data:;
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
