import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people-service';
import { People, PeopleResult } from '../../models/people';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-people-layout',
  templateUrl: './people-layout.component.html',
  styleUrls: ['./people-layout.component.css']
})
export class PeopleLayoutComponent implements OnInit {
    leftWins: number = 0;  
    rightWins: number = 0;

    leftPlayer: People;
    rightPlayer: People;

    numberOfPeople: number;
    detailsVisibility: boolean = false;

    constructor(
      private peopleService: PeopleService,
      private snackBar: MatSnackBar
    ) {}

    ngOnInit() {
      this.peopleService.getPeople().subscribe((result: PeopleResult) => {
        this.numberOfPeople = result.count;
      });
    }

    compare() {
      let message: string;
      if (this.leftPlayer.mass > this.rightPlayer.mass) {
        message = 'The winner is left player.'
        this.leftWins++;
      } else if (this.leftPlayer.mass < this.rightPlayer.mass) {
        message = 'The winner is right player.'
        this.rightWins++;
      } else {
        message = 'There\' no winner';
      }
      this.snackBar.open(message, 'Close', {
        duration: 2000,
      });
      this.detailsVisibility = true;
    }

    find(value: string) {
      this.peopleService.getSinglePerson(this.getRandomNumber(this.numberOfPeople)).subscribe((result: People) => {
        if (value === 'left') {
          this.leftPlayer = result;
        } else {
          this.rightPlayer = result;
        }
      });
    }

    playAgain() {
      this.rightPlayer = null;
      this.leftPlayer = null;
      this.detailsVisibility = false;
    }

    getRandomNumber(maxValue: number): number {
      return Math.floor((Math.random() * maxValue) + 1);
    }
}
