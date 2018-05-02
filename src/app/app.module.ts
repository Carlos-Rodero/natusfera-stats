import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';


import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataSearchComponent } from './data-search/data-search.component';
import { DataChartComponent } from './data-chart/data-chart.component';
import { DataStatsComponent } from './data-stats/data-stats.component';
import { DataChart01Component } from './data-chart01/data-chart01.component';


@NgModule({
    declarations: [
        AppComponent,
        DataComponent,
        DataDetailComponent,
        DashboardComponent,
        DataSearchComponent,
        DataChartComponent,
        DataStatsComponent,
        DataChart01Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
