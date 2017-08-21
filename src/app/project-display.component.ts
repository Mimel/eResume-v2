import { Component } from '@angular/core';
import { ProjectData } from './project.retrieval.service';

@Component({
  selector: 'project-display',
  providers: [],
  styleUrls: ['project_display_styles.css'],
  templateUrl: 'project_display.html'
})
export class ProjDisplayComponent {
  constructor(private dataService: ProjectData) {}
}
