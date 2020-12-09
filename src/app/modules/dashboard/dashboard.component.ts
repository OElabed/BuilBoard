import { Component, OnInit, ViewChild, HostListener, Inject } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import { FullScreenService } from 'src/app/core/services/full-screen.service';
import { DOCUMENT } from '@angular/common';
import * as buildData from 'src/assets/data/project-builds.json';
import { FabSpeedButton } from 'src/app/shared/components/speed-dial-fab/speed-dial-fab.component';
import { MonitorService } from 'src/app/core/services/monitor.service';
import { Router } from '@angular/router';
import { fadeInDownOnEnterAnimation, fadeOutUpOnLeaveAnimation } from 'angular-animations';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeInDownOnEnterAnimation({ duration: 500 }), fadeOutUpOnLeaveAnimation({ duration: 500 })]
})
export class DashboardComponent implements OnInit {
  fullScreen: Boolean = false;
  gridView: Boolean = false;
  cardFlex: number = 33;
  zoomOutCardFlex: Boolean = true;
  zoomInCardFlex: Boolean = true;
  displaySearch: Boolean = false
  searchValue: string = '';

  // @ViewChild('searchInput') searchInput: MatInput;

  fabButtonsModuleView = [
    {
      icon: 'exit_to_app',
      action: 'EXIT_ACTION',
      toolTip: 'Exit',
      disabled: false
    },
    {
      icon: 'grid_on',
      action: 'GRID_ACTION',
      toolTip: 'Grid View',
      disabled: false
    },
    {
      icon: 'fullscreen',
      action: 'FULLSCREEN_ACTION',
      toolTip: 'Fullscreen On',
      disabled: false
    },
    {
      icon: 'search',
      action: 'SEARCH_ACTION',
      toolTip: 'Search project',
      disabled: false
    },
    {
      icon: 'settings',
      action: 'SETTINGS_ACTION',
      toolTip: 'Settings',
      disabled: false
    },
    {
      icon: 'zoom_in',
      action: 'ZOOM_IN_ACTION',
      toolTip: 'Zoom In',
      disabled: false
    },
    {
      icon: 'zoom_out',
      action: 'ZOOM_OUT_ACTION',
      toolTip: 'Zoom Out',
      disabled: false
    }
  ];

  fabButtonsGridView = [
    {
      icon: 'exit_to_app',
      action: 'EXIT_ACTION',
      toolTip: 'Exit',
      disabled: false
    },
    {
      icon: 'view_module',
      action: 'MODULE_ACTION',
      toolTip: 'Module View',
      disabled: false
    },
    {
      icon: 'fullscreen',
      action: 'FULLSCREEN_ACTION',
      toolTip: 'Fullscreen On',
      disabled: false
    },
    {
      icon: 'search',
      action: 'SEARCH_ACTION',
      toolTip: 'Search project',
      disabled: false
    },
    {
      icon: 'settings',
      action: 'SETTINGS_ACTION',
      toolTip: 'Settings',
      disabled: false
    }
  ];

  fabButtons = [];

  projectBuilds: any = (buildData as any).default;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private notificationService: NotificationService,
    private fullScreenService: FullScreenService,
    private monitorSerice: MonitorService,
    private titleService: Title,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.titleService.setTitle('BuildBoard - Builds');
    this.fabButtons = this.fabButtonsModuleView;
  }

  @HostListener('document:fullscreenchange', ['$event'])
  screenChange(event) {
    this.chkScreenMode()
  }

  chkScreenMode() {
    if (this.document.fullscreenElement) {
      //fullscreen
      this.fullScreen = true;
      if (this.gridView == false) {
        this.monitorSerice.enable();
      }
      this.changeFabFullscreenBtnToOff();
    } else {
      //not in full screen
      this.fullScreen = false;
      if (this.gridView == false) {
        this.monitorSerice.disable();
      }

      this.changeFabFullscreenBtnToOn();

    }
  }

  toggleFullscreenAction() {
    // this.fullScreen = true;
    this.fullScreenService.openFullscreen();
  }

  exitFullscreenAction() {
    // this.fullScreen = false;
    this.fullScreenService.closeFullscreen();

  }

  activateGridViewAction() {
    this.gridView = true;
    this.monitorSerice.disable();
    this.fabButtons = this.fabButtonsGridView;
  }

  activateModuleViewAction() {
    this.gridView = false;
    this.fabButtons = this.fabButtonsModuleView;
  }

  // fullScreenContentStyle() {
  //   return {
  //     'overflow-y': 'auto',
  //     'max-height': (screen.height - 80) + 'px'
  //   }
  // }
  // // TODO delete it 
  // changeCardFlex(): void {
  //   let flexList = [10, 20, 25, 33, 50, 100];
  //   let index = 0;
  //   while (true) {
  //     if (flexList[index] == this.cardFlex) {
  //       if (index == flexList.length - 1) {
  //         this.cardFlex = flexList[0];
  //       } else {
  //         this.cardFlex = flexList[index + 1];
  //       }
  //       break;
  //     }

  //     if (index == flexList.length - 1) {
  //       index = -1;
  //     }
  //     index++;
  //   }
  // }

  zoomOutModulesAction(): void {
    let flexList = [10, 20, 25, 33, 50, 100];
    let currentIndex;
    flexList.forEach((value, index) => {
      if (value == this.cardFlex) {
        currentIndex = index
      }
    });

    if (currentIndex - 1 < 0) {
      this.disableFabZoomOutBtn();
    } else {
      this.cardFlex = flexList[currentIndex - 1];
      if (currentIndex - 2 < 0) {
        this.disableFabZoomOutBtn();
      } else {
        this.enableFabZoomOutBtn();
        this.enableFabZoomInBtn();
      }
    }
  }

  zoomInModulesAction(): void {
    let flexList = [10, 20, 25, 33, 50, 100];
    let currentIndex;
    flexList.forEach((value, index) => {
      if (value == this.cardFlex) {
        currentIndex = index
      }
    });

    if (currentIndex + 1 > flexList.length - 1) {
      this.disableFabZoomInBtn();
    } else {
      this.cardFlex = flexList[currentIndex + 1];
      if (currentIndex + 2 > flexList.length - 1) {
        this.disableFabZoomInBtn();
      } else {
        this.enableFabZoomInBtn();
        this.enableFabZoomOutBtn();

      }
    }
  }

  exitDashboardAction(): void {
    this.router.navigate(['/']);
  }

  goToSettingsAction(): void {
    this.router.navigate(['/settings']);
  }

  onSpeedDialFabAction(button: FabSpeedButton) {
    if (button.action == "EXIT_ACTION") {
      this.exitDashboardAction();
    }
    if (button.action == "GRID_ACTION") {
      this.activateGridViewAction();
    }
    if (button.action == "MODULE_ACTION") {
      this.activateModuleViewAction();
    }
    if (button.action == "FULLSCREEN_ACTION") {
      this.toggleFullscreenAction();
    }
    if (button.action == "EXIT_FULLSCREEN_ACTION") {
      this.exitFullscreenAction();
    }
    if (button.action == "SEARCH_ACTION") {
      this.openSearchAction();
    }
    if (button.action == "SETTINGS_ACTION") {
      this.goToSettingsAction();
    }
    if (button.action == "ZOOM_IN_ACTION") {
      this.zoomInModulesAction();
    }
    if (button.action == "ZOOM_OUT_ACTION") {
      this.zoomOutModulesAction();
    }
  }

  findButtonSpeedDialFab(action: string): FabSpeedButton[] {
    return this.fabButtons.filter(btn => btn.action == action);
  }

  changeFabFullscreenBtnToOn() {
    let btn = this.findButtonSpeedDialFab('EXIT_FULLSCREEN_ACTION')[0];
    btn.icon = 'fullscreen';
    btn.action = 'FULLSCREEN_ACTION';
    btn.toolTip = 'Fullscreen On';
    btn.disabled = false;
  }

  changeFabFullscreenBtnToOff() {
    let btn = this.findButtonSpeedDialFab('FULLSCREEN_ACTION')[0];
    btn.icon = 'fullscreen_exit';
    btn.action = 'EXIT_FULLSCREEN_ACTION';
    btn.toolTip = 'Fullscreen Off';
    btn.disabled = false;
  }

  disableFabZoomInBtn() {
    let btn = this.findButtonSpeedDialFab('ZOOM_IN_ACTION')[0];
    btn.disabled = true;
  }

  enableFabZoomInBtn() {
    let btn = this.findButtonSpeedDialFab('ZOOM_IN_ACTION')[0];
    btn.disabled = false;
  }

  disableFabZoomOutBtn() {
    let btn = this.findButtonSpeedDialFab('ZOOM_OUT_ACTION')[0];
    btn.disabled = true;
  }

  enableFabZoomOutBtn() {
    let btn = this.findButtonSpeedDialFab('ZOOM_OUT_ACTION')[0];
    btn.disabled = false;
  }

  openSearchAction() {
    this.displaySearch = true;
    // this.searchInput.focus();
  }

  onDismissSearch() {
    this.displaySearch = false;
  }

  onEscSearchInput() {
    this.searchValue = '';
    this.displaySearch = false;
  }
}
