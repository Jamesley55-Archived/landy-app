import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input()
  jeu!: string;
  nomDeJeu !: string[];
  constructor() { }

  ngOnInit(): void {
    this.nomDeJeu =  this.jeu.split(' ')
  }
}
