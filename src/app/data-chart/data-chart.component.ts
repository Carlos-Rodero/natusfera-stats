import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash';

import { Data } from '../data';

@Component({
  selector: 'app-data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.css']
})
export class DataChartComponent implements OnInit {

  @ViewChild('chartEd') elEd: ElementRef;

  data: Data;
  dataList: Data[];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getDataList(4)
      .subscribe(data => {
      this.dataList = data;
        console.log(data);
      })
  }

}
