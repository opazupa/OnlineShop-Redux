import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop', loadChildren: './features/shopping/shopping.module#ShoppingModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
