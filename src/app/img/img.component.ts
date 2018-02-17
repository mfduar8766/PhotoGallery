import { Component, OnInit } from '@angular/core';
import {ImageService} from './shared/image.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  image: any
  
  constructor(private imageService: ImageService,
  private route: ActivatedRoute) {}

  ngOnInit() {
    this.image = this.imageService.getImg(
      +this.route.snapshot.params['id']
    )
  }

}
