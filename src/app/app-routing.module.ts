import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PerfilComponent } from './auth/perfil/perfil.component';
import { RequestResetComponent } from './auth/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './auth/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { FormCuadernoComponent } from './CuadernoSoporte/form-cuaderno/form-cuaderno.component';
import { ListCuadernoComponent } from './CuadernoSoporte/list-cuaderno/list-cuaderno.component';
import { IndexCuadernoComponent } from './CuadernoDocumentacion/index-cuaderno/index-cuaderno.component';
import { FormularioCuadernoComponent } from './CuadernoDocumentacion/formulario-cuaderno/formulario-cuaderno.component';
import { FormPracticanteComponent } from './CrudPracticante/form-practicante/form-practicante.component';
import { ListPracticanteComponent } from './CrudPracticante/list-practicante/list-practicante.component';
import { FormGatComponent } from './LibroGat/form-gat/form-gat.component';
import { IndexGatComponent } from './LibroGat/index-gat/index-gat.component';
import { PaginaComponent } from './pagina/pagina.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'request-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'indexform',
    component : ListCuadernoComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'form',
    component : FormCuadernoComponent,
    canActivate: [AfterLoginService]
  },
  { path: 'form/:id',
    component: FormCuadernoComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'formulario',
    component : FormularioCuadernoComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'formulario/:id',
    component : FormularioCuadernoComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'indexformulario',
    component : IndexCuadernoComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'IndexPracticantes',
    component : ListPracticanteComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'FormPracticantes',
    component : FormPracticanteComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'FormPracticantes/:id',
    component : FormPracticanteComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'FormGat',
    component : FormGatComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'FormGat/:id',
    component : FormGatComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'IndeXGat',
    component : IndexGatComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: '',
    component : PaginaComponent,
    canActivate : [BeforeLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
