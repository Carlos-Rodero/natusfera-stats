import { Injectable } from '@angular/core';
import { Data } from './data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
/*import { DATAS } from './mock-datas';*/
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DataService {

    private natusferaUrl_observations = '/observations.json';  // URL to web api
    private natusferaUrl_observations_from_project = '/observations/project';  // URL to web api
    private natusferaUrl_observations_from_CNC_Madrid = '/observations.json?d1=2018-04-27&d2=2018-04-30&place_id=570&per_page=200';  // URL to web api
    private natusferaUrl_observations_from_CNC_Cadiz = '/observations.json?d1=2018-04-27&d2=2018-04-30&place_id=494&per_page=200';  // URL to web api
    private natusferaUrl_observations_from_CNC_Barcelona = '/observations.json?d1=2018-04-27&d2=2018-04-30&place_id=620&per_page=200';  // URL to web api
    private natusferaUrl_id_observations = '/observations';  // URL to web api

    constructor(
        private http: HttpClient
    ) { }

    /** GET data from the server */
    getData(): Observable<Data[]> {
        return this.http.get<Data[]>(this.natusferaUrl_observations)
            .pipe(
                catchError(this.handleError('getData', []))
            );
    }

    /** GET data by id. Will 404 if id not found */
    getDataUnique(id: number): Observable<Data> {
        const url = `${this.natusferaUrl_id_observations}/${id}.json`;
        // TODO: send the message _after_ fetching the hero
        return this.http.get<Data>(url).pipe(
            catchError(this.handleError<Data>(`getDataUnique id=${id}`))
        );
    }

    /* GET data whose name contains search term */
    searchData(term: string): Observable<Data[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.http.get<Data[]>(`${this.natusferaUrl_observations}?taxon_name=${term}`).pipe(
            catchError(this.handleError<Data[]>('searchData', []))
        );
    }

    /** GET data from CNC_Madrid by id. Will 404 if id not found */
    getData_CNC_Madrid(id: number): Observable<Data[]> {
        const url = `${this.natusferaUrl_observations_from_CNC_Madrid}&page=${id}.json`;
        //console.log(url);
        return this.http.get<Data[]>(url).pipe(
            catchError(this.handleError<Data[]>('getData_CNC_Madrid', []))
        );
    }

    /** GET data from CNC_Cadiz by id. Will 404 if id not found */
    getData_CNC_Cadiz(id: number): Observable<Data[]> {
        const url = `${this.natusferaUrl_observations_from_CNC_Cadiz}&page=${id}.json`;
        //console.log(url);
        return this.http.get<Data[]>(url).pipe(
            catchError(this.handleError<Data[]>('getData_CNC_Cadiz', []))
        );
    }

    /** GET data from CNC_Barcelona by id. Will 404 if id not found */
    getData_CNC_Barcelona(id: number): Observable<Data[]> {
        const url = `${this.natusferaUrl_observations_from_CNC_Barcelona}&page=${id}.json`;
        //console.log(url);
        return this.http.get<Data[]>(url).pipe(
            catchError(this.handleError<Data[]>('getData_CNC_Barcelona', []))
        );
    }

    /* GET data whose name contains search term */
    /*searchData(term: string): Observable<Data[]> {
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.http.get<Data[]>(`${this.natusferaUrl_observations}?taxon_name=${term}`).pipe(
        catchError(this.handleError<Data[]>('searchData', []))
      );
    }*/

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
