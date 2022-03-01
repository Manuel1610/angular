import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { JarwisService } from './services/jarwis.service';
import { PerfilComponent } from './auth/perfil/perfil.component';
import { NavbarComponent } from './auth/navbar/navbar.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RequestResetComponent } from './auth/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './auth/password/response-reset/response-reset.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListCuadernoComponent } from './CuadernoSoporte/list-cuaderno/list-cuaderno.component';
import { FormCuadernoComponent } from './CuadernoSoporte/form-cuaderno/form-cuaderno.component';
import { FormPracticanteComponent } from './CrudPracticante/form-practicante/form-practicante.component';
import { ListPracticanteComponent } from './CrudPracticante/list-practicante/list-practicante.component';
import { IndexCuadernoComponent } from './CuadernoDocumentacion/index-cuaderno/index-cuaderno.component';
import { FormularioCuadernoComponent } from './CuadernoDocumentacion/formulario-cuaderno/formulario-cuaderno.component';
import { IndexGatComponent } from './LibroGat/index-gat/index-gat.component';
import { FormGatComponent } from './LibroGat/form-gat/form-gat.component';
import { PaginaComponent } from './pagina/pagina.component';
import { UsuariosComponent } from './auth/usuarios/usuarios.component';
import { UsuariosformComponent } from './auth/usuariosform/usuariosform.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faR, fas } from '@fortawesome/free-solid-svg-icons';
import {PaginatorModule} from 'primeng/paginator';
import {ButtonModule} from 'primeng/button';
import { RoleuserComponent } from './auth/roleuser/roleuser.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    NavbarComponent,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ListCuadernoComponent,
    FormCuadernoComponent,
    FormPracticanteComponent,
    ListPracticanteComponent,
    IndexCuadernoComponent,
    FormularioCuadernoComponent,
    IndexGatComponent,
    FormGatComponent,
    PaginaComponent,
    UsuariosComponent,
    UsuariosformComponent,
    RoleuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    PaginatorModule,
    ButtonModule
  ],
  providers: [
    JarwisService,
    TokenService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(  library: FaIconLibrary){
    library.addIconPacks(fas);
  }
}
