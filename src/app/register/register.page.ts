import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

  name: string = '';
  phone: string = ''; 
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    if(form.valid) {
      this.navCtrl.navigateBack('/login');
    }
  }

}
