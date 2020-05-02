import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {AuthenticationService} from '../services/authentication-service';
import {HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import {ConnectionService} from '../services/connection-services';
import {Toast} from '@ionic-native/toast/ngx';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [LoginPage],
  providers: [
    AuthenticationService,
    HttpClientModule,
    ConnectionService,
    Toast
  ]
})
export class LoginPageModule {}
