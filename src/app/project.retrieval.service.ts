import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ProjectRetrieval {
  constructor(private http: Http) {}

  getProjectList() {
    var projects = [1];
    return this.http.get('https://jsonplaceholder.typicode.com/users')
                    .map((resp) => resp.json());
  }
}
