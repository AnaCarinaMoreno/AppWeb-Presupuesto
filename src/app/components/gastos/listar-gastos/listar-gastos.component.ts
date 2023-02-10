import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/service/presupuesto.service';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.css']
})
export class ListarGastosComponent implements OnInit, OnDestroy {
  subscription : Subscription;
  presupuesto: number;
  restante: number;
  listarGasto: any[] = [];

  constructor(private presupuestoservice : PresupuestoService) {
    this.presupuesto = 0;
    this.restante = 0;
    this.subscription = this.presupuestoservice.getGastos().subscribe(data =>{
      this.restante = this.restante - data.cantidad;
      this.listarGasto.push(data);
    })
  }

  ngOnInit(): void {
    this.presupuesto = this.presupuestoservice.presupuesto;
    this.restante = this.presupuestoservice.restante;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  aplicarColor(){
    if(this.presupuesto / 4 > this.restante){
      return 'alert alert-danger';

    }else if (this.presupuesto / 2 > this.restante) {
      return 'alert alert-warning';

    }else {
      return 'alert alert-secondary';
    }
  }

}
