import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startGame = new EventEmitter<{}>();
  gameCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startClick() {
    console.log('start clicked!');
    setInterval(this.startTimer, 1000);

    // this.startGame.emit({
    //   gameCount: this.gameCount
    // });
  }

  startTimer() {
    this.gameCount = this.gameCount + 1;
    this.startGame.emit({
      gameCount: this.gameCount
    });
  }

}
