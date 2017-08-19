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
  constructor(private retrievalService : ProjectRetrieval) {
    retrievalService.getProjectList().subscribe((resp) => {this.titles = resp},
                                                (error) => {});
  }
}
