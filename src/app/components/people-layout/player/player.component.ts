import { Component, Input } from '@angular/core';
import { People } from '../../../models/people';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
    @Input() player: People;
    @Input() details: boolean;
}
