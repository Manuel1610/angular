import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-usuariosform',
  templateUrl: './usuariosform.component.html',
  styleUrls: ['./usuariosform.component.css']
})
export class UsuariosformComponent implements OnInit {

  UsuariosForm!: FormGroup;
  RoleForm!: FormGroup;
  listroles: any;
  rol: any;
  ListRolesUser: any;
  crear: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private userServiceService: UserServiceService,
    private rolService: RolService,
  ) { }

  ngOnInit(): void {
    this.UsuariosForm = this.formBuild.group({
      id  :                    [],
      name:                    [],
      email:                   [],
      email_verified_at:       [],
      created_at:              [],
      updated_at:              [],
    });
    this.RoleForm = this.formBuild.group({
      id  :                    [],
      id_role:                    [],
      id_users:                   [],
    });

    let id = this.route.snapshot.paramMap.get('id');
    if  (id !=null){
      this.crear = false;
      this.rolService.getList().subscribe(response =>{
        this.listroles = response;
        console.log(response);
      })
      this.rolService.roleuser(id).subscribe(response =>{
        this.crear = false;
        this.ListRolesUser = response;
        console.log(response);
      })
      this.userServiceService.getById(id).subscribe (Response =>{
        this.UsuariosForm.setValue(Response);
        console.log(Response);
      });
    }else{
      this.crear = true;

    }


  }
    save(){
      console.log(this.UsuariosForm.value);
      if (this.crear){
        this.userServiceService.add(this.UsuariosForm.value).subscribe(Response =>{
          console.log("ADD ",Response);
        });
      }else{

        this.userServiceService.update(this.UsuariosForm.value.id, this.UsuariosForm.value).subscribe(Response =>{
          console.log("UPDATE",Response);
        });

      }
    this.router.navigate(['/IndeXUsuarios'])
  }
  saveRol(){
    this.RoleForm.value.id_role = this.rol;
    this.RoleForm.value.id_users = this.UsuariosForm.value.id;
    this.rolService.addrole(this.RoleForm.value).subscribe(Response =>{
      console.log("ADD ",Response);
    });
  }

}
