import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pj-01';
  // valor: number;
  // destino: string;
  // binding: number;
  dadosTodos: any[] = []; //preciso sempre inicializar o object
  //posso também colocar um ? após o nome do object no one-way do html


  constructor( private service: TransferenciaService ) { //preciso instanciar a classe de service como parâmetro dentro do constructor

  }

  // transferir($event){
  //   // this.valor = $event.valor;
  //   // this.destino = $event.destino;
  //   // this.binding = $event.binding;

  //   // $event.valor  = Number($event.valor.replace(',', '.')).toFixed(2);

  //   //console.log($event);

  //   // const transferencia: object = { ...$event, data: Intl.DateTimeFormat('default', { dateStyle: 'short', timeStyle: 'short' }).format(new Date()) };
  //   // const transferencia: object = { ...$event, data: new Date() };
  //   // this.dadosTodos.push(transferencia);

  //   this.service.adicionar($event);

  //   //this.dadosTodos = this.service.Transferencias;
  // }
}
