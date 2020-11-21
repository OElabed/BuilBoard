import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  showSpinner: boolean;
  userName: string;
  isAdmin: boolean;

  constructor(private changeDetectorRef: ChangeDetectorRef,
      private media: MediaMatcher,
      private authService: AuthentificationService,
      public themeService: ThemeService,
      public spinnerService: SpinnerService) {

      this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      // tslint:disable-next-line: deprecation
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
      const user = this.authService.getCurrentUser();

      this.isAdmin = user.isAdmin;
      this.userName = user.fullName;

  }

  ngOnDestroy(): void {
      // tslint:disable-next-line: deprecation
      this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit(): void {
      this.changeDetectorRef.detectChanges();
  }
}

