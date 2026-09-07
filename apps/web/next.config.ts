import type { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: false,
  serverExternalPackages: ['@prisma/client', '@repo/db'],
}

export default config
