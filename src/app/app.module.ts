import 'hammerjs';

import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
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
import {PlaylistsComponent} from './playlists/playlists.component';
import {QueueComponent} from './queue/queue.component';
import {SearchComponent} from './search/search.component';
import {SettingsComponent} from './settings/settings.component';
import {
  ConfirmDialogComponent
} from './shared/confirm-dialog/confirm-dialog.component';
import {LocalStorageService} from './shared/local-storage.service';
import {
  LoginDialogComponent
} from './shared/login-dialog/login-dialog.component';
import {PianodService} from './shared/pianod.service';

@NgModule({
  declarations : [
    AppComponent, NowPlayingComponent, LoginComponent, ConnectComponent,
    ControlsComponent, LoginDialogComponent, ConfirmDialogComponent,
    CommandLineComponent, MessagePipe, PlaylistsComponent, SettingsComponent,
    SearchComponent, QueueComponent
  ],
  entryComponents : [ LoginDialogComponent, ConfirmDialogComponent ],
  imports : [
    BrowserModule, FormsModule, BrowserAnimationsModule, MaterialModule,
    FlexLayoutModule, ReactiveFormsModule
  ],
  providers : [ PianodService, LocalStorageService ],
  bootstrap : [ AppComponent ]
})

export class AppModule {
}
