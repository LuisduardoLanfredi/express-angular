import { Component, OnInit } from '@angular/core';
import { CommentService } from './services/comment.service'
import { Comment } from './models/comment.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommentService]
})
export class AppComponent implements OnInit {

  private comments: Comment[];
  private comment: Comment;

  constructor(private _serviceTestService: CommentService){ }

  ngOnInit() {
    this.comment = new Comment();
    this.searchComments();
  }

  private sendData(): void {
    this._serviceTestService.add(this.comment).subscribe(
      res => { this.searchComments() },
      err => {  }
    )
  }

  private searchComments()
  {
    this._serviceTestService.search().subscribe(
      res => { this.comments = res },
      err => {  }
    )
  }
}
