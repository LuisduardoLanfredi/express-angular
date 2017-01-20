import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Comment } from '../models/comment.model'

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {


  constructor (private http: Http) {}
      search() : Observable<Comment[]> {
        return this.http.get('http://localhost:9090/api/comment/search')
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      }

      add(comment: Comment) : any {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(comment);
        return this.http.post('http://localhost:9090/api/comment', body, headers).map((res: Response) => res.json());
    }   
}
