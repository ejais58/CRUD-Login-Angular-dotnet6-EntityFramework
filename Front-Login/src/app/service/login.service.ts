import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Registro } from '../models/registro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url: string = "https://localhost:7155/api/Registro"

  getRegistro(){
    return this.http.get(this.url)
  }

  addRegistro(registro: Registro): Observable<Registro>{
    return this.http.post<Registro>(this.url, registro)
  }
}
