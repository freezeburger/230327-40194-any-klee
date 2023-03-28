import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class NgImportModule { }
