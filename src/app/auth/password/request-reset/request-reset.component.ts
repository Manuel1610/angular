import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null
  };


  constructor(
    private Jarvis: JarwisService
  ) { }

  ngOnInit() {
    Swal.fire({
      title: 'Error!',
      text: 'Aun no implementado!',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }


  onSubmit() {
//    this.Notfiy.info('Wait...' ,{timeout:5000})
    this.Jarvis.sendPasswordReset(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
//    error => this.notify.error(error.error.error)
    );
  }
  handleError(error: any): void {
    console.log(error)
  }

  handleResponse(res : any) {
//    this.Notfiy.success(res.data,{timeout:0});
    this.form.email = null;
  }

}
