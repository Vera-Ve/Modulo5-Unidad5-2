import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgxChartsModule} from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { VerticalChartComponent } from './vertical-chart/vertical-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    VerticalChartComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
