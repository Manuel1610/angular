import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PracticanteService } from 'src/app/CrudService/practicante.service';
import * as printJS from 'print-js';
import { faPenToSquare, faPrint , faCirclePlus , faTrash} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list-practicante',
  templateUrl: './list-practicante.component.html',
  styleUrls: ['./list-practicante.component.css']
})
export class ListPracticanteComponent implements OnInit {

  ListPracticantes: any;
  faPenToSquare = faPenToSquare;
  faPrint = faPrint;
  faCirclePlus = faCirclePlus;
  faTrash = faTrash;

  constructor(
    private route : ActivatedRoute,
    private practicanteService : PracticanteService,
  ) {  }

  ngOnInit(): void {
    this.getList();
  }
  private getList() {
    this.practicanteService.getList().subscribe(response => {
      this.ListPracticantes=response;
    });
  }
  delete(id  : any) {
    console.log("delete:"+id);
    this.practicanteService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }
  print(){
    printJS({printable: this.ListPracticantes, properties:[
    'Nombres',
      'Apellidos',
      'FechaNacimiento',
      'DNI',
      'Celular',
      'Turno',
      'Inicio',
      'Fin',],
    type: 'json'})
  }
}

