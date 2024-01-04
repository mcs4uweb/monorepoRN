import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'aeries-angular-mf-entry',
  template: `<aeries-nx-welcome></aeries-nx-welcome>`,
})
export class RemoteEntryComponent {}
