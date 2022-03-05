import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'Noétique';
  jeu1 = 'Pays';
  jeu2 = 'Espace';
  jeu3 = 'Puzzle';
  jeu4 = 'Son';
  jeu5 = 'Mémoire';


}
