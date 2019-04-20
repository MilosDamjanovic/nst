import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BillItemComponent } from "./bill-item/bill-item.component";
import { BillComponent } from "./bill/bill.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { MaterialModule } from "./material.module";
import { UiToolbarComponent } from "./navigation/ui-toolbar/ui-toolbar.component";
import { NoAccessComponent } from "./no-access/no-access.component";
import { PerscriptionComponent } from "./perscription/perscription.component";
import { FooterComponent } from "./footer/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,

    LoginFormComponent,
    BillComponent,
    BillItemComponent,

    UiToolbarComponent,
    NoAccessComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  // temporary solution
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
