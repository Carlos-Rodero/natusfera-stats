import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash';

import { Data } from '../data';
import { empty } from 'rxjs/Observer';
import { AUTO_STYLE } from '@angular/core/src/animation/dsl';

@Component({
    selector: 'app-data-chart01',
    templateUrl: './data-chart01.component.html',
    styleUrls: ['./data-chart01.component.css']
})

export class DataChart01Component implements OnInit {

    @ViewChild('chartCNC') elCNC: ElementRef;

    // object data to use for each city
    data: Data;

    // var to use for get CNC_Madrid
    data_CNC_Madrid: Data;
    dataList_Madrid: Data[];
    iter_Madrid: number;

    // var to use for get CNC_Cadiz
    data_CNC_Cadiz: Data;
    dataList_Cadiz: Data[];
    iter_Cadiz: number;

    // var to use for get CNC_Cadiz
    data_CNC_Barcelona: Data;
    dataList_Barcelona: Data[];
    iter_Barcelona: number;

    // var to get data
    data_check: any[];

    // var to show info in the HTML
    isLoading: Boolean = true;
    isLoading_Madrid: Boolean = true;
    isLoading_Cadiz: Boolean = true;
    isLoading_Barcelona: Boolean = true;


    // data to chart
    data_per_days_CNC_Madrid: any[] = [];
    data_per_days_CNC_Cadiz: any[] = [];
    data_per_days_CNC_Barcelona: any[] = [];
    total_Madrid: number;
    total_Cadiz: number;
    total_Barcelona: number;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService,
    ) { }

    ngOnInit() {
        this.getData_CNC_Madrid();
        this.getData_CNC_Cadiz();
        this.getData_CNC_Barcelona();
    }

    iterPerPageData_CNC_Madrid(): void {
        var isNotPendingData = false;
        this.dataService.getData_CNC_Madrid(this.iter_Madrid)
            .subscribe(data => {
                isNotPendingData = this.isPageEmpty(data)
                this.iter_Madrid += 1;
                if (!isNotPendingData) {
                    this.dataList_Madrid = data;
                    this.dataList_Madrid.forEach(element => {
                        this.data_CNC_Madrid.observed_on = element.observed_on;
                        this.data_CNC_Madrid.observed_on_string = element.observed_on_string;
                        this.data_CNC_Madrid.id = element.id;
                    });
                    console.log("hi ha mes dades");
                    this.iterPerPageData_CNC_Madrid();
                } else {
                    this.isLoading_Madrid = false;
                    this.processData_CNC_Madrid();
                }
            })
    }

    iterPerPageData_CNC_Cadiz(): void {
        var isNotPendingData = false;
        this.dataService.getData_CNC_Cadiz(this.iter_Cadiz)
            .subscribe(data => {
                isNotPendingData = this.isPageEmpty(data)
                this.iter_Cadiz += 1;
                if (!isNotPendingData) {
                    this.dataList_Cadiz = data;
                    this.dataList_Cadiz.forEach(element => {
                        this.data_CNC_Cadiz.observed_on = element.observed_on;
                        this.data_CNC_Cadiz.observed_on_string = element.observed_on_string;
                        this.data_CNC_Cadiz.id = element.id;
                    });
                    console.log("hi ha mes dades");
                    this.iterPerPageData_CNC_Cadiz();
                } else {
                    this.isLoading_Cadiz = false;
                    this.processData_CNC_Cadiz();
                }
            })
    }

    iterPerPageData_CNC_Barcelona(): void {
        var isNotPendingData = false;
        this.dataService.getData_CNC_Barcelona(this.iter_Barcelona)
            .subscribe(data => {
                isNotPendingData = this.isPageEmpty(data)
                this.iter_Barcelona += 1;
                if (!isNotPendingData) {
                    this.dataList_Barcelona = data;
                    this.dataList_Barcelona.forEach(element => {
                        this.data_CNC_Barcelona.observed_on = element.observed_on;
                        this.data_CNC_Barcelona.observed_on_string = element.observed_on_string;
                        this.data_CNC_Barcelona.id = element.id;
                    });
                    //console.log("hi ha mes dades");
                    this.iterPerPageData_CNC_Barcelona();
                } else {
                    this.isLoading_Barcelona = false;
                    this.processData_CNC_Barcelona();
                }
            })
    }

    isPageEmpty(data): boolean {
        this.data_check = data;
        if (!this.data_check || !this.data_check.length) {
            //console.log("no hi ha mes dades");
            this.isLoading = false;
            return true;
        } else {
            this.isLoading = true;
            return false;
        }
    }

    getData_CNC_Madrid() {
        this.data_CNC_Madrid = new Data();
        this.iter_Madrid = 0;
        this.iterPerPageData_CNC_Madrid();
    }

    getData_CNC_Cadiz() {
        this.data_CNC_Cadiz = new Data();
        this.iter_Cadiz = 0;
        this.iterPerPageData_CNC_Cadiz();
    }

    getData_CNC_Barcelona() {
        this.data_CNC_Barcelona = new Data();
        this.iter_Barcelona = 0;
        this.iterPerPageData_CNC_Barcelona();
    }

    processData_CNC_Madrid() {
        this.total_Madrid = this.data_CNC_Madrid.observed_on.length;
        //console.log("total Madrid:" + this.total_Madrid)
        var day_27 = this.data_CNC_Madrid.observed_on.filter(date => date === "2018-04-27");
        var day_28 = this.data_CNC_Madrid.observed_on.filter(date => date === "2018-04-28");
        var day_29 = this.data_CNC_Madrid.observed_on.filter(date => date === "2018-04-29");
        var day_30 = this.data_CNC_Madrid.observed_on.filter(date => date === "2018-04-30");

        this.data_per_days_CNC_Madrid.push(day_27.length);
        this.data_per_days_CNC_Madrid.push(day_28.length);
        this.data_per_days_CNC_Madrid.push(day_29.length);
        this.data_per_days_CNC_Madrid.push(day_30.length);

        //this.chart_CNC();
    }

    processData_CNC_Cadiz() {
        this.total_Cadiz = this.data_CNC_Cadiz.observed_on.length;
        //console.log("total Cadiz:" + this.total_Cadiz)
        var day_27 = this.data_CNC_Cadiz.observed_on.filter(date => date === "2018-04-27");
        var day_28 = this.data_CNC_Cadiz.observed_on.filter(date => date === "2018-04-28");
        var day_29 = this.data_CNC_Cadiz.observed_on.filter(date => date === "2018-04-29");
        var day_30 = this.data_CNC_Cadiz.observed_on.filter(date => date === "2018-04-30");

        this.data_per_days_CNC_Cadiz.push(day_27.length);
        this.data_per_days_CNC_Cadiz.push(day_28.length);
        this.data_per_days_CNC_Cadiz.push(day_29.length);
        this.data_per_days_CNC_Cadiz.push(day_30.length);

        //this.chart_CNC();
    }

    processData_CNC_Barcelona() {
        this.total_Barcelona = this.data_CNC_Barcelona.observed_on.length;
        //console.log("total Barcelona:" + this.total_Barcelona)
        var day_27 = this.data_CNC_Barcelona.observed_on.filter(date => date === "2018-04-27");
        var day_28 = this.data_CNC_Barcelona.observed_on.filter(date => date === "2018-04-28");
        var day_29 = this.data_CNC_Barcelona.observed_on.filter(date => date === "2018-04-29");
        var day_30 = this.data_CNC_Barcelona.observed_on.filter(date => date === "2018-04-30");

        this.data_per_days_CNC_Barcelona.push(day_27.length);
        this.data_per_days_CNC_Barcelona.push(day_28.length);
        this.data_per_days_CNC_Barcelona.push(day_29.length);
        this.data_per_days_CNC_Barcelona.push(day_30.length);

        //this.chart_CNC();
    }

    chart_CNC() {
        const element = this.elCNC.nativeElement;

        var trace_Madrid = {
            x: ["2018-04-27", "2018-04-28", "2018-04-29", "2018-04-30"],
            y: this.data_per_days_CNC_Madrid,
            mode: 'lines+markers',
            name: 'Madrid',
            line: {
                color: 'rgb(164, 194, 244)',
                width: 3
            },
            marker: {
                color: 'rgb(164, 194, 244)',
                size: 8
            },
        };

        var trace_Cadiz = {
            x: ["2018-04-27", "2018-04-28", "2018-04-29", "2018-04-30"],
            y: this.data_per_days_CNC_Cadiz,
            mode: 'lines+markers',
            name: 'Cadiz',
            line: {
                color: 'rgb(234, 153, 153)',
                width: 3
            },
            marker: {
                color: 'rgb(234, 153, 153)',
                size: 8
            },
        };

        var trace_Barcelona = {
            x: ["2018-04-27", "2018-04-28", "2018-04-29", "2018-04-30"],
            y: this.data_per_days_CNC_Barcelona,
            mode: 'lines+markers',
            name: 'Barcelona',
            line: {
                color: 'rgb(255, 217, 102)',
                width: 3
            },
            marker: {
                color: 'rgb(255, 217, 102)',
                size: 8
            },
        };

        var data = [trace_Madrid, trace_Cadiz, trace_Barcelona];

        var layout = {
            width: 700,
            height: 500,
            title: 'total observacions / dia',
            xaxis: {
                title: 'dies',
            },
            yaxis: {
                title: "número d'observacions",
            }
        };

        Plotly.newPlot(element, data, layout);
    }

}
