import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sidescroll',
  templateUrl: './sidescroll.component.html',
  styleUrls: ['./sidescroll.component.scss']
})
export class SidescrollComponent implements OnInit {

  @Input() scrollText;
  @Input() isTableau: boolean;
  @Input() imgSrc;
  @Input() isFullScreen: boolean;
  @Input() uuid: string = 'huhhhhh'; //UUID class would be used but package issues arose

  vizUuid: string ;


  constructor() { }

  ngOnInit() {
    var divElement = document.getElementById('viz1541532816213');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '110%';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
}
