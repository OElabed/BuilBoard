import { Injectable } from '@angular/core';

export interface Theme {
  theme: string;
  display: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private selectedTheme: string = '';
  private parent: HTMLElement;

  private prebuiltThemes: Theme[] = [
    { theme: 'deeppurple-amber', display: 'Deep Purple / Amber' },
    { theme: 'indigo-pink', display: 'Indigo / Pink' },
    { theme: 'pink-bluegrey', display: 'Pink / Blue Grey' },
    { theme: 'purple-green', display: 'Purple / Green' },
  ];

  constructor() { }

  initialize(parentElement: HTMLElement, defaultTheme: string) {
    this.parent = parentElement;
    this.selectedTheme = defaultTheme;
    this.parent.classList.add(this.selectedTheme);
  }

  setSelectedTheme(theme: string) {
    this.parent.classList.replace(this.selectedTheme, theme);
    this.selectedTheme = theme;
  }

  getSelectedTheme(): string {
    return this.selectedTheme;
  }

  getThemeList(): Theme[] {
    return this.prebuiltThemes;
  }
}
