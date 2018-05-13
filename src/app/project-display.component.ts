import { Component } from '@angular/core';
import { ProjectData } from './project.retrieval.service';
import * as $ from 'jquery';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

@Component({
  selector: 'project-display',
  providers: [],
  styleUrls: ['project_display_styles.css'],
  templateUrl: 'project_display.html'
})
export class ProjDisplayComponent {
  constructor(private dataService: ProjectData) {}

  ngAfterViewInit() {

      $("#display_wrapper").on("click", ".display_thumbnail", {env: this}, showGallery);

      function showGallery(event) {
          var pswpElement = document.querySelectorAll('.pswp')[0];

          console.log("Hello!");

          // build items array
          var items = [
              {
                  src: 'https://placekitten.com/600/400',
                  w: 600,
                  h: 400
              },
              {
                  src: 'https://placekitten.com/1200/900',
                  w: 1200,
                  h: 900
              }
          ];

          // define options (if needed)
          var options = {
              bgOpacity: 0.8,
              index: 0
          };

          // Initializes and opens PhotoSwipe
          var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
          gallery.init();
    }
  }
}
