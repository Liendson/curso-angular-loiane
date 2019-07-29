import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  getCursos() {
    return [
      { id: 1, titulo: 'Angular'},
      { id: 2, titulo: 'Java'}
    ];
  }


  constructor() { }
}
