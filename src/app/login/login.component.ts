import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  name:string;
  password:string;
  correctName: boolean = false;
  correctPass: boolean = false;

  constructor(public formBuilder: FormBuilder, public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      name: new FormControl('admin', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('12345', [ Validators.required, Validators.minLength(5)])
    });
  }
  get f(): any {
    return this.registerForm.controls;
  }

  submit(data: any): void {
    this.submitted = true;
    this.correctName = false;
    this.correctPass = false;

    localStorage.setItem('user', JSON.stringify({name: 'user', role: 'user'}));
    localStorage.setItem('admin', JSON.stringify({name: 'admin',password:12345, role: 'admin'}));

    this.name = data.name;
    this.password = data.password;

    if(this.name != 'admin' && this.name != ''){
      this.correctName = true;
    }
    if(this.password != '12345' && this.password != ''){
      this.correctPass = true;
    }

    this.authService.login(this.name, this.password)
      .subscribe( data => {
        console.log("Is Login Success: " + data);
        if(data) this.router.navigate(['/']);
  });
}
}
