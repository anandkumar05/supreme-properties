import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    CarouselModule,
    CommonModule
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

  testiOptions!: OwlOptions;

  ngOnInit() {
    this.owlTestiInit();
  }

  owlTestiInit() {
    this.testiOptions = {
      loop: true,
      autoplay: false,
      dots: true,
      autoHeight: true,
      autoWidth: true,
      nav: false,
      startPosition: 1,
      items: 1.75,
      center: false,
      mouseDrag: true,
      touchDrag: true,
      responsive: {
        0: {
          items: 1.3,
          margin: 15,
        },
        500: {
          items: 1.3,
          margin: 15,
        },
        700: {
          items: 2.1,
          margin: 25,
        },
        930: {
          items: 2.5,
          margin: 25,
        }
      },
    }
  }

}
