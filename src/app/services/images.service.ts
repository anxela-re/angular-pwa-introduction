import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>('http://picsum.photos/v2/list');
  }

  getImageById(id: string): Observable<Image> {
    return this.http.get<Image>('http://picsum.photos/id/' + id + '/info');
  }
}
