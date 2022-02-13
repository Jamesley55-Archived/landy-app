import { Pays } from './pays';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WinGameComponent } from '../components/win-game/win-game.component';

@Component({
  selector: 'app-monde',
  templateUrl: './monde.component.html',
  styleUrls: ['./monde.component.css'],
})
export class MondeComponent implements OnInit {
  time: number = 900000;
  startGame: boolean = true;
  input = new FormControl('', [Validators.minLength(3)]);
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  start() {
    if (this.startGame) {
      let intervalId = setInterval(() => {
        this.time -= 1000;
        if (this.time <= 1) {
          this.openDialog();
          this.time = 0;
          clearInterval(intervalId);
        }
      }, 1000);
      this.startGame = false;
    }
  }

  openDialog(): void {
    this.dialog.open(WinGameComponent, {
      panelClass: 'WinGameComponent',
    });
  }

  click(): void {
    if (this.startGame === false) {
      console.log(this.input.value);
      document.getElementById(this.input.value)?.classList.add('active');
    }
    this.input.setValue('');
  }

  getErrorMessage(): string | void {
    if (this.input.hasError('required')) {
      return 'You must enter your name';
    }
  }
}
