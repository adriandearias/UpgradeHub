import { FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({});

  constructor(private _authService: AuthService, private cookie: CookieService, 
    private router: Router){}

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          //!Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/) // Expresión regular para el formato de contraseña estricto
        ])
      }
    )
  }

  sendLogin():void{
    const { email, password } = this.formLogin.value
    this._authService.sendCredentials(email, password)
    .subscribe(responseOK => {
      const {tokenSession, data} = responseOK
      this.cookie.set('token', tokenSession, 4, '/')
      this.router.navigate(['/', 'tracks'])
    },
    err => {
      this.errorSession = true;
      console.log('WARNING: Email o Password incorrectos!');
    })
  }
}
