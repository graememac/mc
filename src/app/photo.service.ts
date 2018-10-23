import { Injectable } from '@angular/core'
import Photo from './types'

@Injectable({
  providedIn: 'root'
})

export default class PhotoService {
  private photos: Photo[] = [];

  constructor() { }

  getPhotos() {
    return fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then((response) => response.json())
  }
}