import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'react-mf',

  exposes: {
    './Module': './src/bootstrap.tsx',
  },
};

export default config;
