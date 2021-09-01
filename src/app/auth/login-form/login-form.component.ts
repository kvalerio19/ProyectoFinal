import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public authForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  onSubmit(){
    const values = this.authForm.value;
    const result = this.authService.login(values.username, values.password)
      .subscribe((next)=>{
        this.authService.user = values;
        this.router.navigate(['dashboard']);
      }, (error)=>{
        alert('Usuario / Contraseña Erróneos');
      });
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}
