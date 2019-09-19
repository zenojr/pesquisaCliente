import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  apiUrlNome = 'http://192.168.0.7/cgi-bin/wspd_cgi.sh/WService=emswebelt/sca007ws.p?nome=';
  apiUrlAnot = 'http://192.168.0.7/cgi-bin/wspd_cgi.sh/WService=emswebelt/sca007ws.p?codigo=';


  constructor( private http: HttpClient ) { }

  getClient(recieveData) {

      return this.http.get(this.apiUrlNome + recieveData);

  }

  getClientCod(recieveData) {
    return this.http.get(this.apiUrlAnot + recieveData);
  }

  getClientAnot(recieveData) {
    return this.http.get(this.apiUrlAnot + recieveData);
  }

}


