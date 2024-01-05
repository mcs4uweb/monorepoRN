import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NxWelcomeComponent } from './nx-welcome.component';

const routes: Routes = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'home',
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
      remoteEntry: 'http://localhost:3002/remoteEntry.js',
      exposedModule: './Module',
      elementName: 'react-app',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'next-mf',
    component: WebComponentWrapper,
    data: {
      type: "module",
      remoteEntry: 'http://localhost:3003/remoteEntry.js',
      exposedModule: './Module',
      elementName: 'next-app',
    } as WebComponentWrapperOptions,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }