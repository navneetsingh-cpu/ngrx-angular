import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './action-types';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.login),
        tap(action => {
          localStorage.setItem('authToken', action.user.jwt);
        })
      )
    ,
    { dispatch: false });

  logout$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(AuthActions.logout),
        tap(action => {
          localStorage.removeItem('user');
          localStorage.removeItem('authToken');

          this.router.navigateByUrl('/login');
        })
      )
    , { dispatch: false });


  constructor(private actions$: Actions,
    private router: Router) {

  }

}
