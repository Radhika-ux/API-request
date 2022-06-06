import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/apiservice/api.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit {

  user_list: any;
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.userDetails();


  }
  userDetails() {

    this.api.getUserData().subscribe((response: any) => {
      console.log(response.data);
      this.user_list= response.data;
      console.log(this.user_list);
    })
  }
}
