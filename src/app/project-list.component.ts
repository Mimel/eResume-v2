import { Component } from '@angular/core';
import { ProjectData } from './project.retrieval.service';

@Component({
  selector: 'project-list',
  providers: [],
  styleUrls: ['project_list_styles.css'],
  templateUrl: 'project_list.html'
})
export class ProjListComponent {

  constructor(private dataService : ProjectData) {}
}
