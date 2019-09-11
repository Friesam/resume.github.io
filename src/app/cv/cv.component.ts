import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // jQuery(document).ready(function(){
  //   jQuery('.skillbar').each(function(){
  //     jQuery(this).find('.skillbar-bar').animate({
  //       width:jQuery(this).attr('data-percent')
  //     },5000);
  //   });
  // });
}
