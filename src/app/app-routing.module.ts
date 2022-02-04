import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PerfilComponent } from './auth/perfil/perfil.component';
import { RequestResetComponent } from './auth/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './auth/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { PaginaComponent } from './pagina/pagina.component';
import { FormCuadernoComponent } from './CuadernoSoporte/form-cuaderno/form-cuaderno.component';
import { ListCuadernoComponent } from './CuadernoSoporte/list-cuaderno/list-cuaderno.component';
import { IndexCuadernoComponent } from './CuadernoDocumentacion/index-cuaderno/index-cuaderno.component';
import { FormularioCuadernoComponent } from './CuadernoDocumentacion/formulario-cuaderno/formulario-cuaderno.component';

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
    path: 'pagina',
    component: PaginaComponent,
  },
  {
    path: 'indexform',
    component : ListCuadernoComponent,
  },
  {
    path: 'form',
    component : FormCuadernoComponent,
  },
  { path: 'form/:id',
    component: FormCuadernoComponent
  },
  {
    path: 'formulario',
    component : FormularioCuadernoComponent
  },
  {
    path: 'formulario/:id',
    component : FormularioCuadernoComponent
  },
  {
    path: 'indexformulario',
    component : IndexCuadernoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
