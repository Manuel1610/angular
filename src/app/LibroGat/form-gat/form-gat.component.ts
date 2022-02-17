import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LibroGatService } from 'src/app/CrudService/libro-gat.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-form-gat',
  templateUrl: './form-gat.component.html',
  styleUrls: ['./form-gat.component.css']
})
export class FormGatComponent implements OnInit {

  CuadernoFormGat!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private libroGatService: LibroGatService,

  ) {

  }

  ngOnInit(): void {
    this.CuadernoFormGat = this.formBuild.group({
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
      this.libroGatService.getById(id).subscribe (Response =>{
        this.CuadernoFormGat.setValue(Response);
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
      console.log(this.CuadernoFormGat.value);
      let id =this.route.snapshot.paramMap.get('id');
    if (id != null){
      this.libroGatService.update(id, this.CuadernoFormGat.value).subscribe(Response =>{
        console.log("UPDATE",Response);
      });
    }else{
      this.libroGatService.add(this.CuadernoFormGat.value).subscribe(Response =>{
        console.log("ADD ",Response);
      });

    }
    this.router.navigate(['/IndeXGat'])
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
}
}

