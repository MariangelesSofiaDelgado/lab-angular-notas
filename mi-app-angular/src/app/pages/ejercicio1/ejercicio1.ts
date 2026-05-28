import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1.html',
  styleUrl: './ejercicio1.css',
})
export class Ejercicio1 {
  codigo: number = 0;
  nombres: string = '';
  n1: number = 0;
  n2: number = 0;
  n3: number = 0;
  n4: number = 0;
  suma: number = 0;
  promedio: number = 0;
  estado: string = '';
  observacion: string = '';
  mensaje = '';

  procesar(): void {

      if (!this.regularnota()) {
        this.mensaje = 'Todas las notas deben estar entre 0 y 20.';
        this.limpiar(); 
        return;
      }
      this.suma = this.n1 + this.n2 + this.n3 + this.n4;
      this.promedio = this.suma / 4;
      this.estado = this.promedio >= 13 ? 'Aprobado' : 'Desaprobado';

      if (this.promedio >= 17) {
        this.observacion = 'EXCELENTE';
      } else if (this.promedio >= 13) {
        this.observacion = 'REGULAR';
      } else {
        this.observacion = 'EN RIESGO';
      }
    }

    regularnota(): boolean {
      return (
        this.n1 >= 0 && this.n1 <= 20 &&
        this.n2 >= 0 && this.n2 <= 20 &&
        this.n3 >= 0 && this.n3 <= 20 &&
        this.n4 >= 0 && this.n4 <= 20
      );
    }

    limpiar(): void {
      this.codigo = 0;
      this.nombres = '';
      this.n1 = 0;
      this.n2 = 0;
      this.n3 = 0;
      this.n4 = 0;
      this.suma = 0;
      this.promedio = 0;
      this.estado = '';
      this.observacion = '';
      this.mensaje = '';
    }
  }



