import { Component, AfterViewInit } from '@angular/core';
import { ProjectData } from './project.retrieval.service';
import * as $ from 'jquery';

@Component({
  selector: 'project-list',
  providers: [],
  styleUrls: ['project_list_styles.css'],
  templateUrl: 'project_list.html'
})
export class ProjListComponent {

  constructor(private dataService : ProjectData) {}

  ngAfterViewInit() {
    $( "#pl_complete_list" ).on("click", ".pl_wrapper", function() {
      $(this).css("color", "red");
    });
  }
}
