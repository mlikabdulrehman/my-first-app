import { Component, HostListener, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MyserviceService } from './myservice.service';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces:true
})
export class AppComponent {
  title = 'My Angular App';
  /*constructor(@Inject(MyserviceService)myserviceService)
  {
    console.log(myserviceService);
    console.log('Hi, This is Component!');
  }*/
  /*@HostListener('click',['$event'])
  onhostclick(event:Event)
  {
    alert("You Clicked Me!")
  }*/
  /*this code show event when cursor is placed on text..
  @HostListener('mouseover',['$event'])
  onhostclick(event:Event)
  {
    alert("You Clicked Me!")
  }*/
  btnclick()
  {
    alert("You Clicked Me Using Component Directives!")
  }
  checkngIf=true;
  isvalid:boolean=true;
  changevalue(valid: boolean)
  {
    this.isvalid=valid;
  }
  public choose='';
  setvalue(drp:any)
  {
    this.choose=drp.target.value;
  }
  Students:any[]=
  [
    {
      'name':'Malik Abdul Rehman'
    },
    {
      'name':'Ameer Hamza'
    },
    {
      'name':'Sheikh Kashir'
    },
    {
      'name':'M Ali'
    },
    {
      'name':'Imran Jutt'
    }
  ]
  student:any[];
  constructor()
  {
    this.student=[
      {
       studentid:1,
       name:'Malik Abdul Rehman',
       gender:'Male',
       age:19,
       Course:'BSCS'
      },
      {
        studentid:2,
        name:'Ameer Hamza',
        gender:'Male',
        age:20,
        Course:'BSCS'
       },
       {
        studentid:3,
        name:'Kashir Ali',
        gender:'Male',
        age:18,
        Course:'BSCS'
       },
       {
        studentid:4,
        name:'Imran Jutt',
        gender:'Male',
        age:20,
        Course:'BSCE'
       },
       {
        studentid:5,
        name:'M Ali',
        gender:'Male',
        age:17,
        Course:'BSSE'
       }
    ];
  }
  getmorestudents():void{
    this.student=[
      {
       studentid:1,
       name:'Malik Abdul Rehman',
       gender:'Male',
       age:19,
       Course:'BSCS'
      },
      {
        studentid:2,
        name:'Ameer Hamza',
        gender:'Male',
        age:20,
        Course:'BSCS'
       },
       {
        studentid:3,
        name:'Kashir Ali',
        gender:'Male',
        age:18,
        Course:'BSCS'
       },
       {
        studentid:4,
        name:'Imran Jutt',
        gender:'Male',
        age:20,
        Course:'BSCE'
       },
       {
        studentid:5,
        name:'M Ali',
        gender:'Male',
        age:17,
        Course:'BSSE'
       },
       {
        studentid:6,
        name:'Saqib',
        gender:'Male',
        age:19,
        Course:'MBA'
       },
       {
        studentid:7,
        name:'M Ahmad',
        gender:'Male',
        age:20,
        Course:'BSCS'
       },
       {
        studentid:8,
        name:'M Yahya',
        gender:'Male',
        age:23,
        Course:'BSCS'
       }
    ];
  }
  trackbystudentid(index:number, student:any):string{
    return student.studentid;
  }
}
