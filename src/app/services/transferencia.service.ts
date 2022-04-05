import { routes } from './../app-routing.module';
import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' //posso deixar exclusivo de um componente, como, por exemplo, AppModules. Como está, posso chamar em qualquer lugar nos params do constructor
})

export class TransferenciaService {

  private listaTransferencia: any[];
  private url: string = 'http://localhost:3000/transferencias';

  constructor(private http: HttpClient) {
    this.listaTransferencia = []; //preciso instanciar no constructor da classe
  }

  // get Transferencias() {
  //   return this.listaTransferencia;
  // }

  todas(): Observable<Transferencia[]>{
    return this.http.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    transferencia = this.addData(transferencia);
    // this.listaTransferencia.push(transferencia);
    console.log(transferencia);
    return this.http.post<Transferencia>(this.url, transferencia);
  }

  addData(transferencia: any) {
    transferencia.data = new Date();
    return transferencia;
  }
}
