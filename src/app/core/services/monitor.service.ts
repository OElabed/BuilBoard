import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  private parent: HTMLElement;

  constructor() { }

  initialize(parentElement: HTMLElement) {
    this.parent = parentElement;
  }

  enable() {
    this.parent.classList.add("monitor-bg");
  }

  disable() {
    this.parent.classList.remove("monitor-bg");
  }
}
