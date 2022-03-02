import { Component, OnInit, AfterViewInit } from '@angular/core';
declare function memoire(): any;
declare function reset(): any;

@Component({
  selector: 'app-memoire',
  templateUrl: './memoire.component.html',
  styleUrls: ['./memoire.component.css'],
})
export class MemoireComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    memoire();
  }
  ngAfterViewInit() {
    reset();
  }
}
