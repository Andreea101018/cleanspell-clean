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
              img-src 'self' blob: data: https://www.google-analytics.com;
              media-src 'self' blob:;
              script-src
                'self'
                'unsafe-inline'
                'unsafe-eval'
                https://www.googletagmanager.com;
              connect-src
                'self'
                https://www.google-analytics.com
                https://www.googletagmanager.com;
              style-src 'self' 'unsafe-inline';
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
