import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passholder',
  templateUrl: './passholder.component.html',
  styleUrls: ['./passholder.component.scss']
})
export class PassholderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
    var divElement = document.getElementById('viz1541533814812');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.minWidth = '500px';
    vizElement.style.maxWidth = '800px';
    vizElement.style.width = (0.5 * screen.width) + 'px';
    vizElement.style.height = '200px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);


  
    var divElement2 = document.getElementById('viz1541534301544');
    var vizElement2 = divElement2.getElementsByTagName('object')[0];
    vizElement2.style.minWidth = '500px';
    vizElement2.style.maxWidth = '800px';
    vizElement2.style.width = (0.5 * screen.width) + 'px';
    vizElement2.style.height = '400px';
    var scriptElement2 = document.createElement('script');
    scriptElement2.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement2.parentNode.insertBefore(scriptElement2, vizElement2);


/*     var divElement2 = document.getElementById('viz1541528211508');
    var vizElement2 = divElement2.getElementsByTagName('object')[0];
    vizElement.style.minWidth = '500px';
    vizElement.style.maxWidth = '800px';
    vizElement2.style.width = (0.5 * screen.width) + 'px';
    vizElement2.style.height = '500px';
    var scriptElement2 = document.createElement('script');
    scriptElement2.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement2.parentNode.insertBefore(scriptElement2, vizElement2); */

  }

}
