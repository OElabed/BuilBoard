import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmptyLayoutComponent } from './layout/empty-layout/empty-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    EmptyLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ]
})
export class SharedModule { }
