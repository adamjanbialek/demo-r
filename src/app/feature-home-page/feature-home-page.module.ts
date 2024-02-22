import { NgModule } from '@angular/core';
import {MatCardModule} from "@angular/material/card";

import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";
import {FeatureContentSharedRoutingModule} from "./feature-home-page-routing.module";

import {HomePageComponent} from "./home-page.component";
import {OnOfferComponent} from "./on-offer/on-offer.component";
import {SloganComponent} from "./slogan/slogan.component";


@NgModule({
  declarations: [
    HomePageComponent,
    SloganComponent,
    OnOfferComponent
  ],
  imports: [
    MatCardModule,
    CoreModule,
    SharedModule,
    FeatureContentSharedRoutingModule
  ],
  exports: [
  ],
  providers: []
})
export class FeatureHomePageModule { }
