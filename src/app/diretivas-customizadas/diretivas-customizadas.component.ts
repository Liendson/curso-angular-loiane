import { Component } from '@angular/core';

import { AlertasComponent } from './alertas/alertas.component';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent {

  constructor(private alertasComponent: AlertasComponent) { }

  metodoTeste() {
    this.alertasComponent.mensagemConfirmacaoDeletar();
  }
  metodoTeste2() {
    this.alertasComponent.mensagemErro();
  }
  metodoTeste3(erro: string) {
    this.alertasComponent.mensagemErroPersonalizado(erro);
  }

}
