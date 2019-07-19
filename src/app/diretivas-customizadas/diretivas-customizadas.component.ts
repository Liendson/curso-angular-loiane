import { Component, OnInit } from '@angular/core';

import * as swal from 'sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent {

  constructor() { }

  public funcaoTeste() {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Essa ação é irreversível',
      type: 'warning',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'teste',
          text: 'texto teste',
          type: 'success'
        });
      }
    });
  }



  // public funcaoTeste() {
  //   Swal.fire({
  //     title: 'Você tem certeza?',
  //     text: 'Essa ação é irreversível',
  //     type: 'warning',
  //     showCancelButton: true,
  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire({
  //         title: 'teste',
  //         text: 'texto teste',
  //         type: 'success'
  //       });
  //     }
  //   });
  // }


}
