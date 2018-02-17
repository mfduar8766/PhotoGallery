import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../img/shared/image.service';


@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  title = 'Recent Photos';
  @Input() filterBy?: string = 'all'
  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    this.visibleImages = imageService.getImages();
   }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}
