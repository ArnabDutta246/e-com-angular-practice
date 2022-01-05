import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DbService } from '../../db/db.service';

@Injectable({
  providedIn: 'root'
})
export class PageDataResolverService implements Resolve<any>{

  constructor(private db:DbService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called page data resover...', route);
    return this.db.getPagesData().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}