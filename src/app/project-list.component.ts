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

  getOffset() {
    //Accounts for both the height of the title and the separators (In this case, 50 + 5).
    return this.dataService.active * 52;
  }

  ngAfterViewInit() {
    $("#pl_complete_list").on("click", ".pl_wrapper", {env: this}, shiftBar);

    function shiftBar(event) {
      $("#pl_slider").animate({
        top: event.data.env.getOffset()
      }, {
        duration: 250,
        start: function(event) {
          $(this).clearQueue();
        }
      });
    }
  }
}
