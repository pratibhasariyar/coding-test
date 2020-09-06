import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MissionDataService } from '../mission-data.service';
import {isUndefined} from 'lodash';

@Component({
  selector: 'app-space-xdetails',
  templateUrl: './space-xdetails.component.html',
  styleUrls: ['./space-xdetails.component.css']
})
export class SpaceXDetailsComponent implements OnInit {

  constructor(private route: Router, private missionService: MissionDataService) {
  }

  launchYears: Array<number> = [];
  trueFalseArray: Array<boolean>;

  launchYear: Number;
  launchSuccess: boolean;
  landSuccess: boolean;

  results: Array<object>;
  noMission: boolean;

  navigateToFilteredResults(filterClicked: any, filterType: string) {
    if (filterType === "launch") { this.launchSuccess = filterClicked }
    if (filterType === "land") { this.landSuccess = filterClicked }
    if (filterType === "year") { this.launchYear = filterClicked }

    if (!isUndefined(this.launchSuccess) && isUndefined(this.landSuccess) && isUndefined(this.launchYear)) {
      this.route.navigate(['/home/'], { queryParams: { 'launchSuccess': this.launchSuccess} });
    }
    if (!isUndefined(this.launchSuccess) && !isUndefined(this.landSuccess) && isUndefined(this.launchYear)) {
      this.route.navigate(['/home/'], { queryParams: { 'launchSuccess': this.launchSuccess, 'landSuccess': this.landSuccess } });
    }
    if (!isUndefined(this.launchSuccess) && !isUndefined(this.landSuccess) && !isUndefined(this.launchYear)) {
      this.route.navigate(['/home/'], { queryParams: { 'launchSuccess': this.launchSuccess, 'landSuccess': this.landSuccess, 'lanchYear': this.launchYear } });
    }

    //this.route.navigate(['/home/'], { queryParams: { 'launchSuccess': this.launchSuccess, 'landSuccess': this.landSuccess, 'lanchYear': this.launchYear } });

    this.missionService.filterResponse(this.missionService.res, this.launchSuccess, this.landSuccess, this.launchYear);
    this.results = this.missionService.results;
  }

  ngOnInit() {
    for (let i = 2006; i <= 2020; i++) {
      this.launchYears.push(i);
    }
    this.trueFalseArray = [true, false];

    this.missionService.fetchDataOnLoad();
    this.results = this.missionService.results;
    setTimeout(() => {
      this.results = this.missionService.results;
    }, 3000);

  }

}
