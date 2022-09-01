import { Component, OnInit } from '@angular/core';
import { LocationList } from 'src/app/models/Constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public selectedCity = 'pune'
  public locationList = LocationList;
  constructor() { }

  ngOnInit(): void {
  }

}
