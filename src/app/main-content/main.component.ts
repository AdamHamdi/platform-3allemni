import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  dropdown =false
  notif =false
  navHide =false
  
  ngOnInit(){
    console.log('hrhrhh');
    
  }
  
  isDropdown(){ 
      this.dropdown =!this.dropdown 
       
  }
  isNotified(){ 
    this.notif =this.notif 
    this.dropdown =!this.dropdown 
  }
  isNavhide(){ 
    this.navHide =!this.navHide 
     
}
}
