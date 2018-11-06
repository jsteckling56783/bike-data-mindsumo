import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes-zoomed-out',
  templateUrl: './routes-zoomed-out.component.html',
  styleUrls: ['./routes-zoomed-out.component.scss']
})
export class RoutesZoomedOutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var divElement = document.getElementById('viz1541494075660');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.minWidth = '750px';
    vizElement.style.maxWidth = '2000px';
    vizElement.style.minHeight = '400px';
    vizElement.style.maxHeight = '1200px';
    vizElement.style.width = (screen.width * 0.6) + 'px';
    vizElement.style.height = (screen.width * 0.4) + 'px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

}
