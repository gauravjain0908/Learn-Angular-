export class Application {
  apiResponseStatus!: boolean;
  apiResponseData!: ApiResponseData;
  status?: number;
}

export class ApiResponseData {
  apiResponseMessage!: string;
  attachmentUrl?: string;
  presignedURL?: string;
};
