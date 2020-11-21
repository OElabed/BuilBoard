import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { speedDialFabAnimations } from './speed-dial-fab.animations';

export interface FabSpeedButton {
  icon: string;
  action: string;
  toolTip: string;
  disabled: boolean;
}

@Component({
  selector: 'app-speed-dial-fab',
  templateUrl: './speed-dial-fab.component.html',
  styleUrls: ['./speed-dial-fab.component.scss'],
  animations: speedDialFabAnimations
})
export class SpeedDialFabComponent implements OnInit {

  @Input() fabButtons: FabSpeedButton[];
  @Output() actionEvent = new EventEmitter<FabSpeedButton>();

  constructor() { }

  ngOnInit(): void {
  }

  buttons = [];
  fabTogglerState = 'inactive';

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  onButtonAction(action: FabSpeedButton) {
    this.actionEvent.emit(action);
  }
}
