import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    FlexLayoutModule
  ],
  exports: [
    FlexLayoutModule
  ]
})
export class CoreModule { }
