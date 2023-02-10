import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PresupuestoService } from 'src/app/service/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  constructor(private presupuestoservice: PresupuestoService, 
             private router: Router) { }

  ngOnInit(): void {
    if(this.presupuestoservice.presupuesto === 0){
      this.router.navigate(['/ingresarPresupuesto']);

    }

  }

}
