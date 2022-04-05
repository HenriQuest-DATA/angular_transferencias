 import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  // @Input() transferencias: any[] = [];
  transferencias: any[] = [];

  constructor( private service: TransferenciaService ) {

  }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
      //console.log(this.transferencias);
    });
  }

  atualiza(): void{
    this.ngOnInit();
  }
}
