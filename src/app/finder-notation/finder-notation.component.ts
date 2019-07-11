import { FinderService } from './finder.service';
import { Component, OnInit } from '@angular/core';


export const clientes = [
  {
    nome: 'Adami',
    anotation: 'Anotação sobre o cliente da Corfio Adami'
  },
  {
    nome: 'Cassol',
    anotation: 'Anotação sobre o cliente da Corfio Cassol'
  }
];

@Component({
  selector: 'app-finder-notation',
  templateUrl: './finder-notation.component.html',
  styleUrls: ['./finder-notation.component.css']
})
export class FinderNotationComponent implements OnInit {
  panelOpenState = false;

  clientes: any;
  observacoes: any;
  dataDOM: any;



  constructor(private finderService: FinderService) { }

  ngOnInit() {

  }

  sendQueryClientCod(dataDOMCod) {
    this.finderService.getClientCod(dataDOMCod)
                      .subscribe(( data => {
                        this.clientes = data['ttAnota'];
                      }));
  }

  sendQueryClient(dataDOM) {
    console.log(typeof dataDOM);

    this.finderService.getClient(dataDOM)
                    .subscribe(( data => {
                      console.log(data);
                      this.clientes = data['ttCliente'];
                      this.observacoes = data['ttAnota'];
                    }));

  }

  sendQueryAnot(codCliente) {
    console.log(codCliente);
    this.finderService.getClientAnot(codCliente)
                      .subscribe(( data => {
                        console.log(data);
                        this.observacoes = data['ttAnota'];
                      }));
  }



}
