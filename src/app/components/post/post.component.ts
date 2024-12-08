import { Component, Input } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() article!: Article;
  ngOnInit(): void {}
}
