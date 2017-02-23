import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';

import {LoginComponent} from './login/login.component';
// import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

import {LocalStorageService} from './shared/local-storage.service';
import {User} from './shared/models/user';
import {PianodService} from './shared/pianod.service';

@Component({
  // changeDetection : ChangeDetectionStrategy.OnPush,
  selector : 'app-root',
  templateUrl : './app.component.html',
  styleUrls : [ './app.component.scss' ]
})

export class AppComponent implements OnInit, OnDestroy {
  error;
  connected = false; // is set from child ConnectComponent
  playback;
  song;
  user = new User();
  loggedIn = false;
  // currentStation: string;
  barConfig = new MdSnackBarConfig();
  // SWIPE_ACTION = {LEFT : 'swipeleft', RIGHT : 'swiperight'};
  // selectedTab: number = 0;

  constructor(private pianodService: PianodService,
              private localStorageService: LocalStorageService,
              private snackBar: MdSnackBar) {
    // window.localStorage.clear();
    this.barConfig.duration = 3000;
  }

  ngOnInit() {
    this.error = this.pianodService.error$.subscribe(
        (err) => { this.snackBar.open(err, '', this.barConfig); });
    // this.pianodService.currentStation$.subscribe(
    //     currentStation => this.currentStation = currentStation);
    this.pianodService.user$.subscribe(user => this.user = user);

    this.pianodService.connected$.subscribe((state) => {
      // lost connection
      if (this.connected && state === false) {
        this.snackBar.open('lost connection to pianod', '', this.barConfig);
      }
      this.connected = state;
    });
  }
  ngOnDestroy() {
    // console.log('ngOn destroy');
    // this.error.unsubscribe();
  }

  disconnect() {
    // this.localStorageService.remove('pianodUrl');
    this.pianodService.disconnect();
    // this.connected = false;
  }

  //  event from child component
  //  TODO bug after losing connection connect component should be rendered
  // userConnected(state) { this.connected = state; }

  // userLogin(user) { this.user = user; }
  snackBarMsg(msg: string) { this.snackBar.open(msg, '', this.barConfig); }
}
