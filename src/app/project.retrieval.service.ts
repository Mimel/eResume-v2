import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ProjectData {
  projects = [];
  active;

  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/users')
                    .map((resp) => resp.json())
                    .subscribe((resp) => {
                      var i = 0;
                      resp.forEach(element => this.projects.push(new Project(i++, element.name, element.username)))
                      this.active = 0;
                    },
                    (error) => {});
  }

  getSelectedProject() {
    return this.projects[this.active];
  }
}

class Project {
  number;
  name;
  username;

  constructor(number: number, name: string, username: string) {
    this.number = number;
    this.name = name;
    this.username = username;
  }
}
