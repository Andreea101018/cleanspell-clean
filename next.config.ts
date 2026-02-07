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
                https://www.google-analytics.com;

              connect-src
                'self'
                https://www.google-analytics.com
                https://region1.google-analytics.com
                https://www.googletagmanager.com
                https://www.googleadservices.com
                https://pagead2.googlesyndication.com;

              img-src
                'self'
                data:
                blob:
                https://www.google-analytics.com
                https://www.googletagmanager.com
                https://googleads.g.doubleclick.net;

              frame-src
                https://www.googletagmanager.com;

              style-src
                'self'
                'unsafe-inline';
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
