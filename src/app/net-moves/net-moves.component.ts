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
    vizElement.style.width = '700px';
    vizElement.style.height = '550px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

}
