import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'angular-mf',
  exposes: {
    './Routes': 'apps/angular-mf/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
