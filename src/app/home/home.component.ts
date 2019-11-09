import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  slides = [
    {img: "assets/images/slide-1.jpg"},
    {img: "assets/images/slide-1.jpg"},
    {img: "assets/images/slide-1.jpg"},
    {img: "assets/images/slide-1.jpg"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay": true};
  ngOnInit() {
  }

}
