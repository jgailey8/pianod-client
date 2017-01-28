import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

import {LocalStorageService} from '../local-storage.service';
import {PianodService} from '../pianod.service';
import {User} from '../user';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';

@Component({
  moduleId : module.id,
  selector : 'app-login',
  templateUrl : './login.component.html',
  styleUrls : [ './login.component.scss' ]
})

export class LoginComponent implements OnInit {
  dialogRef: MdDialogRef<LoginDialogComponent>;
  loginInfo: LoginInfo;
  user: User = new User();
  @Output() userLogin = new EventEmitter<User>();

  constructor(private pianodService: PianodService,
              private localStorageService: LocalStorageService,
              public dialog: MdDialog) {}

  ngOnInit() {
    this.loginInfo = this.localStorageService.get('userLogin');
    if (this.loginInfo) {
      // console.log('auto login');
      this.login(this.loginInfo);
    }

    this.pianodService.user$.subscribe((user: User) => {
      this.user = user;
      if (user.loggedIn) {
        this.userLogin.emit(user);
        // TODO : passsword is stored in plain text in browser storage!
        // logInfo could potential be modified before event, potentially saving
        // incorrect login credientials
        this.localStorageService.save('userLogin', this.loginInfo);
      }
    });
  }

  openDialog() {
    this.dialogRef =
        this.dialog.open(LoginDialogComponent, {disableClose : true});

    this.dialogRef.afterClosed().subscribe((loginInput: LoginInfo) => {
      if (loginInput) {
        this.loginInfo = loginInput;
        this.login(loginInput);
      }
      this.dialogRef = null;
    });
  }

  login(loginData: LoginInfo) {
    this.pianodService.sendCmd(
        `user ${loginData.username} ${loginData.password}`);
  }

  logout() {
    this.localStorageService.remove('userLogin');
    this.pianodService.logout();
  }
}

interface LoginInfo {
  username: string;
  password: string;
}