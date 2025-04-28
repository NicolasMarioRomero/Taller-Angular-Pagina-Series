/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { SerieService } from './Serie.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AppComponent } from '../app.component';
import { SerieComponent } from './Serie.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Serie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, HttpClientModule],
      providers: [SerieService],
      declarations: [AppComponent, SerieComponent]
    });
  });

  it('should ...', inject([SerieService], (service: SerieService) => {
    expect(service).toBeTruthy();
  }));
});
