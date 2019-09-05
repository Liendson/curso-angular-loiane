import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: `liendson`,
    email: `ldouglas@indracompany.com`
  };

  buscaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => { this.populaDadosForm(dados, form); } );
      }
    }
  }

  // deu errado n sei pq
  populaDadosForm(dados, form) {
    // form.setValue({
      // endereco: {
        // rua: dados.logradouro,
        // cep: dados.cep,
      // }
    // });
    console.log(form);
    console.log(dados);
  }

  onSubmit(form) {
    // resttest
    console.log(form);
    // this.http.post('url', JSON.stringify(form).subscribe(dados => { console.log(dados); } ));
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
