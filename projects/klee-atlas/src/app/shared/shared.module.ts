import { NgModule } from '@angular/core';

import { KleeModule } from 'klee';

import { NgImportModule } from './ng-import.module';

@NgModule({
  exports: [
    KleeModule,
    NgImportModule
  ]
})
export class SharedModule { }
