import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { isUndefined, filter} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MissionDataService {

  constructor(private route: Router, private http: HttpClient, private router: ActivatedRoute) { }
  results: Array<object>;
  res: any;
  missionDetails: Array<any>;

  fetchDataOnLoad() {
    this.http.get('https://api.spacexdata.com/v3/launches?limit=100').subscribe((response) => {
      this.res = response;
      this.filterResponse(this.res);
    }, (error) => {
      console.log('error in fetching data');
    })
  }

  filterResponse = (res: any, launch?: boolean, land?: boolean, year?: Number | string) => {
    let paramyear: string = '';
    let paramlaunch: boolean;
    let paramland: boolean;
    this.router.queryParams.subscribe(params => {
      paramyear = params.lanchYear;
      paramlaunch = params.launchSuccess;
      paramland = params.landSuccess;
    });
      if (launch || land || year) {
          this.matchQueryParameters(res, launch, land, year);
    } else {
      if (isUndefined(paramyear) && isUndefined(paramlaunch) && isUndefined(paramland)) {
        this.results = res;
      } else {
        //this.results = res.filter(element => element.launch_year == paramyear);
        this.matchQueryParameters(res, paramlaunch, paramland, paramyear);
      }
    }
    return this.results;
  }

  matchQueryParameters(res: Array<any>, launch: boolean, land: boolean | string, year: Number | string){

    launch = !isUndefined(launch) ? JSON.parse(launch.toString()): undefined;
    land = !isUndefined(land) ? JSON.parse(land.toString()): undefined;
   
    if(!isUndefined(launch) && isUndefined(land) && isUndefined(year)){
        this.results = res.filter(element => (element.launch_success == launch));
    }
    if(!isUndefined(launch) && !isUndefined(land) && isUndefined(year)){
        this.results = res.filter(element => (element.launch_success == launch &&
            element.rocket.first_stage.cores[0].land_success == land));
    }
    if (!isUndefined(launch) && !isUndefined(land) && !isUndefined(year)) {
     this.results = res.filter(element => (
         element.launch_success == launch &&
         element.rocket.first_stage.cores[0].land_success == land &&
         element.launch_year == year));
     }
  }
}
