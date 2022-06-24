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
import { ProfilComponent } from './page/profil/profil.component';
import { AuthGuardService } from './service/auth-guard.service';
import { RoleGuardService } from './service/role-guard.service';

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
    path: 'profil',
    component: ProfilComponent,
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['admin'],
    }
  },
  {
    path: 'menu-editor',
    component: MenuEditorComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['editor', 'admin'],
    }
  },
  {
    path: 'menu/product',
    component: MenuProductComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['editor', 'admin'],
    }
  },
  {
    path: 'fastfood/product',
    component: FastfoodProductComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['editor', 'admin'],
    }
  },
  {
    path: 'menu/product/edit/:id',
    component: FoodEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['editor', 'admin'],
    }
  },
  {
    path: 'fastfood/product/edit/:id',
    component: FastfoodEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['editor', 'admin'],
    }
  },
  {
    path: 'menu/category',
    component: MenuCategoryComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['editor', 'admin'],
    }
  },
  {
    path: 'fastfood/category',
    component: FastfoodCategoryComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['editor', 'admin'],
    }
  },
  {
    path: 'menu/category/edit/:id',
    component: MenuCategoryEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['editor', 'admin'],
    }
  },
  {
    path: 'fastfood/category/edit/:id',
    component: FastfoodCategoryEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['editor', 'admin'],
    }
  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['admin'],
    }
  },
  {
    path: 'customer/edit/:id',
    component: CustomerEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['admin'],
    }
  },
  {
    path: 'menu/order',
    component: MenuOrderComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['admin'],
    }
  },
  {
    path: 'fastfood/order',
    component: FastfoodOrderComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['admin'],
    }
  },
  {
    path: 'menu/order/edit/:id',
    component: MenuOrderEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['admin'],
    }
  },
  {
    path: 'fastfood/order/edit/:id',
    component: FastfoodOrderEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['admin'],
    }
  },
  {
    path: 'bill',
    component: BillComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['admin'],
    }
  },
  {
    path: 'bill/edit/:id',
    component:  BillEditComponent,
    canActivate: [AuthGuardService, RoleGuardService],
    data: {
      expectedRole: ['admin'],
    }
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
