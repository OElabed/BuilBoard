import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { EmptyLayoutComponent } from './empty-layout/empty-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    EmptyLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatRadioModule
  ]
})
export class SharedModule { }
