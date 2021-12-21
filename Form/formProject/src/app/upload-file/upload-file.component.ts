import { RequestService } from './../request.service';
import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {


  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file : File; // Variable to store file
  selectedFiles : FileList;
  containsAttachments! : boolean;

  reqService: any ;
  myFiles = [];
  // Inject service
    constructor( private request: RequestService,  private fileUploadService: FileService) { }

    ngOnInit(): void {
      this.reqService = this.request.reqData;
    }

    // On file Select
    // onChange(event:any) {
    //     this.file = event.target.files[0];
    // }

  getFileDetails(e: any) {
    this.selectedFiles = e.target.files;
    console.log(this.selectedFiles);
  }


  uploadFiles() {
    const frmData = new FormData();
    {
      console.log(this.selectedFiles);
      frmData.append('fileUpload', this.selectedFiles);
    }

  }


    //     this.fileUploadService.upload(this.file).subscribe(
    //         (event: any) => {
    //             if (typeof (event) === 'object') {
    //                 // Short link via api response
    //                 this.shortLink = event.link;

    //                 this.loading = false; // Flag variable
    //             }
    //         }
    //     );
    // }
}

function selectedFile(arg0: string, selectedFile: any) {
  throw new Error('Function not implemented.');
}

