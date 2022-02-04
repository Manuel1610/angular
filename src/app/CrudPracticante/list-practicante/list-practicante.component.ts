import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PracticanteService } from 'src/app/CrudService/practicante.service';

@Component({
  selector: 'app-list-practicante',
  templateUrl: './list-practicante.component.html',
  styleUrls: ['./list-practicante.component.css']
})
export class ListPracticanteComponent implements OnInit {

  list: any;

  constructor(
    private route : ActivatedRoute,
    private practicanteService : PracticanteService,
  ) {
    this.getList();
  }

  ngOnInit(): void {
    this.getList();
  }
  private getList() {
    this.practicanteService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id  : any) {
    console.log("delete:"+id);
    this.practicanteService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }

}

