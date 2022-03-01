import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuadernoDocumentacionService } from 'src/app/CrudService/cuaderno-documentacion.service';
import * as printJS from 'print-js';
import { faPenToSquare, faPrint , faCirclePlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-index-cuaderno',
  templateUrl: './index-cuaderno.component.html',
  styleUrls: ['./index-cuaderno.component.css']
})
export class IndexCuadernoComponent implements OnInit {

  listarDatos : any;
  faPenToSquare = faPenToSquare;
  faPrint = faPrint;
  faCirclePlus = faCirclePlus;

  constructor(
    private route : ActivatedRoute,
    private cuadernoDocumentacionService : CuadernoDocumentacionService,
  ) {
    this.getList();
  }

  ngOnInit(): void {
    this.getList();
  }
  private getList() {
    this.cuadernoDocumentacionService.getList().subscribe(response => {
      this.listarDatos=response;
    });
  }
  delete(id  : any) {
    console.log("delete:"+id);
    this.cuadernoDocumentacionService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }
  print(){
    printJS({printable: this.listarDatos, properties:[
      'id',
      'fecha',
      'documento',
      'folio_entrada',
      'procedencia',
      'asunto',
      'encargado',
      'proveido',
      'folio_salida',
      'fechaentrega',
      'cargo'],
    type: 'json'})
  }
}
