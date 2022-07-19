import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient
  ) { }

  getNames() {
    return this.http.get(`${environment.api}/names`);
  }

  insertName(name: string) {
    return this.http.post(`${environment.api}/names`, {name});
  }
}
