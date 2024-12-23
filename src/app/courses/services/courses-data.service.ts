import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class CoursesDataService extends DefaultDataService<Course> {


  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Course', http, httpUrlGenerator);

  }

  getAll(): Observable<Course[]> {
    return this.http.get('http://localhost:8080/api/courses')
      .pipe(
        map(res => res["payload"])
      );
  }

}
