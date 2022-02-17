import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CuadernoSoporteService } from 'src/app/CrudService/cuaderno-soporte.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-cuaderno',
  templateUrl: './form-cuaderno.component.html',
  styleUrls: ['./form-cuaderno.component.css']
})
export class FormCuadernoComponent implements OnInit {

  CuadernoForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private cuadernoSoporteService: CuadernoSoporteService,

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
      this.cuadernoSoporteService.getById(id).subscribe (Response =>{
        this.CuadernoForm.setValue(Response);
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
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          console.log(this.CuadernoForm.value);
          let id =this.route.snapshot.paramMap.get('id');
        if (id != null){
          this.cuadernoSoporteService.update(id, this.CuadernoForm.value).subscribe(Response =>{
            console.log("UPDATE",Response);
          });
        }else{
          this.cuadernoSoporteService.add(this.CuadernoForm.value).subscribe(Response =>{
            console.log("ADD ",Response);
          });
        }
        this.router.navigate(['/indexform'])
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
  }
}
