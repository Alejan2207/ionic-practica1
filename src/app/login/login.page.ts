import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.email === 'gael.diaz@gmail.com' && this.password === '12345') {
      this.navCtrl.navigateRoot('/inicio');
    }else{
      this.presentToast('bottom');
    }
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Credenciales de acceso incorrectas',
      duration: 5000,
      position: position,
      color: 'warning'
    });

    await toast.present();
  }

}
