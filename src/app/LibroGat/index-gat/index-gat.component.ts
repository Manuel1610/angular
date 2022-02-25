import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroGatService } from 'src/app/CrudService/libro-gat.service';
import * as printJS from 'print-js';
import { faPenToSquare, faPrint , faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index-gat',
  templateUrl: './index-gat.component.html',
  styleUrls: ['./index-gat.component.css']
})
export class IndexGatComponent implements OnInit {


  ListaGat : any;
  faPenToSquare = faPenToSquare;
  faPrint = faPrint;
  faCirclePlus = faCirclePlus;

  constructor(
    private route : ActivatedRoute,
    private libroGatService : LibroGatService,
  ) {
    this.getList();
  }

  ngOnInit(): void {
    this.getList();
  }
  private getList() {
    this.libroGatService.getList().subscribe(response => {
      this.ListaGat=response;
    });
  }
  delete(id  : any) {
    console.log("delete:"+id);
    this.libroGatService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }
  print(){
    printJS({printable: this.ListaGat, properties:[
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
