import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes-zoomed-in',
  templateUrl: './routes-zoomed-in.component.html',
  styleUrls: ['./routes-zoomed-in.component.scss']
})
export class RoutesZoomedInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var divElement = document.getElementById('viz1541544608251');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.minWidth = '750px';
    vizElement.style.maxWidth = '2000px';
    vizElement.style.minHeight = '400px';
    vizElement.style.maxHeight = '1200px';
    vizElement.style.width = (screen.width * 0.03) + 'px';
    vizElement.style.height = (screen.width*0.7) + 'px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

}
