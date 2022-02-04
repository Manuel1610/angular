import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CuadernoDocumentacionService } from 'src/app/CrudService/cuaderno-documentacion.service';


@Component({
  selector: 'app-formulario-cuaderno',
  templateUrl: './formulario-cuaderno.component.html',
  styleUrls: ['./formulario-cuaderno.component.css']
})
export class FormularioCuadernoComponent implements OnInit {
CuadernoForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private cuadernoDocumentacionService: CuadernoDocumentacionService,

  ) {

  }

  ngOnInit(): void {
    this.CuadernoForm = this.formBuild.group({
      id:                 [],
      fecha:              [],
      phone:              [],
      area:               [],
      problema:           [],
      responsablearea:    [],
      responsablesoporte: [],
      codigopatrimonial:  [],
      fechaentrega:       [],
      salida:             [],
        });
    let id = this.route.snapshot.paramMap.get('id');
    if  (id !=null){
      this.cuadernoDocumentacionService.getById(id).subscribe (Response =>{
        this.CuadernoForm.setValue(Response);
        console.log(Response);
      });
    }
  }
    save(){
      console.log(this.CuadernoForm.value);
      let id =this.route.snapshot.paramMap.get('id');
    if (id != null){
      this.cuadernoDocumentacionService.update(id, this.CuadernoForm.value).subscribe(Response =>{
        console.log("UPDATE",Response);
      });
    }else{
      this.cuadernoDocumentacionService.add(this.CuadernoForm.value).subscribe(Response =>{
        console.log("ADD ",Response);
      });

    }
    this.router.navigate(['/indexformulario'])
  }
}
