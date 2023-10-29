import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Serie} from './serie';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private apiUrl = 'https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json'

constructor(private http:HttpClient) { }

  getSeries(): Observable<Serie[]>{
    return this.http.get<Serie[]>(this.apiUrl);
  }

  getAverage(series: Array<Serie>): number{
    let sum = 0;
    for(let i = 0; i < series.length; i++){
      sum += series[i].seasons;
    }
    return sum/series.length;
  }
}
