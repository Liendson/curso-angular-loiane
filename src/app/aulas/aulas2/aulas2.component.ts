import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aulas2',
  templateUrl: './aulas2.component.html',
  styleUrls: ['./aulas2.component.scss']
})
export class Aulas2Component implements OnInit {

  cursos: string[] = ['Angular', 'Java', 'PHP'];
  hoje = new Date();

  constructor() { }

  ngOnInit() {
  }

}
