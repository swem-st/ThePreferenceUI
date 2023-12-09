import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './core/layout/nav/toolbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './modules/login/login.module';
import { MsalInterceptor, MsalModule } from '@azure/msal-angular';
import { environment } from '../environment/environment';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { CatalogComponent } from './modules/catalog/catalog.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    LoginModule,
    NgbModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: environment.clientId,
          redirectUri: environment.redirectUri,
          knownAuthorities: [environment.authorityDomain],
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: true,
        }
      }),
    {
      interactionType: InteractionType.Redirect,
      authRequest: {
        scopes: [ 'openid' ]
      }
    },
    {
      interactionType: InteractionType.Redirect,
      protectedResourceMap: new Map([
        [environment.endpoint, environment.endpointScopes],
      ]),
    }
    )
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ]
})
export class AppModule { }
