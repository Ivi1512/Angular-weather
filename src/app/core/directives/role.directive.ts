import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ERoles } from '../domain/enums';
import { IUser } from '../domain/types';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {

  @Input() public  appRole = false;

  private isLoggedChange$: Observable<IUser | null>;
  constructor(
    private auth: AuthService,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { 
    this.isLoggedChange$ = this.auth.loggedUser$;
  }

  ngOnInit(): void {
    
this.isLoggedChange$.subscribe( loggedUser => {

    if((loggedUser && loggedUser?.role === ERoles.ADMIN || loggedUser?.role === ERoles.EDITOR))
    {
      this.viewContainerRef.createEmbeddedView( this.templateRef );
    }
    else
    {
      this.viewContainerRef.clear();
    }
    });

  }

}
