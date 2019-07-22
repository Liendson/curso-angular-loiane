import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  livro: any = {
    titulo: 'Título Teste e mais outro teste',
    estrelas: 4.56565,
    paginas: 30,
    preco: 49.99,
    data: new Date(),
    url: 'www.google.com',
  };

  constructor() { }

  ngOnInit() {
  }

}
