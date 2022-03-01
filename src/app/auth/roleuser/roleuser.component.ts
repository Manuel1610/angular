import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleuserService } from 'src/app/services/roleuser.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-roleuser',
  templateUrl: './roleuser.component.html',
  styleUrls: ['./roleuser.component.css']
})
export class RoleuserComponent implements OnInit {

  ListUserRoles: any;
  faTrash = faTrash;

  constructor(
    private route : ActivatedRoute,
    private roleuserService : RoleuserService,
  ) {  }

  ngOnInit(): void {
    this.getList();
  }
  private getList() {
    this.roleuserService.getList().subscribe(response => {
      this.ListUserRoles=response;
    });
  }
  delete(id  : any) {
    console.log("delete:"+id);
    this.roleuserService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
