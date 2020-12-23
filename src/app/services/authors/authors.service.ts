import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@env/environment';

import { Author } from '@app/interfaces/entities/author.interface';

const { APIUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Author[]>(`${APIUrl}/authors`);
  }
}
