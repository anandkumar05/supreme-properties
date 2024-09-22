import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PropertyComponent } from '../shared/property/property.component';
import { IPROPERTY } from '../_interfaces/property.interface';
import { properties } from '../_datas/property.data';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ITESTIMONIAL } from '../_interfaces/testimonial.interface';
import { testimonials } from '../_datas/testimonial.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PropertyComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { ngSkipHydration: 'true' }
})
export class HomeComponent implements OnInit {

  properties: IPROPERTY[] = properties;
  testimonialList: ITESTIMONIAL[] = testimonials;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit() {
    // gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.gsapOnInit(), 0);
    }
  }

  gsapOnInit() {
    this.gsapDesignInit();
    this.gsapClientInit();
    this.gsapPropertiesInit();
    this.gsapMatchInit();
    this.gsapValueInit();
    this.gsapAgentInit();
    this.gsapTestiInit();
    this.gsapDreamHomeInit();
  }

  gsapDesignInit() {
    const animationSettings = {
      autoAlpha: 0,
      duration: 1.5,
      delay: 0.2,
      scrollTrigger: {
        trigger: 'sec-design',
        start: 1,
        toggleActions: 'play none none reverse',
      }
    };
  
    gsap.from('.design-img.design-left', {...animationSettings,x: '-110%',y: '110%'});
    gsap.from('.design-img.design-center', {...animationSettings, y: '300%'});
    gsap.from('.design-img.design-right', {...animationSettings, x: '110%'});
    ScrollTrigger.refresh();
  }

  gsapClientInit() {
    const animationSettings = {
      autoAlpha: 0,
      duration: 1.5,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.sec-client',
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        toggleActions: 'play reverse play reverse'
      }
    };

    gsap.from('.sec-client-head', {...animationSettings,y: '-100%', opacity: 0.3});
    gsap.from('.clients-list', {...animationSettings,y: '100%', opacity: 0});
  
    ScrollTrigger.refresh();
  }

  gsapPropertiesInit() {
    const animationSettings = {
      autoAlpha: 0,
      duration: 3,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.sec-properties',
        start: 'top 50%',
        end: 'top 10%',
        scrub: true,
        toggleActions: 'play reverse play reverse'
      }
    };

    gsap.from('.sec-properties-head', {...animationSettings,y: '-100%', opacity: 0});
    gsap.from('.property-filter', {...animationSettings,x: '100%', opacity: 0});
    gsap.from('.property-list', {...animationSettings,y: '100%', opacity: 0});
  
    ScrollTrigger.refresh();
  }

  gsapMatchInit() {
    const animationSettings = {
      autoAlpha: 0,
      duration: 3,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.sec-match',
        start: 'top 80%',
        end: 'top 10%',
        scrub: true,
        toggleActions: 'play reverse play reverse'
      }
    };

    gsap.from('.match-head-left', {...animationSettings,x: '-100%', opacity: 0});
    gsap.from('.match-head-right', {...animationSettings,x: '100%', opacity: 0});
    gsap.from('.sec-match .col-left', {...animationSettings,x: '-100%', opacity: 0});
    gsap.from('.sec-match .col-right', {...animationSettings,x: '100%', opacity: 0});
    gsap.from('.col-another-right', {...animationSettings,x: '180%', opacity: 0})
  
    ScrollTrigger.refresh();
  }

  gsapValueInit() {
    const animationSettings = {
      autoAlpha: 0,
      duration: 3,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.sec-value',
        start: 'top 80%',
        end: 'top 10%',
        scrub: true,
        toggleActions: 'play reverse play reverse'
      }
    };

    gsap.from('.sec-value .col-left', {...animationSettings,x: '-100%',y: '-100%', opacity: 0});
    gsap.from('.sec-value .col-right', {...animationSettings,x: '100%', opacity: 0});
  
    ScrollTrigger.refresh();
  }

  gsapAgentInit() {
    const animationSettings = {
      autoAlpha: 0,
      duration: 3,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.sec-agents',
        start: 'top 60%',
        end: 'top 10%',
        scrub: true,
        toggleActions: 'play reverse play reverse'
      }
    };

    gsap.from('.sec-agent-head', {...animationSettings, opacity: 0})
    gsap.from('.sec-agents .agent1', {...animationSettings,y: '100%', opacity: 0});
    gsap.from('.sec-agents .agent2', {...animationSettings,y: '200%', opacity: 0});
    gsap.from('.sec-agents .agent3', {...animationSettings, opacity: 0.3});
  
    ScrollTrigger.refresh();
  }

  gsapTestiInit() {
    const animationSettings = {
      autoAlpha: 0,
      duration: 3,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.sec-testimonials',
        start: 'top 70%',
        end: 'top 10%',
        scrub: true,
        toggleActions: 'play reverse play reverse'
      }
    };

    gsap.from('.testi-heading', {...animationSettings,y: '-100%', opacity: 0})
    gsap.from('.testi-content', {...animationSettings,x: '100%', opacity: 0});
  
    ScrollTrigger.refresh();
  }
  
  gsapDreamHomeInit() {
    const animationSettings = {
      autoAlpha: 0,
      duration: 3,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.sec-dream-home',
        start: 'top 60%',
        end: 'top 10%',
        scrub: true,
        toggleActions: 'play reverse play reverse'
      }
    };

    gsap.from('.dream-home-content', {...animationSettings,x: '-100%', opacity: 0})
    gsap.from('.dream-home-img', {...animationSettings,x: '100%', opacity: 0});
  
    ScrollTrigger.refresh();
  }

  ngOnDestroy() {
    // Clean up ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}
