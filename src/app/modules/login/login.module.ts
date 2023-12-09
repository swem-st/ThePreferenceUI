import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { AppComponent } from '../../app.component';
import { ToolbarComponent } from '../../core/layout/nav/toolbar.component';
import { FooterComponent } from '../../core/layout/footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginComponent } from './login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

//import { DirectivesModule } from '../shared/directives/directives.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,

    //Material
    MatIconModule,
    MatFormFieldModule
   // DirectivesModule,
  ],
})

export class LoginModule {}
