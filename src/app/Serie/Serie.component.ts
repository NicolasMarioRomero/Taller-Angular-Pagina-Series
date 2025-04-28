import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie'

import { SerieService } from './Serie.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Serie',
  templateUrl: './Serie.component.html',
  styleUrls: ['./Serie.component.css'],
  imports: [CommonModule]
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  averageSeasons: number = 0;
  constructor(private serieService: SerieService) { }
  getSeriesList() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.getPromedio();
    });
  }
  getPromedio() {
    let suma = 0;
    for (let s of this.series) {
      suma += s.seasons;
    }

    this.averageSeasons = suma / this.series.length;
  }

  selectedSerie: Serie | null = null;

  showSeriesDetail(serie: Serie) {
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeriesList();
  }

}
