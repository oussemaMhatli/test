import { Component } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';
declare var $: any; // Declare jQuery for use
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  articles: Article[] = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.addCaroussel();
    this.getAllArticle();
  }
  getAllArticle(): void {
    this.articleService.getArticles().subscribe({
      next: (data) => {
        this.articles = data;
      },
      error: (error) => {
        console.error('Error fetching articles:', error);
      },
    });
  }

  addCaroussel() {
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        margin: 0,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });
    });
  }
}
