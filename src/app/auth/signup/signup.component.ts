import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  public error = [];

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) { }

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    Swal.fire(
      'Buen Trabajo!',
      'Ahora espera que te asignen un rol!',
      'success'
    )
  }
  handleError(error: any): void {
    console.log(error)
  }

  handleResponse(data : any) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/perfil');
  }

  ngOnInit() {
  }

}

