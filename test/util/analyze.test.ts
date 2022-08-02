import axios from 'axios';
import {
  submitForAnalysis,
  AnalysisRequestBody,
  AnalysisResponse,
} from '../../lib/util/analyze';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('submitForAnalysis to forward the request on for processing', () => {
  describe('When API call is successful', () => {
    it('Should return a success response message', async () => {
      const analysisRequestBody: AnalysisRequestBody = new AnalysisRequestBody(
        'This is the request',
        'This is the response'
      );
      const analysisResponse: AnalysisResponse = new AnalysisResponse(
        200,
        'Success'
      );
      mockedAxios.post.mockResolvedValueOnce(analysisResponse);

      const submitResponse: AnalysisResponse = await submitForAnalysis(
        analysisRequestBody
      );
      expect(submitResponse).toMatchObject({
        statusCode: 200,
        statusMessage: 'Success',
      });
    });
  });

  describe('when API call fails', () => {
    it('should return a failure response message', async () => {
      const analysisRequestBody: AnalysisRequestBody = new AnalysisRequestBody(
        'This is the request',
        'This is the response'
      );
      const analysisResponse: AnalysisResponse = new AnalysisResponse(
        500,
        'Error'
      );
      mockedAxios.post.mockResolvedValueOnce(analysisResponse);

      const submitResponse: AnalysisResponse = await submitForAnalysis(
        analysisRequestBody
      );
      expect(submitResponse).toMatchObject({
        statusCode: 500,
        statusMessage: 'Error',
      });
    });
  });
});
