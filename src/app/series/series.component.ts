import { Component, OnInit } from '@angular/core';
import { SerieService } from './serie.service';
import { Serie } from './serie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serviceSeries: SerieService) { }
  average : number = 0;
  series: Array<Serie> = [];


  getSeries(){
    this.serviceSeries.getSeries().subscribe(
      (data) => {
        this.series = data;
        this.average = this.serviceSeries.getAverage(this.series);
      }
    );
  }

  ngOnInit() {
    this.getSeries();
  }

}
