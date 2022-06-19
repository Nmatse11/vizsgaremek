import { MenuOrderComponent } from './common/list/order-list/menu-order/menu-order.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillEditComponent } from './common/edit/bill-edit/bill-edit.component';
import { CustomerEditComponent } from './common/edit/customer-edit/customer-edit.component';
import { FoodEditComponent } from './common/edit/food-edit/food-edit.component';
import { MenuOrderEditComponent } from './common/edit/menu-order-edit/menu-order-edit.component';
import { SigninComponent } from './common/login/signin/signin.component';
import { SignupComponent } from './common/login/signup/signup.component';
import { BillComponent } from './page/admin/bill/bill.component';
import { CustomerComponent } from './page/admin/customer/customer.component';
import { AdminComponent } from './page/admin/dashboard/admin.component';
import { MenuEditorComponent } from './page/admin/menu-editor/menu-editor.component';
import { FastfoodComponent } from './page/fastfood/fastfood.component';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { FastfoodEditComponent } from './common/edit/fastfood-edit/fastfood-edit.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { FastfoodOrderEditComponent } from './common/edit/fastfood-order-edit/fastfood-order-edit.component';
import { FastfoodCategoryEditComponent } from './common/edit/fastfood-category-edit/fastfood-category-edit.component';
import { MenuCategoryEditComponent } from './common/edit/menu-category-edit/menu-category-edit.component';
import { MenuProductComponent } from './common/list/product-list/menu-product/menu-product.component';
import { FastfoodProductComponent } from './common/list/product-list/fastfood-product/fastfood-product.component';
import { FastfoodOrderComponent } from './common/list/order-list/fastfood-order/fastfood-order.component';
import { MenuCategoryComponent } from './common/list/category-list/menu-category/menu-category.component';
import { FastfoodCategoryComponent } from './common/list/category-list/fastfood-category/fastfood-category.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'fastfood',
    component: FastfoodComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: SigninComponent,
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'menu-editor',
    component: MenuEditorComponent,
  },
  {
    path: 'menu/product',
    component: MenuProductComponent,
  },
  {
    path: 'fastfood/product',
    component: FastfoodProductComponent,
  },
  {
    path: 'menu/product/edit/:id',
    component: FoodEditComponent,
  },
  {
    path: 'fastfood/product/edit/:id',
    component: FastfoodEditComponent,
  },
  {
    path: 'menu/category',
    component: MenuCategoryComponent,
  },
  {
    path: 'fastfood/category',
    component: FastfoodCategoryComponent,
  },
  {
    path: 'menu/category/edit/:id',
    component: MenuCategoryEditComponent,
  },
  {
    path: 'fastfood/category/edit/:id',
    component: FastfoodCategoryEditComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'customer/edit/:id',
    component: CustomerEditComponent,
  },
  {
    path: 'menu/order',
    component: MenuOrderComponent,
  },
  {
    path: 'fastfood/order',
    component: FastfoodOrderComponent,
  },
  {
    path: 'menu/order/edit/:id',
    component: MenuOrderEditComponent,
  },
  {
    path: 'fastfood/order/edit/:id',
    component: FastfoodOrderEditComponent,
  },
  {
    path: 'bill',
    component: BillComponent,
  },
  {
    path: 'bill/edit/:id',
    component:  BillEditComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
