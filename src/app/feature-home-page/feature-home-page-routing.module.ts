import {HomePageComponent} from "./home-page.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
  {path: '', component: HomePageComponent,},
]

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
})

export class FeatureContentSharedRoutingModule {}
