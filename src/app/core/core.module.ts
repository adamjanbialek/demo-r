import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

import {ContactFormComponent} from "./contact-form/contact-form.component";

import {NavbarComponent} from "./navbar/navbar.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    NavbarComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    NavbarComponent,
    ContactFormComponent,
  ],
  providers: []
})
export class CoreModule { }
