import { Component } from '@angular/core';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.scss']
})
export class NavebarComponent {
  dropdown =false
  notif =false
  navHide =false
options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  chartt!:ApexCharts


  constructor(){

  }
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

//  this.chartt = new ApexCharts(document.querySelector("#chart"), this.options);

// chart.render();


}
