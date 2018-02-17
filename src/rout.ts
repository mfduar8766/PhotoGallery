//This allows you to connect all the views together 
//to give it the appearance of changing pages.

import {Routes} from '@angular/router';
import {GalleryComponent} from './app/gallery/gallery.component';
import {ImgComponent} from './app/img/img.component';

export const appRoutes: Routes = [
    {path: 'gallery', component: GalleryComponent},
    {path: 'image/:id', component: ImgComponent},
    {path: "", redirectTo: "/gallery", pathMatch: 'full'},
]