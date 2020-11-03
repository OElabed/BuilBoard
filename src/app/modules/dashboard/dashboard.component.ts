import { Component, OnInit, ViewChild, HostListener, Inject } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { FullScreenService } from 'src/app/core/services/full-screen.service';
import { DOCUMENT } from '@angular/common';
import * as buildData from 'src/assets/data/project-builds.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fullScreen: Boolean = false;
  gridMode: Boolean = false;
  cardFlex: number = 33;

  projectBuilds: any = (buildData as any).default;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private notificationService: NotificationService,
    private fullScreenService: FullScreenService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('BuildBoard - Builds');
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

  fullScreenContentStyle() {
    return {
      'overflow-y': 'auto',
      'max-height': (screen.height - 80) + 'px'
    }
  }

  changeCardFlex(): void {
    let flexList = [10, 20, 25, 33, 50, 100];
    let index = 0;
    while (true) {
      if (flexList[index] == this.cardFlex) {
        if (index == flexList.length - 1) {
          this.cardFlex = flexList[0];
        } else {
          this.cardFlex = flexList[index + 1];
        }
        break;
      }

      if (index == flexList.length - 1) {
        index = -1;
      }
      index++;
    }
  }
}
