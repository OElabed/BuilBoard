import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BuildCardComponent } from './build-card/build-card.component';
import { BuildTableComponent } from './build-table/build-table.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpeedDialFabModule } from 'src/app/shared/components/speed-dial-fab/speed-dial-fab.module';


@NgModule({
  declarations: [
    DashboardComponent,
    BuildCardComponent,
    BuildTableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    SpeedDialFabModule
  ]
})
export class DashboardModule { }
