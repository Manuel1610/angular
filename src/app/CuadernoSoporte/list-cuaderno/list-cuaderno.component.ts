import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuadernoSoporteService } from 'src/app/CrudService/cuaderno-soporte.service';
@Component({
  selector: 'app-list-cuaderno',
  templateUrl: './list-cuaderno.component.html',
  styleUrls: ['./list-cuaderno.component.css']
})
export class ListCuadernoComponent implements OnInit {

  list : any;

  constructor(
    private route : ActivatedRoute,
    private cuadernoSoporteService : CuadernoSoporteService,
  ) {
    this.getList();
  }

  ngOnInit(): void {
    this.getList();
  }
  private getList() {
    this.cuadernoSoporteService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id  : any) {
    console.log("delete:"+id);
    this.cuadernoSoporteService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
