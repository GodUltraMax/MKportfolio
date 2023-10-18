import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isFixed = false;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const headerHeight = this.el.nativeElement.offsetHeight + 15; // Get the height of the header
    this.isFixed = window.scrollY > headerHeight;
  }
}
