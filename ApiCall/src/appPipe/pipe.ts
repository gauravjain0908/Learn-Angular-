import { Pipe, PipeTransform } from "@angular/core";
import {NgModule} from '@angular/core'

@Pipe ({
name : 'myPipe'
})
export class MyPipe implements PipeTransform{

  transform(value: any)
  {
    console.log(value);

  }

}
