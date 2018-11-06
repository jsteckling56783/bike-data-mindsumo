import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributions',
  templateUrl: './distributions.component.html',
  styleUrls: ['./distributions.component.scss']
})
export class DistributionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    var divElement3 = document.getElementById('viz1541540789842');
    var vizElement3 = divElement3.getElementsByTagName('object')[0];
    vizElement3.style.minWidth = '900px';
    vizElement3.style.maxWidth = '2000px';
    vizElement3.style.width = (screen.width * 0.95) + '';   
    vizElement3.style.minHeight = '527px';
    vizElement3.style.maxHeight = '827px';
    vizElement3.style.height = (screen.width * 0.4) + '';
    var scriptElement3 = document.createElement('script');
    scriptElement3.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement3.parentNode.insertBefore(scriptElement3, vizElement3);

    var divElement2 = document.getElementById('viz1541540377649');
    var vizElement2 = divElement2.getElementsByTagName('object')[0];
    vizElement2.style.minWidth = '900px';
    vizElement2.style.maxWidth = '2000px';
    vizElement2.style.width = (screen.width * 0.95) + '';
    vizElement2.style.minHeight = '527px';
    vizElement2.style.maxHeight = '827px';
    vizElement2.style.height = (screen.width * 0.4) + '';
    var scriptElement2 = document.createElement('script');
    scriptElement2.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement2.parentNode.insertBefore(scriptElement2, vizElement2);

   
    var divElement = document.getElementById('viz1541536009019');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.minWidth = '900px';
    vizElement.style.maxWidth = '2000px';
    vizElement.style.width = (screen.width * 0.95) + '';
    vizElement.style.minHeight = '527px';
    vizElement.style.maxHeight = '1027px';
    vizElement.style.height = (screen.width * 0.4) + '';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

}
