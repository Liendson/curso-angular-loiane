import { Component, OnInit } from '@angular/core';

import { AulasService } from './aulas.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss'],
  providers: [AulasService]
})
export class AulasComponent implements OnInit {

  url: any    = 'http://designconceitual.com.br/wp-content/uploads/2017/06/3dd22a29691495.55ffd68228546-e1496935549209.jpg';
  valorAtual  = '';
  isMouseOver = false;
  valorSalvo: any;
  urlPortal: string;
  cursos: string[];

  botaoClicado() {
    alert('botao clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = ((evento.target as HTMLInputElement).value);
  }

  onMouseOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  constructor(private aulasService: AulasService) {
    this.urlPortal = 'http://loiane.training';
    this.cursos    = this.aulasService.getCursos();
   }

  ngOnInit() {
  }

}
