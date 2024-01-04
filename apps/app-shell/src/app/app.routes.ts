import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'angular-mf',
    loadChildren: () => loadRemoteModule('angular-mf', './Routes').then((m) => m.remoteRoutes)
  },
  {
    path: 'react-mf',
    component: WebComponentWrapper,
    data: {
      type: "module",
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Module',
      elementName: 'react-app',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'next-mf',
    component: WebComponentWrapper,
    data: {
      type: "module",
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: './Module',
      elementName: 'next-app',
    } as WebComponentWrapperOptions,
  }
];
