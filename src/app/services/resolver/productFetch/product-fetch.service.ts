import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DbService } from '../../db/db.service';

@Injectable({
  providedIn: 'root'
})
export class ProductFetchService implements Resolve<any>{

  constructor(private db:DbService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get Product in resolver...', route);
    return this.db.getProducts().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}