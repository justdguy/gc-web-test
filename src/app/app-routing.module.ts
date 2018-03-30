import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import {AddressComponent} from './address/address.component';
import {CategoriesComponent} from './categories/categories.component';
import {PostProductComponent} from './post-product/post-product.component';
import { MyProductsComponent } from './my-products/my-products.component';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'toptrending',
    component: CategoriesComponent
  },
  {
    path: 'toptrending/:id',
    component: CategoryComponent
  },
  {
    path: 'idea/:id',
    component: ProductComponent
  },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile/settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile/address',
    component: AddressComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile/postidea',
    component: PostProductComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile/ideas',
    component: MyProductsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
