import { Component } from '@angular/core'
import PhotoService from './photo.service'
import Photo from './types'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  photos: Photo[] = []
  title: string = 'Photo Carousel'
  currentPhoto: string = ''
  currentTitle: string = ''
  currentIndex: number = 0  

  constructor(private photoService: PhotoService){}

  async ngOnInit() {
    this.photos = await this.photoService.getPhotos()
    this.setPhoto(this.currentIndex)
  }

  nextPhoto() {
    this.currentIndex += 1
    this.setPhoto(this.currentIndex)
  }

  prevPhoto() {
    this.currentIndex -= 1
    this.setPhoto(this.currentIndex)
  }

  setPhoto(index: number): any {
    
    if (index < 0 || index >= this.photos.length) {
      index = 0
      this.currentIndex = 0
    }

    this.currentPhoto = this.photos[index].thumbnailUrl
    this.currentTitle = this.photos[index].title
  }
}
