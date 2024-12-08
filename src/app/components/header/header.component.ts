import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngOnInit(): void {
    this.addCaroussel();
  }
  isSidebarOpen = false; // State for sidebar visibility

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;

    // Add or remove no-hover class to the body for disabling hover
    if (this.isSidebarOpen) {
      document.body.classList.add('no-hover');
    } else {
      document.body.classList.remove('no-hover');
    }
  }
  addCaroussel() {
    $(document).ready(function () {
      $('.basic-slider').owlCarousel({
        items: 1,
        nav: true,
        margin: 5,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
      });
    });
  }
}
