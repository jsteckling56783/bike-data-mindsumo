import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations-zoomed-out',
  templateUrl: './locations-zoomed-out.component.html',
  styleUrls: ['./locations-zoomed-out.component.scss']
})
export class LocationsZoomedOutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var divElement = document.getElementById('viz1541492048884');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.minWidth = '750px';
    vizElement.style.maxWidth = '2000px';
    vizElement.style.width = '100%';
    vizElement.style.minHeight = '400px';
    vizElement.style.maxHeight = '1200px';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

}
