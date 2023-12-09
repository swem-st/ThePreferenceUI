import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { EmptyRouteComponent } from './modules/empty-route/empty-route.component';
import { LoginModule } from './modules/login/login.module';
import { CatalogComponent } from './modules/catalog/catalog.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
        // canActivateChild: [FeatureFlagGuard],
      },
      {
        path: 'home',
        component: HomeComponent,
        // canActivateChild: [FeatureFlagGuard],
      },
      {
        path: 'catalog/:mainCat/:subCat',
        component: CatalogComponent,
        // canActivateChild: [FeatureFlagGuard],
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: 'login',
   // component: LoginModule
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    // canActivateChild: [FeatureFlagGuard],
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
