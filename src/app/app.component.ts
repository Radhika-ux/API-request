import { Component, OnInit } from '@angular/core';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'get_methodcode';

  constructor( private api: SharedService){}

  ngOnInit(): void {
    
  }

  
 
}
