import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  backgroundImage: string = '';
  title: string = 'Default Title';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setBannerData(event.url);
      }
    });
  }

  private setBannerData(url: string): void {
    if (url.includes('home')) {
      this.backgroundImage = 'assets/images/Buddhas.png';
      this.title = 'Home';
    }else if (url.includes('about')) {
      this.backgroundImage = 'assets/images/Buddhas.png';
      this.title = 'About';
    } else if (url.includes('work-experience')) {
      this.backgroundImage = 'assets/images/Buddhas.png';
      this.title = 'Work Experience';
    }else if (url.includes('education')) {
      this.backgroundImage = 'assets/images/Buddhas.png';
      this.title = 'Education';
    }else if (url.includes('tech-skills')) {
      this.backgroundImage = 'assets/images/Buddhas.png';
      this.title = 'Tech Skills';
    }else if (url.includes('skills')) {
      this.backgroundImage = 'assets/images/Buddhas.png';
      this.title = 'Skills';
    }else if (url.includes('contact')) {
      this.backgroundImage = 'assets/images/Buddhas.png';
      this.title = 'Contact';
    }
  }
}
