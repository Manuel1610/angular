import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuadernoSoporteService } from 'src/app/CrudService/cuaderno-soporte.service';
import * as printJS from 'print-js';
import { faPenToSquare, faPrint , faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import {ButtonModule} from 'primeng/button';


@Component({
  selector: 'app-list-cuaderno',
  templateUrl: './list-cuaderno.component.html',
  styleUrls: ['./list-cuaderno.component.css']
})
export class ListCuadernoComponent implements OnInit {

  list : any;
  faPenToSquare = faPenToSquare;
  faPrint = faPrint;
  faCirclePlus = faCirclePlus;

  constructor(
    private route : ActivatedRoute,
    private cuadernoSoporteService : CuadernoSoporteService,
  ) {
    this.getList();
  }

  ngOnInit(): void {
    this.getList();
  }
  private getList() {
    this.cuadernoSoporteService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id  : any) {
    console.log("delete:"+id);
    this.cuadernoSoporteService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }
  print(){
    printJS({printable: this.list, properties:[
    'id',
    'fecha',
    'phone',
    'area',
    'problema',
    'responsablearea',
    'responsablesoporte',
    'codigopatrimonial',
    'fechaentrega',
    'salida'],
    type: 'json'})
  }
}
