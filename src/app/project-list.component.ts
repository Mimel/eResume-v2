import { Component } from '@angular/core';
import { ProjectRetrieval } from './project.retrieval.service';

@Component({
  selector: 'project-list',
  providers: [ProjectRetrieval],
  styleUrls: ['project_list_styles.css'],
  templateUrl: 'project_list.html'
})
export class ProjListComponent {
  titles = [];
  selectedTitle;

  constructor(private retrievalService : ProjectRetrieval) {
    retrievalService.getProjectList().subscribe((resp) => {
      var i = 0;
      resp.forEach(element => this.titles.push(new TitleElement(element.username, i++)))
      this.selectedTitle = this.titles[0];
    },
    (error) => {});
  }

  selectTitle(titleNo: number) {
    if(titleNo < this.titles.length && titleNo >= 0) {
      this.selectedTitle = this.titles[titleNo];
    }
  }

  isSelectedTitle(titleNo: number) {
    return (titleNo === this.selectedTitle.number);
  }
}

class TitleElement {
  name;
  number;

  constructor(name: string, no: number) {
    this.name = name;
    this.number = no;
  }
}
