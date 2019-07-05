import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AulasService {

  constructor() { }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular', 'JavaScript', 'TypeScript'];
  }
}
