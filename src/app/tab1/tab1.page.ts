import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IFilme } from '../models/IFilmes.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
titulo = 'Vídeos';

  listaVideos: IFilme[] = [
    {
      pagina: '/velozes'
    },
    


  ];
  dadosService: any;
  route: any;

  
}
