import {  animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
         transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'backgroundColor': 'blue',
         transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => highlighted', animate(300))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
         transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'backgroundColor': 'blue',
         transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'backgroundColor': 'green',
         transform: 'translateX(0px) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
     transition('highlighted => normal', animate(800)),
     transition('shrunken <=> *', [
       style({
         'background-color': 'orange'
       }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
     ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ]),
    ]),

    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes ([

          style({
            opacity: 0,
            offset: 0,
            transform: 'translateX(-100px)'
          }),
          style({
            opacity: 0.5,
            offset: 0.3,
            transform: 'translateX(-50px)'
          }),
          style({
            opacity: 1,
            offset: 0.8,
            transform: 'translateX(-20px)'
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ])
    ]),
  ]
})
export class AnimationComponent implements OnInit {

  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';
  wildState = 'normal'


  constructor() { }

  ngOnInit(): void {
  }

  animationStarted(event:any)
  {
    console.log(event);

  }
  animationEnded(event:any)
  {
   console.log(event);

  }


  onAdd(item: string) {
    this.list.push(item);
  }

  onDelete(item : string)
  {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate(){

    this.state == 'normal'? this.state='highlighted' : this.state='normal';
    this.wildState = 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }
  onShrink(){

    this.wildState ='shrunken'
  }

}
