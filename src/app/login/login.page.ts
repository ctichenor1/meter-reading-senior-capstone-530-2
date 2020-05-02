/*import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service';
import { Login } from '../interfaces/login.interface';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import {Toast} from '@ionic-native/toast/ngx';
import { ConnectionService } from '../services/connection-services';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  //constructor() { }
  public loginForm: FormGroup;

 

  constructor(
    
    public navCtrl: NavController, 

              public formBuilder: FormBuilder,

              public modalCtrl: ModalController,

              public authService: AuthenticationService,

              public toastCtrl: ToastController,
              
              public toast: Toast,
              
              private router: Router
              ) {

    this.loginForm = this.formBuilder.group({

      username: ['', Validators.compose(

        [Validators.required,

        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]

      )],

      password: ['', Validators.compose([

        Validators.required,

        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#\$%\^\&*\)]+$')

      ])],


    });

  }

  goToDashBoard() //function to navigate to the mainmenu
  {
    this.router.navigate(['/mainmenu']);
  }
 
 
  public login({ value, valid }: { value: Login, valid: boolean }): void {


    this.authService.login(value)

    .subscribe((res: Response) => {
      this.presentToast("Success");
      JSON.stringify(Response)
      this.goToDashBoard(); //method to navigate to home page (main menu) 

    },

    (err : any) => {
      err.error = JSON.stringify(err.error);
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



