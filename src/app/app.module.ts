import 'hammerjs';

import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {CommandLineComponent} from './command-line/command-line.component';
import {MessagePipe} from './command-line/message.pipe';
import {ConnectComponent} from './connect/connect.component';
import {ControlsComponent} from './controls/controls.component';
import {LoginComponent} from './login/login.component';
import {NowPlayingComponent} from './now-playing/now-playing.component';
import {SearchComponent} from './search/search.component';
import {
  ConfirmDialogComponent,
  InputDialogComponent,
  LoginDialogComponent,
  StationSelectDialogComponent
} from './shared/dialogs';
import {LocalStorageService} from './shared/local-storage.service';
import {PianodService} from './shared/pianod.service';
import {ManageSeedsComponent} from './stations/manage-seeds.component';
import {StationsComponent} from './stations/stations.component';

@NgModule({
  declarations : [
    AppComponent, NowPlayingComponent, LoginComponent, ConnectComponent,
    ControlsComponent, StationsComponent, LoginDialogComponent, SearchComponent,
    ConfirmDialogComponent, CommandLineComponent, StationSelectDialogComponent,
    ManageSeedsComponent, InputDialogComponent, MessagePipe
  ],
  entryComponents : [
    LoginDialogComponent, ConfirmDialogComponent, StationSelectDialogComponent,
    ManageSeedsComponent, InputDialogComponent
  ],
  imports : [
    BrowserModule, BrowserAnimationsModule, MaterialModule.forRoot(),
    FormsModule, ReactiveFormsModule
  ],
  providers : [ PianodService, LocalStorageService ],
  bootstrap : [ AppComponent ]
})
export class AppModule {
}
