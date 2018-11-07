import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-net-moves',
  templateUrl: './net-moves.component.html',
  styleUrls: ['./net-moves.component.scss']
})
export class NetMovesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var divElement = document.getElementById('viz1541432731621');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = (screen.width * 0.4) + 'px';
    vizElement.style.height = (screen.height >  (screen.width * 0.75)) ? (screen.height * 0.8) + 'px' : (screen.width * 0.7) + 'px';
    vizElement.style.maxWidth = '1800px';
    vizElement.style.maxHeight = '500px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);


    var divElement2 = document.getElementById('viz1541562565478');
    var vizElement2 = divElement2.getElementsByTagName('object')[0];
    vizElement2.style.minWidth = '300px';
    vizElement2.style.maxWidth = '700px';
    vizElement2.style.minHeight = '277px';
    vizElement2.style.maxHeight = '577px';
    vizElement2.style.width = (screen.width * 0.4) + 'px';
    vizElement2.style.height = (screen.width*0.32) + 'px';
    var scriptElement2 = document.createElement('script');
    scriptElement2.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement2.parentNode.insertBefore(scriptElement2, vizElement2);
  }

}
