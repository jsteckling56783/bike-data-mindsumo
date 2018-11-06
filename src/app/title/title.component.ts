import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title;
  @Input() subTitle;
  @Input() subTitle2;

  constructor() { }

  ngOnInit() {
  }

}
