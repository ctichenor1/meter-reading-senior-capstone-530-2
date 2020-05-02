import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service';
import { account } from '../interfaces/accountnumber.interface';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import {Toast} from '@ionic-native/toast/ngx';
import { ConnectionService } from '../services/connection-services';
import {ApiService2} from '../services/getmeterreading-service';
import { from } from 'rxjs';
import { meterlist } from '../interfaces/meterread.interface';

@Component({
  selector: 'app-meterreadings',
  templateUrl: './meterreadings.page.html',
  styleUrls: ['./meterreadings.page.scss'],
})
export class MeterreadingsPage implements OnInit {
  datauser2: meterlist[] = [];
  meterNum : string;
  constructor(
    public api: ApiService2
  ) { 
  }

  ngOnInit() {
  }
  async getAccountsByRoute(meterNum) {
    await this.api.getAccountsByRoute(meterNum)
      .subscribe(res => {
        //console.log(res.route);
        this.datauser2 = (res);
		   // console.log(this.datauser);
      }, err => {
        console.log(err);
      });
  }
}

