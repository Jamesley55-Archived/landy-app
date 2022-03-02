import { Component, OnInit } from '@angular/core';
declare function espace(): any;
@Component({
  selector: 'app-espace',
  templateUrl: './espace.component.html',
  styleUrls: ['./espace.component.css'],
})
export class EspaceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    espace();
  }
}

/**
 *
 *
 */
