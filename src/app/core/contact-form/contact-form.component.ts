import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  userReactionForm: FormGroup = this.formBuilder.group({
    email:  ['', [Validators.required, Validators.email]],
    yourMsg: ['', [Validators.required]],
  })

  onSubmit() {}
}
