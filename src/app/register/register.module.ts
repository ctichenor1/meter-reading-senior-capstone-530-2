import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
 
import { RegisterPage } from './register.page';
import { AuthenticationService } from '../services/authentication-service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { ConnectionService } from '../services/connection-services';
import { Toast } from '@ionic-native/toast/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [RegisterPage],
  providers: [
    AuthenticationService,
    HttpClient,
    ConnectionService,
    Toast
  ]
})
export class RegisterPageModule {}

