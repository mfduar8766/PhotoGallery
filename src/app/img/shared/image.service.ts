import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
    vissableImgs = [];
    getImages() {
        return this.vissableImgs = images.slice(0); //Start at 0 to end.
    }

    getImg(id: number) {
        return images.slice(0).find(image => image.id == id);
    }
}

const images = [

    { "id": 1, "category": "people", "caption": "Founder of Apple Inc: Steve Jobs", "url": "assets/img/steve.jpg" },
    { "id": 2, "category": "camping", "caption": "Gorgeous campsite", "url": "assets/img/camp.jpg" },
    { "id": 3, "category": "scenery", "caption": "Top view of mountians", "url": "assets/img/mountian.jpg" },
    { "id": 4, "category": "monuments", "caption": "The Pyramids", "url": "assets/img/pyramids.jpg" },
    { "id": 5, "category": "scenery", "caption": "One of the great lakes", "url": "assets/img/lake.jpg" },
    { "id": 6, "category": "scenery", "caption": "View of a forest", "url": "assets/img/forest.jpg" },
    { "id": 7, "category": "scenery", "caption": "New York City", "url": "assets/img/ny.jpg" },
    { "id": 8, "category": "animals", "caption": "Image of a Tiger", "url": "assets/img/tiger.jpg" },
    { "id": 9, "category": "camping", "caption": "Gorgeous campsite", "url": "assets/img/camp2.jpg" },
    { "id": 10, "category": "camping", "caption": "Camp fire", "url": "assets/img/fire.jpg" },
    { "id": 11, "category": "monuments", "caption": "The Statue of Liberty", "url": "assets/img/liberty.jpg" },
    { "id": 12, "category": "monuments", "caption": "The Eiffel Tower", "url": "assets/img/tower.jpg" },
    { "id": 13, "category": "animals", "caption": "Image of a Shark", "url": "assets/img/shark.jpg" },
    { "id": 14, "category": "animals", "caption": "Image of a Wolf", "url": "assets/img/wolf.png" },
    { "id": 15, "category": "people", "caption": "Microsoft CEO Bill Gates", "url": "assets/img/bill.jpg" },
    { "id": 16, "category": "people", "caption": "Facebook CEO Mark Zuckerberg", "url": "assets/img/mark.jpg" },
    { "id": 17, "category": "people", "caption": "CEO of Space X: Elon Musk", "url": "assets/img/musk.jpg" },
];