import { Component, OnInit, Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss']
})

@Injectable()
export class AlertasComponent implements OnInit {

  constructor() { }

  // Mensagem SUCESSO
  public mensagemSucesso(tipo: string) {
    if (tipo === 'alterar') {
      Swal.fire({
        title: 'Incluído!',
        text: 'O arquivo foi incluído com sucesso!',
        type: 'success',
      });
    } else if (tipo === 'incluir') {
      Swal.fire({
        title: 'Alterado!',
        text: 'O arquivo foi alterado com sucesso!',
        type: 'success',
      });
    }
  }

  // Mensagem DELETAR
  public mensagemConfirmacaoDeletar() {
    Swal.fire({
      title: 'Você tem certeza que deseja deletar?',
      text: 'Essa ação é irreversível',
      type: 'warning',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Deletado!',
          text: 'O documento foi deletado com sucesso!',
          type: 'success'
        });
      }
    });
  }

  // Mensagens de ERRO
  public mensagemErro() {
    Swal.fire({
      title: 'Um erro Inesperado ocorreu!',
      text: 'Contate os Administradores do Sistema',
      type: 'warning',
    });
  }

  public mensagemErroPersonalizado(titulo: string) {
    Swal.fire({
      title: `Erro ${titulo}`,
      text: 'Contate os Administradores do Sistema',
      type: 'warning',
    });
  }

  ngOnInit() {
  }

}
