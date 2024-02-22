import {Component, ElementRef, HostListener, Renderer2} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  lastScrollPos = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const navbar = this.el.nativeElement.querySelector('.nav-bar--desktop');

    if (window.scrollY > this.lastScrollPos) {
      this.renderer.removeClass(navbar, 'nav-bar--visible');
    } else {
      this.renderer.addClass(navbar, 'nav-bar--visible');
    }

    this.lastScrollPos = window.scrollY;
  }

  revealMobileMenu() {
    const navMobile = this.el.nativeElement.querySelector('.nav-bar--mobile');
    if (navMobile.classList.contains('nav-bar--mobile--opened')) {
      this.renderer.removeClass(navMobile, 'nav-bar--mobile--opened');
    } else {
      this.renderer.addClass(navMobile, 'nav-bar--mobile--opened');
    }
  }
}
