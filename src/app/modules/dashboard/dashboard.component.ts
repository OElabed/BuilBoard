import { Component, OnInit, ViewChild, HostListener, Inject } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import { FullScreenService } from 'src/app/core/services/full-screen.service';
import { DOCUMENT } from '@angular/common';
import * as buildData from 'src/assets/data/project-builds.json';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FabSpeedButton } from 'src/app/shared/components/speed-dial-fab/speed-dial-fab.component';
import { MonitorService } from 'src/app/core/services/monitor.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fullScreen: Boolean = false;
  gridMode: Boolean = false;
  cardFlex: number = 33;
  minusCardFlex: Boolean = true;
  addCardFlex: Boolean = true;

  fabButtons = [
    {
      icon: 'exit_to_app',
      action: 'EXIT_ACTION',
      toolTip: 'info',
      disabled: false
    },
    {
      icon: 'grid_on',
      action: 'GRID_ACTION',
      toolTip: 'info',
      disabled: false
    },
    {
      icon: 'fullscreen',
      action: 'FULLSCREEN_ACTION',
      toolTip: 'info',
      disabled: false
    },
    {
      icon: 'search',
      action: 'SEARCH_ACTION',
      toolTip: 'info',
      disabled: false
    },
    {
      icon: 'settings',
      action: 'SETTINGS_ACTION',
      toolTip: 'info',
      disabled: false
    },
    {
      icon: 'zoom_in',
      action: 'ZOOM_IN_ACTION',
      toolTip: 'info',
      disabled: false
    },
    {
      icon: 'zoom_out',
      action: 'ZOOM_OUT_ACTION',
      toolTip: 'info',
      disabled: false
    }
  ];

  projectBuilds: any = (buildData as any).default;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private notificationService: NotificationService,
    private fullScreenService: FullScreenService,
    private monitorSerice: MonitorService,
    private titleService: Title
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('BuildBoard - Builds');
  }

  @HostListener('document:fullscreenchange', ['$event'])
  screenChange(event) {
    this.chkScreenMode()
  }

  chkScreenMode() {
    if (this.document.fullscreenElement) {
      //fullscreen
      this.fullScreen = true;
      if (this.gridMode == false) {
        this.monitorSerice.enable();
      }

    } else {
      //not in full screen
      this.fullScreen = false;
      if (this.gridMode == false) {
        this.monitorSerice.disable();
      }

    }
  }

  toggleFullscreen() {
    // this.fullScreen = true;
    this.fullScreenService.openFullscreen();
  }

  exitFullscreen() {
    // this.fullScreen = false;
    this.fullScreenService.closeFullscreen();

  }

  toggleGridMode() {
    this.gridMode = true;

    this.monitorSerice.disable();
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

  minusBuildCardSize(): void {
    let flexList = [10, 20, 25, 33, 50, 100];
    let currentIndex;
    flexList.forEach((value, index) => {
      if (value == this.cardFlex) {
        currentIndex = index
      }
    });

    if (currentIndex - 1 < 0) {
      this.minusCardFlex = false;
    } else {
      this.cardFlex = flexList[currentIndex - 1];
      if (currentIndex - 2 < 0) {
        this.minusCardFlex = false;
      } else {
        this.minusCardFlex = true;
        this.addCardFlex = true;
      }
    }
  }

  addBuildCardSize(): void {
    let flexList = [10, 20, 25, 33, 50, 100];
    let currentIndex;
    flexList.forEach((value, index) => {
      if (value == this.cardFlex) {
        currentIndex = index
      }
    });

    if (currentIndex + 1 > flexList.length - 1) {
      this.addCardFlex = false;
    } else {
      this.cardFlex = flexList[currentIndex + 1];
      if (currentIndex + 2 > flexList.length - 1) {
        this.addCardFlex = false;
      } else {
        this.addCardFlex = true;
        this.minusCardFlex = true;

      }
    }
  }

  onSpeedDialFabAction(button: FabSpeedButton) {
    if (button.action == "FULL_SCREEN") {

    }
    if (button.action == "FULL_SCREEN") {

    }
  }

}
