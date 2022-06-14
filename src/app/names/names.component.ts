import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styles: [`
    .good {
      background-color: aqua;
    }
    .bad {
      background-color: rosybrown;
    }
  `]
})
export class NamesComponent implements OnInit {
  name: string;
  isGood: boolean;

  constructor() {
    this.isGood = Math.random() > 0.5
  }


  ngOnInit(): void {
  }

}
