import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio2.html',
  styleUrl: './ejercicio2.css',
})
export class Ejercicio2 {
  nombre: string = '';
  correo: string = '';
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  estado: string = '';
  emailValido: boolean = true;

  procesar(): void {
    if (this.altura <= 0) {
      this.estado = 'La altura debe ser mayor que cero.';
      return;
    }

    if (this.peso <= 0) {
      this.estado = 'El peso debe ser mayor que cero.';
      return;
    }

    if (this.nombre.trim() === '') {
      this.estado = 'Por favor, ingrese su nombre antes de continuar.';
      return;
    }

    this.validarEmail();
    if (!this.emailValido) {
      this.estado = 'Por favor, ingrese un correo electrónico válido antes de continuar.';
      return;
    }

    this.imc = this.peso / (this.altura * this.altura);
    if (this.imc < 18.5) {
      this.estado = 'Bajo peso';
    } else if (this.imc < 25) {
      this.estado = 'Peso normal';
    } else if (this.imc < 30) {
      this.estado = 'Sobrepeso';
    } else {
      this.estado = 'Obesidad';
    }
  }


validarEmail(): void {
    if (this.correo.trim() === '') {
      this.emailValido = false;
      return;
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailValido = re.test(this.correo);
  }
}