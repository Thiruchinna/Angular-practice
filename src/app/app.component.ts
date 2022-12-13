import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'MyProject';
  subTitle = 'properties';
  showMsg = true;
  switchValue = 2;

  users = [
    { userId: 10, firstName: 'Thiru'},
    { userId: 20, firstName: 'Srivani'},
    { userId: 30, firstName: 'Madhu'},
    { userId: 50, firstName: 'Srimathi'},
    { userId: 80, firstName: 'Naresh'},
    { userId: 100, firstName: 'prashi'}
    
  ];

  clsName = 'one';
  clsName2 = 'two';
  empNum = 100;
  colorVal = 'red';
  colVal =2;
  cityname ='Hyderabad';
  


  placeholderVal = 'Enter value';
  hrefVal = 'https://www.google.co.in';
  updateLink ='https://www.oracle.com/in';

  showAlert(){
    alert('Hello event binding');
  }


  

  emps = [
          { empId: 1432, empName: 'srimathi'},
          { empId: 1433, empName: 'madhu'},
          { empId: 1434, empName: 'srivani'},
          { empId: 1435, empName: 'thiru'},
          { empId: 1436, empName: 'anjali'},
          { empId: 1437, empName: 'priyanka'},
          { empId: 1430, empName: 'sandhya'},
          { empId: 1431, empName: 'Naresh'}
    
  ];

  team = {
    teamNum: 3,
    firstName: 'srimathi',
    lastName: 'page',
    DOB: '12/10/1999',
    salary: '10000.461'
  }
  employers = [{
    employerfirstName: 'srivani',
    city: 'INDIA',
    cityCode: 'IN'
  },
  {
    employerfirstName: 'madhu',
    city: 'USA',
    cityCode: 'US'
  },
  {
    employerfirstName: 'thiru',
    city: 'CANADA',
    cityCode: 'CA'
  }];

 
  
  consoleLog() {
    console.log('From the input focus event');
  }
  readcityname(){
    console.log(this.cityname);
  }
}
    


  

  

