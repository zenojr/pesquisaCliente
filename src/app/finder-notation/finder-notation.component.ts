import { Component, OnInit } from '@angular/core';

export const clientes = [
  {
    nome: 'ADAMI',
    anotation: 'Anotação sobre o cliente da Corfio Adami'
  },
  {
    nome: 'CASSOL',
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

  clientes =  clientes;
  dataDOM = '';
  dataDOMUpper = this.dataDOM.toUpperCase();

  constructor() { }

  ngOnInit() {
    
    setTimeout( () => {console.log(this.dataDOM); }, 2000);
  }

}
