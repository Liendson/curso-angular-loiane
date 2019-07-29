import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any = [
    {id: 1, nome: 'João', email: 'joao@gmail.com'},
    {id: 2, nome: 'Pedro', email: 'pedro@gmail.com'},
    {id: 3, nome: 'Marcelo', email: 'marcelo@gmail.com'}
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    let i = 0;
    for (let aluno of this.alunos) {
      aluno = this.alunos[i];
      if (aluno.id === id) {
        return aluno;
      }
      i++;
    }
    return null;
  }


  constructor() { }
}
