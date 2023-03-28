import { NgModule } from '@angular/core';
import { PrimeImportModule } from './prime-import.module';
import { NgImportModule } from './ng-import.module';

@NgModule({
  exports: [
    PrimeImportModule,
    NgImportModule
  ]
})
export class SharedModule { }
