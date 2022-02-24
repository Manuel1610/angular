import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PracticanteService } from 'src/app/CrudService/practicante.service';
import Swal from 'sweetalert2'

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
  ) { }

  ngOnInit(): void {
    this.PracticanteForm = this.formBuild.group({
      Nombres:                 [],
      Apellidos:               [],
      FechaNacimiento:         [],
      DNI:                     ['', [ Validators.required, Validators.pattern("^[0-9]*$")]],
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
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
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
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}


