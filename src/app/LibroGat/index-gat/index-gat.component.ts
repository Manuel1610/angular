import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroGatService } from 'src/app/CrudService/libro-gat.service';

@Component({
  selector: 'app-index-gat',
  templateUrl: './index-gat.component.html',
  styleUrls: ['./index-gat.component.css']
})
export class IndexGatComponent implements OnInit {


  list : any;

  constructor(
    private route : ActivatedRoute,
    private libroGatService : LibroGatService,
  ) {
    this.getList();
  }

  ngOnInit(): void {
    this.getList();
  }
  private getList() {
    this.libroGatService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id  : any) {
    console.log("delete:"+id);
    this.libroGatService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}
