import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/service/presupuesto.service';


@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.css']
})
export class IngresarGastosComponent implements OnInit {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;

  constructor( private presupuestoservice: PresupuestoService) {
    this.nombreGasto = "";
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto = "";

   }

  ngOnInit(): void {

  }

  agregarGasto(){
    if(this.cantidad > this.presupuestoservice.restante){
      this.formularioIncorrecto = true;
      this.textIncorrecto = "La cantidad ingresada es mayor al restante"
      return;
    }


    if(this.nombreGasto === "" || this.cantidad <= 0){
      this.formularioIncorrecto = true;
      this.textIncorrecto = "Nombre gasto o cantidad incorrecta";

    }else {

      //creamos el objeto
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad:this.cantidad

      }

      //Enviamos el objeto a los subcriptores via sujec
      this.presupuestoservice.agregarGasto(GASTO);

      this.formularioIncorrecto = false;
      this.nombreGasto = "";
      this.cantidad = 0;
    }

  }

}
