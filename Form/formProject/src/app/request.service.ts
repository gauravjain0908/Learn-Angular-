import { Application, ApiResponseData } from './model/dus.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  constructor(private http: HttpClient) { }

  url = "https://ko66vn7e2d.execute-api.ap-southeast-1.amazonaws.com/dus/api/blockchain/create-request"

  reqData = {

    appFormId: "7b10bd7d-6149-4523-a30e-b96e1e61a1fa",
    countryCode: "mm",
    irn: "XA_777188199",
    breedersReference: "RF_XX197",
    status: "NEW",
    applicationNumber: "DIG4846XB",
    dateCreation: "2021-10-11",
    dateStatusChange: "2021-10-11",
    requestingPvpOffice: "mm",
	  reportLanguage: "English",
    reportOwner: "jp",
    sourceDomain: "Initial domain",
    officeCode: "mm",
    dusConductor: "jp",
    reasonText: "OTHER_RESN",
    botanicalName: "botanical1",
    denomination: "denom1",
    linkedReportId: "RR-2021-01-YY394",
    authority: "mm",
    attachmentMetaData: {
        attachmentsCount: 2,
        attachmentsName: ["tq.pdf","application.xml"],
        zipSize: 510759,
        zipName: "patent.zip"
    }
  }

  getPostData()
  {
    // this.reqData.appFormId = this.appFormID;
    // this.reqData.breedersReference = this.BreederReference;
    // this.reqData.irn = this.Irn;
    return this.http.post(this.url, this.reqData);
  }

  getUploadUrl(reqData:any, file: any, containsAttachment?: boolean) {

    const url='';

    // if(containsAttachment) {
    //   return this.http.post(url, reqData).pipe(mergeMap((responseData: Application) =>{
    //     if(responseData.apiResponseStatus) {
    //       return this.http.put<any>(responseData.apiResponseData.attachmentUrl, file, {observe: 'response'});
    //   }
    //   }))

    }
  }
