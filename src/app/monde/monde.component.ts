import { Pays } from './pays';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-monde',
  templateUrl: './monde.component.html',
  styleUrls: ['./monde.component.css']
})
export class MondeComponent implements OnInit {
  time: number = 300000;
  input = new FormControl('', [Validators.required, Validators.minLength(3)]); 
  listDePlays: Pays[] = 
  [{nom:'Émirats arabes unis', aEteTrouver:false},
  {nom:"CAD", aEteTrouver:false}, 
  {nom: "JNP", aEteTrouver: false}]
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.time -= 1000
    }
    ,1000)
  }

  click():void{
    console.log(this.input.value)
  }

  getErrorMessage(): string | void {
    if (this.input.hasError('required')) {
        return 'You must enter your name';
    }
    
}

}
