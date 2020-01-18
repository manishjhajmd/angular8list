import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PraticComponent } from './pratic/pratic.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { MynewserviceService } from './mynewservice.service';

@NgModule({
  declarations: [
    AppComponent,
    PraticComponent,
    ProductlistComponent,
    ProductComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers:[MynewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
