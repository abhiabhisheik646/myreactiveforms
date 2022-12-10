import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  conditionview = true;
  isNewUser= true;
  clickMessage= "";
  databind = ' ';
  displayname=true;
  displaynameblocked=false;
  titlecase="the best titlecase pipes";
  longText="excfgvhb jnklkjhbvcx  ezwexrcvbnklbvtr esrtybun";
  condition=true
  public colurs=['red','blue','greeen','yellow']
  
  database = {
    Name: 'Foo Bar',
    age:'20',
    address:[{
      village:'mallasandram',
      state:'tamilnadu',
    }]
    
    // fields: [
    //     {field: "F1", value: "1F"},
    //     {field: "F2", value: "2F"},
    //     {field: "F3", value: "3F"}
    // ]
};
  isLoggedIn = true;
  
  clicked(){
    console.log(" console clicked function",this.databind);
    console.log(this.databind.length)
    alert("did you want log in")
  }
  onclick1(){
    this.clickMessage= 'click 1';
  }
  onclick(){
    this.clickMessage ='click 2';
  }

  ngOnInit(): void {
    console.log(this.colurs)
  }
}
