import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  opened$ = this.navService.state.asObservable();

  constructor(private navService: NavService) { }

  ngOnInit(): void {
  }

  toggle(){
    this.navService.toggle();
  }

}
