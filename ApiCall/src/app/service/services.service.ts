import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Injectable } from '@angular/core';


declare let toastr: any;
@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  suncess(message : string, title?:string)
  {
    toastr.success(message, title)
  }


  constructor() { }
}
