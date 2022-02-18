import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  list:any;

  constructor(
    private route : ActivatedRoute,
    private userServiceService : UserServiceService,
  ) {  }
  ngOnInit(): void {
    this.getList();
  }
  private getList() {
    this.userServiceService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id  : any) {
    console.log("delete:"+id);
    this.userServiceService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }


}
