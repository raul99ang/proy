import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs'; // Importa of desde rxjs
import { switchMap } from 'rxjs/operators'; // Importa switchMap desde rxjs/operators

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9900/api';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Usuarios/${email}`).pipe(
      switchMap(user => {
        if (user && user.contrasena === password) {
          return of(user); // Si el usuario existe y la contraseña coincide, devuelve el usuario
        } else {
          return throwError('Usuario o contraseña incorrectos'); // Si el usuario no existe o la contraseña no coincide, lanza un error
        }
      })
    );
  }
}
