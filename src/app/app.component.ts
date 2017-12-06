import { Component } from '@angular/core';
import { GoldService } from './gold.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gold: object;
  constructor(private _goldService: GoldService) {
    this.gold = this._goldService.getTotalGold();
  }
}
