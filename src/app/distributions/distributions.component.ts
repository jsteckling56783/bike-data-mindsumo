import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributions',
  templateUrl: './distributions.component.html',
  styleUrls: ['./distributions.component.scss']
})
export class DistributionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

   
    var divElement = document.getElementById('viz1541536009019');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.minWidth = '900px';
    vizElement.style.maxWidth = '2000px';
    vizElement.style.width = (screen.width * 0.95) + '';
    vizElement.style.minHeight = '527px';
    vizElement.style.maxHeight = '1027px';
    vizElement.style.height = (screen.width * 0.45) + '';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

}
