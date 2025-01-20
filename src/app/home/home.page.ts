import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  ngOnInit() {
    let numero = 0;
    console.log('Hola Mundo!');

    
    numero = 5;
    numero = 10;
    numero = 7;
    numero = numero * 2;

    console.log('El beto es un prro infiel');
    console.log('XD');
    console.log('A ver que pasa');
    console.log('Que tirazo papi, perfecto');
  }

}
