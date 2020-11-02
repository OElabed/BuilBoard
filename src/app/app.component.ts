import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'buildboard';
  defaultTheme = 'indigo-pink';

  constructor(
    private themeService: ThemeService,
    private overlayContainer: OverlayContainer
  ) { }

  ngOnInit() {
    let parentElement = this.overlayContainer.getContainerElement().parentElement;
    this.themeService.initialize(parentElement, this.defaultTheme);
  }

}
