import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
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

  livros: string[] = ['teste1', 'teste2'];

  // utilizando pipes async para simular requisição ao servidor
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor recebido'), 2000);
  }).catch(() => alert('Erro'));

  valorAsync2 = interval(2000).pipe(map(() => 'Valor Recebido 2'));

  constructor() { }

  ngOnInit() {
  }

}
