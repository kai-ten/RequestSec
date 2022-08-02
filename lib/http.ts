import { sanitize } from './util/sanitize';
import {
  AnalysisRequestBody,
  AnalysisResponse,
  submitForAnalysis,
} from './util/analyze';

export const processHttp = async (
  request: Object | string | undefined,
  response: Object | string | undefined
): Promise<AnalysisResponse> => {
  const sanitizedRequest = await sanitize(request);
  const sanitizedResponse = await sanitize(response);
  const analysisRequestBody: AnalysisRequestBody = new AnalysisRequestBody(
    sanitizedRequest,
    sanitizedResponse
  );

  return submitForAnalysis(analysisRequestBody);
};
