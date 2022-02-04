import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuadernoDocumentacionService } from 'src/app/CrudService/cuaderno-documentacion.service';

@Component({
  selector: 'app-index-cuaderno',
  templateUrl: './index-cuaderno.component.html',
  styleUrls: ['./index-cuaderno.component.css']
})
export class IndexCuadernoComponent implements OnInit {

  list : any;

  constructor(
    private route : ActivatedRoute,
    private cuadernoDocumentacionService : CuadernoDocumentacionService,
  ) {
    this.getList();
  }

  ngOnInit(): void {
    this.getList();
  }
  private getList() {
    this.cuadernoDocumentacionService.getList().subscribe(response => {
      this.list=response;
    });
  }
  delete(id  : any) {
    console.log("delete:"+id);
    this.cuadernoDocumentacionService.delete(id).subscribe(response => {
      console.log("de = " + JSON.stringify(response));
      this.getList();
    });
  }
}
