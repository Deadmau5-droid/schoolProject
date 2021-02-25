import { Component, OnInit } from '@angular/core';
import{DatashareService} from '../services/datashare.service'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
 userstate!:number;
  constructor(private datashare:DatashareService) { }

  ngOnInit(): void {
  this.datashare.currentMessage.subscribe((userstate)=>this.userstate=userstate)
  }

}
