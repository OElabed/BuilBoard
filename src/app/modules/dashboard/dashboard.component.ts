import { Component, OnInit, ViewChild, HostListener, Inject } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { FullScreenService } from 'src/app/core/services/full-screen.service';
import { DOCUMENT } from '@angular/common';
import  * as buildData from 'src/assets/data/project-builds.json';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  fullScreen: Boolean = false;
  gridMode: Boolean = false;

  projectBuilds: any = (buildData as any).default;
  

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private notificationService: NotificationService,
    private fullScreenService: FullScreenService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('BuildBoard - Builds');
    this.dataSource.sort = this.sort;
  }

  @HostListener('fullscreenchange', ['$event'])
  screenChange(event) {
    this.chkScreenMode()
  }

  chkScreenMode() {
    if (this.document.fullscreenElement) {
      //fullscreen
      this.fullScreen = true;
    } else {
      //not in full screen
      this.fullScreen = false;
    }
  }

  toggleFullscreen() {
    // this.fullScreen = true;
    this.fullScreenService.openComponentFullscreen("dashboard");
  }

  exitFullscreen() {
    // this.fullScreen = false;
    this.fullScreenService.closeFullscreen();

  }

  toggleGridMode() {
    this.gridMode = true;
  }

  exitGridMode() {
    this.gridMode = false;
  }

  fullScreenContentStyle(){
      return {
        'overflow-y': 'auto',
        'max-height': (screen.height - 80) + 'px'
      }

  }
}
