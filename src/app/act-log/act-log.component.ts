import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-act-log',
  templateUrl: './act-log.component.html',
  styleUrls: ['./act-log.component.css']
})
export class ActLogComponent implements OnInit {
  activities = [];

  constructor(private _goldService: GoldService) {
    this.activities = this._goldService.getActivities();
  }

  ngOnInit() {
  }

}
