import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavService} from '../nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor(public navService: NavService) {}

  ngOnInit(): void {
  }

  toogleNav(){
    this.navService.toggle();
  }

  backClick(){
    window.history.back();
  }
}
