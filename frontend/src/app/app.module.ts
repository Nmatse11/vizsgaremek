import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BaseListComponent } from './common/list/base-list/base-list.component';
import { BillListComponent } from './common/list/bill-list/bill-list.component';
import { CustomerListComponent } from './common/list/customer-list/customer-list.component';
import { FoodListComponent } from './common/list/food-list/food-list.component';
import { CategoryListComponent } from './common/list/category-list/category-list.component';
import { OrderListComponent } from './common/list/order-list/order-list.component';
import { BaseEditComponent } from './common/edit/base-edit/base-edit.component';
import { OrderEditComponent } from './common/edit/order-edit/order-edit.component';
import { BillEditComponent } from './common/edit/bill-edit/bill-edit.component';
import { CustomerEditComponent } from './common/edit/customer-edit/customer-edit.component';
import { FastfoodEditComponent } from './common/edit/fastfood-edit/fastfood-edit.component';
import { FoodEditComponent } from './common/edit/food-edit/food-edit.component';
import { FastfoodCategoryEditComponent } from './common/edit/fastfood-category-edit/fastfood-category-edit.component';
import { MenuCategoryEditComponent } from './common/edit/menu-category-edit/menu-category-edit.component';
import { BaseMenuCardComponent } from './common/base-menu-card/base-menu-card.component';
import { MenuEditorComponent } from './common/menu-editor/menu-editor.component';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './page/menu/menu.component';
import { FastfoodComponent } from './page/fastfood/fastfood.component';
import { AdminComponent } from './page/admin/dashboard/admin.component';
import { SigninComponent } from './common/login/signin/signin.component';
import { SignupComponent } from './common/login/signup/signup.component';
import { BillComponent } from './page/admin/bill/bill.component';
import { OrderComponent } from './page/admin/order/order.component';
import { CustomerComponent } from './page/admin/customer/customer.component';
import { ProductComponent } from './page/admin/product/product.component';
import { FastfoodCategoryEditorComponent } from './page/admin/fastfood-category-editor/fastfood-category-editor.component';
import { MenuCategoryEditorComponent } from './page/admin/menu-category-editor/menu-category-editor.component';
import { TextoverflowPipe } from './pipe/textoverflow.pipe';
import { CustomCurrencyPipe } from './pipe/custom-currency.pipe';
import { CustomNumberPipe } from './pipe/custom-number.pipe';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { DeleteDialogComponent } from './common/dialog/delete-dialog/delete-dialog.component';
import { BaseDashboardCardComponent } from './common/dashboard-cards/base-dashboard-card/base-dashboard-card.component';
import { CustomerCardComponent } from './common/dashboard-cards/customer-card/customer-card.component';
import { OrderMenuCardComponent } from './common/dashboard-cards/order-menu-card/order-menu-card.component';
import { FilterPipe } from './pipe/filter.pipe';

import { MatMenuModule } from '@angular/material/menu'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { OrderFastfoodCardComponent } from './common/dashboard-cards/order-fastfood-card/order-fastfood-card.component';
import { BillCardComponent } from './common/dashboard-cards/bill-card/bill-card.component';
import { MenuCardsComponent } from './common/dashboard-cards/menu-cards/menu-cards.component';
import { BaseDashboardStatCardComponent } from './common/dashboard-cards/base-dashboard-stat-card/base-dashboard-stat-card.component';
import { FastfoodCardsComponent } from './common/dashboard-cards/fastfood-cards/fastfood-cards.component';
import { MatExpansionModule } from '@angular/material/expansion';

import { BarChartComponent } from './common/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './common/charts/pie-chart/pie-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    BaseListComponent,
    BillListComponent,
    CustomerListComponent,
    FoodListComponent,
    CategoryListComponent,
    OrderListComponent,
    BaseEditComponent,
    OrderEditComponent,
    BillEditComponent,
    CustomerEditComponent,
    FastfoodEditComponent,
    FoodEditComponent,
    FastfoodCategoryEditComponent,
    MenuCategoryEditComponent,
    BaseMenuCardComponent,
    MenuEditorComponent,
    HomeComponent,
    MenuComponent,
    FastfoodComponent,
    AdminComponent,
    SigninComponent,
    SignupComponent,
    BillComponent,
    OrderComponent,
    CustomerComponent,
    ProductComponent,
    FastfoodCategoryEditorComponent,
    MenuCategoryEditorComponent,
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
    PieChartComponent
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
    NgChartsModule
  ],
  providers: [],
  entryComponents: [
    DeleteDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
