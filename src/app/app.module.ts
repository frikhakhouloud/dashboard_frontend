import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./composants/menu/menu.component";
import { FiltreComponent } from "./composants/filtre/filtre.component";
import { CostComponent } from "./composants/cost/cost.component";
import { CountComponent } from "./composants/count/count.component";
import { CountCustomerOrderPerDivisionComponent } from "./composants/count-customer-order-per-division/count-customer-order-per-division.component";
import { CostCustomerOrderPerDivisionComponent } from "./composants/cost-customer-order-per-division/cost-customer-order-per-division.component";
import { CountCustomerOrderPerCpComponent } from "./composants/count-customer-order-per-cp/count-customer-order-per-cp.component";
import { CostCustomerOrderPerCpComponent } from "./composants/cost-customer-order-per-cp/cost-customer-order-per-cp.component";
import { CostCustomerOrderPerOrganismeComponent } from "./composants/cost-customer-order-per-organisme/cost-customer-order-per-organisme.component";
import { CountCustomerOrderPerOrganismeComponent } from "./composants/count-customer-order-per-organisme/count-customer-order-per-organisme.component";
import { CountCustomerOrderPerErrorsComponent } from "./composants/count-customer-order-per-errors/count-customer-order-per-errors.component";
import { CostCustomerOrderPerErrorsComponent } from "./composants/cost-customer-order-per-errors/cost-customer-order-per-errors.component";
import { ImportFilesComponent } from "./composants/import-files/import-files.component";
import { HttpClientModule } from "@angular/common/http";
import { FilterResultComponent } from "./composants/filter-result/filter-result.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FiltreComponent,
    CostComponent,
    CountComponent,
    CountCustomerOrderPerDivisionComponent,
    CostCustomerOrderPerDivisionComponent,
    CountCustomerOrderPerCpComponent,
    CostCustomerOrderPerCpComponent,
    CostCustomerOrderPerOrganismeComponent,
    CountCustomerOrderPerOrganismeComponent,
    CountCustomerOrderPerErrorsComponent,
    CostCustomerOrderPerErrorsComponent,
    ImportFilesComponent,
    FilterResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
