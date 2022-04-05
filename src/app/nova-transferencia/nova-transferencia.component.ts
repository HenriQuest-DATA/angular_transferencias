import { Router } from '@angular/router';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html', //poderia passar template somente, no caso seria um string com o template em si
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor( private service: TransferenciaService, private router: Router ) {

  }

  @Output() aoTransferir = new EventEmitter<Object>();

  valor: number = 0; //two-way databinding
  destino: number = 0;  //two-way databinding
  banco: string = 'NuBank'; //one-way databinding -> mostra os dados, porém não posso alterar, já que não usei os () no html
  //perfeito para somente exibir dados, sem alteração no front

  ngOnInit(): void {
    console.log('olá!');

  }

  transferir(){ //event binding -> liga um método do ts a um DOM
    console.log('transferido');
    // console.log(`Valor: ${this.valor}`);
    // console.log(`Destino: ${this.destino}`);
    // console.log(`Binding: ${this.binding} -> INALTERADO`);

    const valorEmit: Transferencia = { valor: this.valor, destino: this.destino, binding: this.banco };
    // this.aoTransferir.emit( valorEmit );

    this.service.adicionar(valorEmit).subscribe({
      next: (resultado: Transferencia) => {
        console.log(resultado);
        //this.limparVarsEInputs();
        this.router.navigateByUrl('extrato');
        // this.router.navigate(['extrato']);
      },
      error: (erro) => {
        console.log(erro.message);
      }
    });
  }

  limparVarsEInputs(){
    this.valor = 0;
    this.destino = 0;
  }

}
