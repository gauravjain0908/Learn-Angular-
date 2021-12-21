import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 appStatus = new Promise((resolve , reject) =>{

  setTimeout(()=>{
    resolve('stable')
  },2000)

 })

  Servers = [
    {
      instanceType: 'small',
      name: 'Production Server',
      status: 'online',
      started: new Date(15,1,2019)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(25,4,2029)
    },
    {
      instanceType: 'small',
      name: 'Testing Server',
      status: 'online',
      started: new Date(5,2,2039)
    },
    {
      instanceType: 'small',
      name: 'Environment Server',
      status: 'offline',
      started: new Date(25,1,2019)
    },
  ];

  filteredStatus = '';
  getStatusClasses(server: {instanceType: string, name: string, status:string,
    started: Date})
    {
      return {
        'list-group-item-success': server.status === 'stable',
        'list-group-item-warning': server.status === 'offline',
        'list-group-item-danger': server.status === 'critical'
      }
    }

    onAddServer()
    {
      this.Servers.push({
        instanceType: 'small',
        name: 'New Server',
        status: 'online',
        started: new Date(15,1,2017)
      })
    }
}
