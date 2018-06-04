import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ProjectData {
  projects = [];
  active;

  constructor(private http: Http) {
    this.http.get('http://localhost:4200/assets/projects.json')
    //this.http.get('http://mattimel.com/newsite/assets/projects.json')
                    .map((resp) => resp.json())
                    .subscribe((resp) => {
                      var i = 0;
                      resp.forEach(element => this.projects.push(new Project(i++, element.name, element.desc, element.story, element.links, element.gallery)))
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
  desc;
  story;
  links;
  gallery;

  constructor(number: number, name: string, desc: string, story: string, links: Link[], gallery: string[][]) {
    this.number = number;
    this.name = name;
    this.desc = desc;
    this.story = story;
    this.links = links;
    this.gallery = gallery;
  }
}

interface Link {
    text: string;
    destination: string;
}
