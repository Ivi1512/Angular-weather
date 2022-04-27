import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ERoles } from '../domain/enums';
import { ILoginRequest, IUser } from '../domain/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = `${environment.backendServer}/auth`;  // URL to web api

  private _loggedUser: BehaviorSubject<IUser | null>;
  public loggedUser$: Observable<IUser | null>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { 
    this._loggedUser = new BehaviorSubject( this.getLoggedUSer() );
    this.loggedUser$ = this._loggedUser.asObservable();
   }

  public authenticate(data: ILoginRequest): Observable<IUser>{

    return this.http.post<IUser>(`${this.authUrl}/login`, data).pipe(
      tap( (userData: IUser) =>{
        if(userData && userData.id)
        {
          this.setAuthId(data.username, data.password);
          this.setLoggedUSer(userData);
          this._loggedUser.next( userData );
        }
        else{
          this.disconnect();
        }
      })
    );
  }

  public isAuthenticated(): boolean{
    const data = this.getLoggedUSer();
    return data != null;
  }

  //este metodo genera un token a partir del usuario y la ocntraseña y lo añade al sessionStrage con la clave 'authId'
  public setAuthId(username: string, password: string): void{

    const token = window.btoa(`${username}:${password}`);
    sessionStorage.setItem('auth-id', token);
  }

  //tranforma los datos del usuario a JSON para poder almacenarlos en el sessionStorage
  public setLoggedUSer(data: IUser): void {

    const userStr = JSON.stringify(data);
    sessionStorage.setItem('user-data', userStr);
  }

  public getAuthId(): string | null{
    return sessionStorage.getItem('auth-id');
  }

  public getLoggedUSer(): IUser | null {

    const userStr = sessionStorage.getItem('user-data');
    if(userStr)
    {
      return JSON.parse(userStr);
    }
    return null;
  }

  public isAdmin(): boolean {
    const data = this.getLoggedUSer();
    return data != null && data.role === ERoles.ADMIN;
  }

  public isRole(role: string | string[]): boolean{
    const data = this.getLoggedUSer();
    if(typeof role === 'string')
    {
      return data != null && data.role === role;
    }
    else if(typeof role === 'object')
    {
      return data != null && role.includes(data.role);
    }

    return false;
    
  }

  public disconnect(): void{
    sessionStorage.removeItem('auth-id');
    sessionStorage.removeItem('user-data');
    
    this._loggedUser.next( null );
  }
}
