import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm:FormGroup

  constructor( private formBuilder: FormBuilder) {  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      emailId: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  signIn(){
  console.log(this.signInForm.value);
}

}
