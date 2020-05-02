import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service';
import { Register } from '../interfaces/register.interfaces';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import {Toast} from '@ionic-native/toast/ngx';
import { ConnectionService } from '../services/connection-services';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage implements OnInit {

  //constructor() { }
  public registerForm: FormGroup;

 

  constructor(
    
    public navCtrl: NavController, 

              public formBuilder: FormBuilder,

              public modalCtrl: ModalController,

              public authService: AuthenticationService,

              public toastCtrl: ToastController,
              
              public toast: Toast
              ) {

    this.registerForm = this.formBuilder.group({

      email: ['', Validators.compose(

        [Validators.required,

        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]

      )],

      password: ['', Validators.compose([

        Validators.required,

        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#\$%\^\&*\)]+$')

      ])],

      confirmPassword: ['', Validators.compose([

        Validators.required,

        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#\$%\^\&*\)]+$')

      ])]

    });

  }

 
 
  public register({ value, valid }: { value: Register, valid: boolean }): void {


    this.authService.register(value)

    .subscribe((res: Response) => {
      this.presentToast("Success");
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



