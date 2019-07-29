import { CursoServiceService } from './curso-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotas-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class RotasCursosComponent implements OnInit {

  cursos: any[];

  constructor(private cursoService: CursoServiceService) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

}
