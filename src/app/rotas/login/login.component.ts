import { Component, OnInit } from '@angular/core';

import { AlertasComponent } from 'src/app/diretivas-customizadas/alertas/alertas.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private alertasComponent: AlertasComponent) { }

  autenticarUsuario(usuario: string, senha: string) {
    if (usuario === 'liendson' && senha === 'lapis321') {
      this.alertasComponent.loginSucesso();
    } else {
      this.alertasComponent.mensagemErroPersonalizado('Senha Incorreta!');
    }
  }

  ngOnInit() {
  }

}
