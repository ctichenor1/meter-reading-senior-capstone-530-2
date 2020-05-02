import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service';
import { account } from '../interfaces/accountnumber.interface';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import {Toast} from '@ionic-native/toast/ngx';
import { ConnectionService } from '../services/connection-services';
import {ApiService} from '../services/getroutereading-service';
import { from } from 'rxjs';
//import {LaunchNavigator, LaunchNavigatorOptions} from '@ionic-native/launch-navigator';

@Component({
  selector: 'app-optionselect',
  templateUrl: 'optionselect.page.html',
  styleUrls: ['optionselect.page.scss'],
  


})
export class OptionselectPage{
  datauser: account[] = [];
  routeNum : string;

  constructor(
    public api: ApiService,
    //private launchNavigator: LaunchNavigator
  ) {}
 
  ngOnInit() {
    
    
  }
 
  async getAccountsByRoute(routeNum) {
    await this.api.getAccountsByRoute(routeNum)
      .subscribe(res => {
        //console.log(res.route);
        this.datauser = (res);
		   // console.log(this.datauser);
      }, err => {
        console.log(err);
      });
  }
}
/*export class OptionselectPage implements OnInit {

  constructor() { }
  public optionselectForm: FormGroup;

 
  /*
  constructor(
    
    public navCtrl: NavController, 

              public formBuilder: FormBuilder,

              public modalCtrl: ModalController,

              public meterService: GetMeterReading,

              public toastCtrl: ToastController,
              
              public toast: Toast
              ) {

    this.optionselectForm = this.formBuilder.group({

      meterID: ['', Validators.compose(

        [Validators.required,

        Validators.pattern('^[0-9]*$'),
        
        Validators.maxLength(50),
      ]

      )],


    });

  }

 
 
  public optionselect({ value, valid }: { value: getMeter, valid: boolean }): void {


    this.meterService.getMeter(value)

    .subscribe((res: Response) => {
      this.presentToast(Response);
      //this.goToDashboard(res); //method to navigate to home page (main menu) 

    },

    (err : any) => {

      this.presentToast(err.error); //displays error messages from API 
      

    });  
               

}
  

  ngOnInit() {

  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  } 
}

*/
