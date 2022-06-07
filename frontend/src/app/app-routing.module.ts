import { CategoryListComponent } from './common/list/category-list/category-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillEditComponent } from './common/edit/bill-edit/bill-edit.component';
import { CustomerEditComponent } from './common/edit/customer-edit/customer-edit.component';
import { FoodEditComponent } from './common/edit/food-edit/food-edit.component';
import { OrderEditComponent } from './common/edit/order-edit/order-edit.component';
import { SigninComponent } from './common/login/signin/signin.component';
import { SignupComponent } from './common/login/signup/signup.component';
import { BillComponent } from './page/admin/bill/bill.component';
import { CustomerComponent } from './page/admin/customer/customer.component';
import { AdminComponent } from './page/admin/dashboard/admin.component';
import { FastfoodCategoryEditorComponent } from './page/admin/fastfood-category-editor/fastfood-category-editor.component';
import { MenuCategoryEditorComponent } from './page/admin/menu-category-editor/menu-category-editor.component';
import { MenuEditorComponent } from './page/admin/menu-editor/menu-editor.component';
import { OrderComponent } from './page/admin/order/order.component';
import { FastfoodComponent } from './page/fastfood/fastfood.component';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { FastfoodEditComponent } from './common/edit/fastfood-edit/fastfood-edit.component';
import { ProductComponent } from './page/admin/product/product.component';

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
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'category',
    component: CategoryListComponent,
  },
  {
    path: 'menu-category-edit/:id',
    component: MenuCategoryEditorComponent,
  },
  {
    path: 'fastfood-category-edit/:id',
    component: FastfoodCategoryEditorComponent,
  },
  {
    path: 'menu-editor',
    component: MenuEditorComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'bill',
    component: BillComponent,
  },
  {
    path: 'food-edit/:id',
    component: FoodEditComponent,
  },
  {
    path: 'fastfood-edit/:id',
    component: FastfoodEditComponent,
  },
  {
    path: 'customer-edit/:id',
    component: CustomerEditComponent,
  },
  {
    path: 'order-menu-edit/:id',
    component: OrderEditComponent,
  },
  {
    path: 'order-fastfood-edit/:id',
    component: OrderEditComponent,
  },
  {
    path: 'bill-edit/:id',
    component:  BillEditComponent,
  },
    {
    path: '**',
    component:  HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
