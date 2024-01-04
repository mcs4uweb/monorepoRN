import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'next-mf',

  exposes: {
    './Module': './src/bootstrap.tsx',
  },
};

export default config;
