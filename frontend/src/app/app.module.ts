import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgChartsModule } from 'ng2-charts';
import { NgxScrollTopModule } from 'ngx-scrolltop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BaseListComponent } from './common/list/base-list/base-list.component';
import { BillListComponent } from './common/list/bill-list/bill-list.component';
import { CustomerListComponent } from './common/list/customer-list/customer-list.component';
import { MenuOrderEditComponent } from './common/edit/menu-order-edit/menu-order-edit.component';
import { FastfoodOrderEditComponent } from './common/edit/fastfood-order-edit/fastfood-order-edit.component';
import { BillEditComponent } from './common/edit/bill-edit/bill-edit.component';
import { CustomerEditComponent } from './common/edit/customer-edit/customer-edit.component';
import { FastfoodEditComponent } from './common/edit/fastfood-edit/fastfood-edit.component';
import { FoodEditComponent } from './common/edit/food-edit/food-edit.component';
import { FastfoodCategoryEditComponent } from './common/edit/fastfood-category-edit/fastfood-category-edit.component';
import { MenuCategoryEditComponent } from './common/edit/menu-category-edit/menu-category-edit.component';
import { BaseMenuCardComponent } from './common/base-food-card/base-menu-card/base-menu-card.component';
import { BaseFastfoodCardComponent } from './common/base-food-card/base-fastfood-card/base-fastfood-card.component';
import { MenuEditorComponent } from './page/admin/menu-editor/menu-editor.component';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { FastfoodComponent } from './page/fastfood/fastfood.component';
import { AdminComponent } from './page/admin/dashboard/admin.component';
import { SigninComponent } from './common/login/signin/signin.component';
import { SignupComponent } from './common/login/signup/signup.component';
import { BillComponent } from './page/admin/bill/bill.component';
import { CustomerComponent } from './page/admin/customer/customer.component';
import { TextoverflowPipe } from './pipe/textoverflow.pipe';
import { CustomCurrencyPipe } from './pipe/custom-currency.pipe';
import { CustomNumberPipe } from './pipe/custom-number.pipe';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { DeleteDialogComponent } from './common/dialog/delete-dialog/delete-dialog.component';
import { BaseDashboardCardComponent } from './common/dashboard-cards/base-dashboard-card/base-dashboard-card.component';
import { CustomerCardComponent } from './common/dashboard-cards/customer-card/customer-card.component';
import { OrderMenuCardComponent } from './common/dashboard-cards/order-menu-card/order-menu-card.component';
import { OrderFastfoodCardComponent } from './common/dashboard-cards/order-fastfood-card/order-fastfood-card.component';
import { BillCardComponent } from './common/dashboard-cards/bill-card/bill-card.component';
import { MenuCardsComponent } from './common/dashboard-cards/menu-cards/menu-cards.component';
import { BaseDashboardStatCardComponent } from './common/dashboard-cards/base-dashboard-stat-card/base-dashboard-stat-card.component';
import { FastfoodCardsComponent } from './common/dashboard-cards/fastfood-cards/fastfood-cards.component';
import { BaseEditorCardComponent } from './common/base-food-card/base-editor-card/base-editor-card.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { FilterPipe } from './pipe/filter.pipe';
import { MenuProductComponent } from './common/list/product-list/menu-product/menu-product.component';
import { FastfoodProductComponent } from './common/list/product-list/fastfood-product/fastfood-product.component';
import { FastfoodOrderComponent } from './common/list/order-list/fastfood-order/fastfood-order.component';
import { MenuOrderComponent } from './common/list/order-list/menu-order/menu-order.component';
import { MenuCategoryComponent } from './common/list/category-list/menu-category/menu-category.component';
import { FastfoodCategoryComponent } from './common/list/category-list/fastfood-category/fastfood-category.component';
import { BaseComponentListComponent } from './common/list/base-component-list/base-component-list.component';

import { MatMenuModule } from '@angular/material/menu'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';

import { BarChartComponent } from './common/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './common/charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseListComponent,
    BillListComponent,
    CustomerListComponent,
    MenuOrderEditComponent,
    FastfoodOrderEditComponent,
    BillEditComponent,
    CustomerEditComponent,
    FastfoodEditComponent,
    FoodEditComponent,
    FastfoodCategoryEditComponent,
    MenuCategoryEditComponent,
    BaseMenuCardComponent,
    BaseFastfoodCardComponent,
    MenuEditorComponent,
    HomeComponent,
    MenuComponent,
    FastfoodComponent,
    AdminComponent,
    SigninComponent,
    SignupComponent,
    BillComponent,
    CustomerComponent,
    TextoverflowPipe,
    CustomCurrencyPipe,
    CustomNumberPipe,
    NavigationComponent,
    DeleteDialogComponent,
    BaseDashboardCardComponent,
    CustomerCardComponent,
    OrderMenuCardComponent,
    OrderFastfoodCardComponent,
    BillCardComponent,
    MenuCardsComponent,
    BaseDashboardStatCardComponent,
    FastfoodCardsComponent,
    FilterPipe,
    BarChartComponent,
    PieChartComponent,
    BaseEditorCardComponent,
    ForbiddenComponent,
    MenuProductComponent,
    FastfoodProductComponent,
    FastfoodOrderComponent,
    MenuOrderComponent,
    MenuCategoryComponent,
    FastfoodCategoryComponent,
    BaseComponentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
    }),
    NgChartsModule,
    MatCardModule,
    NgxScrollTopModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  entryComponents: [
    DeleteDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
