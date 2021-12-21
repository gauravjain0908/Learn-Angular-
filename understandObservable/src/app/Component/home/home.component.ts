import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

 private firstSubscription!: Subscription;

  constructor() { }


  ngOnInit(): void {

    // this.firstSubscription = interval(1000).subscribe(
    //   count =>{
    //   console.log(count);
    //   }
    // )

    const newObservable = new Observable((observer =>{
      let count = 0;
      setInterval(()=>{
        observer.next(count)
        if(count === 2)
        {
          observer.complete();
        }
        if(count > 3)
        {
          observer.error(new Error('Should not be Exceeded from 3'))
        }
        count++
      },1000)

    }))


      this.firstSubscription = newObservable.pipe(map(data =>{
        return 'Round '+ data;
      })).subscribe(data =>{
        console.log(data);
      }, error =>{
      console.log('This is Error Handling in Observer'+error);
      window.alert(error)
    }, () =>{
      console.log('Completed');
    })
  }
  ngOnDestroy(): void {

   this.firstSubscription.unsubscribe();
  }

}
function data(data: any, arg1: (number: any) => string): import("rxjs").OperatorFunction<unknown, unknown> {
  throw new Error('Function not implemented.');
}

