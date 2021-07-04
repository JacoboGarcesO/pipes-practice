import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activar = true;
  nombre = 'Capitán América';
  nombre2 = 'cApItAn aMeRiCa';
  personajes: string[] = ['Inronman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;
  fecha: Date = new Date();
  idioma = 'en';
  videoUrl = 'https://www.youtube.com/embed/RZNNu2pO49g';
  promesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llegó');
    }, 4500);
  });
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

  toggleFormatPassword(): void {
    this.activar = !this.activar;
  }

  lenguajeEnglish(): void {
    this.idioma = 'en';
  }

  lenguajeFrances(): void {
    this.idioma = 'fr';
  }

  lenguajeSpanish(): void {
    this.idioma = 'es';
  }
}
