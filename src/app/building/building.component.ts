import { Component, OnInit, Input } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  @Input() name: string;
  @Input() range: string;
  min: number;
  max: number;

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
    let rangeArray = this.range.split(',');
    this.min = parseInt(rangeArray[0], 10);
    this.max = parseInt(rangeArray[1], 10);

  }
  getGold() {
    this._goldService.generateGoldFrom(this.name, this.min, this.max);
  }

}
