import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ILoginRequest } from 'src/app/core/domain/types';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup | undefined;

  private subs: Subscription[] = [];

  constructor(private auth: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
                this.formLogin = new FormGroup({
                  username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
                  password: new FormControl(null, [Validators.required, Validators.minLength(5)])
               });
            }


  ngOnInit(): void {
    
  }


  

  onFormSubmit(): void {
    if (this.formLogin?.invalid) {
      throw Error('Formulario inválido');
    }
    else{
      /*const usuario = this.service.getUserByEmailPass(this.formLogin?.get('email')?.value, this.formLogin?.get('password')?.value).subscribe(data => {
        //this.results.push(data);
       if(data && data.id) {
         console.log("existe!!")
       } else {
         console.log("VUELVE A PROBAR")
       }
      });

      this.subs.push(usuario);*/

      const data: ILoginRequest = this.formLogin?.value;

      const sub2 = this.auth.authenticate( data ).subscribe( user => {
        if(user)
        {
          this.router.navigate(['/users']);
        }
        else{
          throw Error('Usuario inválido');
        }
      });
      this.subs.push(sub2);
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach( sub => sub.unsubscribe() );
  }
}