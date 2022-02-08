import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PracticanteService } from 'src/app/CrudService/practicante.service';

@Component({
  selector: 'app-form-practicante',
  templateUrl: './form-practicante.component.html',
  styleUrls: ['./form-practicante.component.css']
})
export class FormPracticanteComponent implements OnInit {

PracticanteForm!:FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private practicanteService: PracticanteService,
  ) {

   }
  ngOnInit(): void {
    this.PracticanteForm = this.formBuild.group({
      Nombres:                 [],
      Apellidos:               [],
      FechaNacimiento:         [],
      DNI:                     [],
      Celular:                 [],
      Turno:                   [],
      Inicio:                  [],
      Fin:                     [],
    });
    let id = this.route.snapshot.paramMap.get('id');
    if  (id !=null){
      this.practicanteService.getById(id).subscribe (Response =>{
        this.PracticanteForm.setValue(Response);
        console.log(Response);
      });
    }
  }
    save(){
      console.log(this.PracticanteForm.value);
      let id =this.route.snapshot.paramMap.get('id');
    if (id != null){
      this.practicanteService.update(id, this.PracticanteForm.value).subscribe(Response =>{
        console.log("UPDATE",Response);
      });
    }else{
      this.practicanteService.add(this.PracticanteForm.value).subscribe(Response =>{
        console.log("ADD ",Response);
      });

    }
    this.router.navigate(['/IndexPracticantes'])
  }

}

