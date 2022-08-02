const axios = require('axios').default;

export const submitForAnalysis = async (
  analysisRequestBody: AnalysisRequestBody
): Promise<AnalysisResponse> => {
  return await axios.post('http://localhost:3000/', analysisRequestBody);
};

export class AnalysisRequestBody {
  requestMessage = '';

  responseMessage = '';

  constructor(requestMessage: string, responseMessage: string) {
    this.requestMessage = requestMessage;
    this.responseMessage = responseMessage;
  }
}

export class AnalysisResponse {
  statusCode = -1;

  statusMessage: unknown = '';

  constructor(statusCode: number, statusMessage: unknown) {
    this.statusCode = statusCode;
    this.statusMessage = statusMessage;
  }
}
