import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-provedores',
  templateUrl: './provedores.component.html',
  styleUrls: ['./provedores.component.css']
})
export class ProvedoresComponent implements OnInit {

  proveedores: any;

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.proveedores = this.proveedoresService.getProveedores();
  }

}
