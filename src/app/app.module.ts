import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UrlSerializer } from '@angular/router';

import { AppComponent } from './app.component';
import { routingArr } from './app.routing';
import { MenuComponent } from './menu.component';
import { lowercaseconvert } from './lowercaseconvert';

import { ProductListModule } from './product-list/productList.module';
import { UserModule } from './user-list/user.module';
import { MiscModule } from './misc.module';
import { ProductModule } from './product/product.module';
import { CoreModule } from './core.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductListModule,
    UserModule,
    MiscModule,
    ProductModule,
    CoreModule,
    routingArr
  ],
  providers: [
    {
      provide:UrlSerializer,
      useClass:lowercaseconvert
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
