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

      $("#display_wrapper").on("click", ".display_thumbnail", {env: this}, buildGallery);
      $("#display_wrapper").on("mouseenter", ".display_outref", {env: this}, hoverLink);

      function hoverLink(event) {
          console.log("Yep!");
      }

      function buildGallery(event) {
          var environment = event.data.env;
          var items = new Array();

          var clickedNode = event.target.parentNode;
          var gallery = clickedNode.parentNode;
          var nodes = gallery.childNodes;
          var numNodes = nodes.length;
          var index = 0;

          var currentImage;
          var numElements = 0;
          var dimensions;

          for(var i = 0; i < numNodes; i++) {
              if(nodes[i].nodeType === Node.ELEMENT_NODE) {
                  numElements++;
              }
          }

          for(var i = 0; i < numElements; i++) {
              currentImage = environment.dataService.getSelectedProject().gallery[i];
              dimensions = currentImage[2].split('x');

              items.push({
                  src: environment.prependPath(currentImage[0]),
                  w: parseInt(dimensions[0]),
                  h: parseInt(dimensions[1])
              });
          }

          var currentElement = 0;
          for(var i = 0; i < numNodes; i++) {
              if(nodes[i].nodeType === Node.ELEMENT_NODE) {
                  if(nodes[i] === clickedNode) {
                      index = currentElement;
                      break;
                  } else {
                      currentElement++;
                  }
              }
          }

          showGallery(index, items);
      }

      function showGallery(index, items) {
          var pswpElement = document.querySelectorAll('.pswp')[0];

          console.log(index);

          // define options (if needed)
          var options = {
              bgOpacity: 0.8,
              index: index
          };

          // Initializes and opens PhotoSwipe
          var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
          gallery.init();
    }
  }

  prependPath(gallery_file: string): string {
      return ("assets/images/project_images/" + gallery_file);
  }
}
