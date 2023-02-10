import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/service/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent implements OnInit {
  cantidad:number;
  cantidadIncorrecta:boolean;

  constructor(private presupuestoservice: PresupuestoService, private router: Router )
   { 
    this.cantidad= 0;
    this.cantidadIncorrecta= false;
  }

  ngOnInit(): void {
  }

  agregar(){
    if(this.cantidad > 0){
      this.cantidadIncorrecta = false;
      this.presupuestoservice.presupuesto = this.cantidad;
      this.presupuestoservice.restante = this.cantidad;
      this.router.navigate(['/gastos']);
      this.cantidad= 0;

    }else {
      this.cantidadIncorrecta = true;
    }
  }

}
