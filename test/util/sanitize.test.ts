import { sanitize } from '../../lib/util/sanitize';
import requestJson from '../assets/request.json';

describe('Sanitize should stringify objects and escape HTML characters in strings', () => {
  it('Stringifies & escapes a JSON object upon initialization', async () => {
    const jsonObject: Object = requestJson;
    await sanitize(jsonObject).then(secureString => {
      /* eslint-disable */
      expect(secureString).toBe('{&quot;message&quot;:&quot;Go Serverless v3.0! Your function executed successfully!&quot;,&quot;input&quot;:{&quot;body&quot;:null,&quot;cookies&quot;:[&quot;JSESSIONID.bf7f5c61=node01di5dhzjaqrjb12nn5v1xpokc72.node0&quot;,&quot;screenResolution=1920x1080&quot;,&quot;JSESSIONID.51b9cb22=node01630t3fufp9ko1mdwyhs5evq572.node0&quot;,&quot;XSRF-TOKEN=910bsb7apj5fpsti6q4pp7q27v&quot;,&quot;JWT-SESSION=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJBWUpIZGU5amJGdnlGLVVhSHQ3XyIsInN1YiI6ImFkbWluIiwiaWF0IjoxNjU5MDU2Mjg3LCJleHAiOjE2NTkzMTU0ODcsImxhc3RSZWZyZXNoVGltZSI6MTY1OTA1NjI4NzIzMSwieHNyZlRva2VuIjoiOTEwYnNiN2FwajVmcHN0aTZxNHBwN3EyN3YifQ.GfBXyDyxWteRZhMwCGbNkm3h2rJ3UwNSf2HvdS2Ibsk&quot;],&quot;headers&quot;:{&quot;host&quot;:&quot;localhost:3000&quot;,&quot;connection&quot;:&quot;keep-alive&quot;,&quot;cache-control&quot;:&quot;max-age=0&quot;,&quot;sec-ch-ua&quot;:&quot;&#x5C;&quot;.Not&#x2F;A)Brand&#x5C;&quot;;v=&#x5C;&quot;99&#x5C;&quot;, &#x5C;&quot;Google Chrome&#x5C;&quot;;v=&#x5C;&quot;103&#x5C;&quot;, &#x5C;&quot;Chromium&#x5C;&quot;;v=&#x5C;&quot;103&#x5C;&quot;&quot;,&quot;sec-ch-ua-mobile&quot;:&quot;?0&quot;,&quot;sec-ch-ua-platform&quot;:&quot;&#x5C;&quot;macOS&#x5C;&quot;&quot;,&quot;upgrade-insecure-requests&quot;:&quot;1&quot;,&quot;user-agent&quot;:&quot;Mozilla&#x2F;5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit&#x2F;537.36 (KHTML, like Gecko) Chrome&#x2F;103.0.0.0 Safari&#x2F;537.36&quot;,&quot;accept&quot;:&quot;text&#x2F;html,application&#x2F;xhtml+xml,application&#x2F;xml;q=0.9,image&#x2F;avif,image&#x2F;webp,image&#x2F;apng,*&#x2F;*;q=0.8,application&#x2F;signed-exchange;v=b3;q=0.9&quot;,&quot;sec-fetch-site&quot;:&quot;none&quot;,&quot;sec-fetch-mode&quot;:&quot;navigate&quot;,&quot;sec-fetch-user&quot;:&quot;?1&quot;,&quot;sec-fetch-dest&quot;:&quot;document&quot;,&quot;accept-encoding&quot;:&quot;gzip, deflate, br&quot;,&quot;accept-language&quot;:&quot;en-US,en;q=0.9&quot;,&quot;cookie&quot;:&quot;JSESSIONID.bf7f5c61=node01di5dhzjaqrjb12nn5v1xpokc72.node0; screenResolution=1920x1080; JSESSIONID.51b9cb22=node01630t3fufp9ko1mdwyhs5evq572.node0; XSRF-TOKEN=910bsb7apj5fpsti6q4pp7q27v; JWT-SESSION=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJBWUpIZGU5amJGdnlGLVVhSHQ3XyIsInN1YiI6ImFkbWluIiwiaWF0IjoxNjU5MDU2Mjg3LCJleHAiOjE2NTkzMTU0ODcsImxhc3RSZWZyZXNoVGltZSI6MTY1OTA1NjI4NzIzMSwieHNyZlRva2VuIjoiOTEwYnNiN2FwajVmcHN0aTZxNHBwN3EyN3YifQ.GfBXyDyxWteRZhMwCGbNkm3h2rJ3UwNSf2HvdS2Ibsk&quot;},&quot;isBase64Encoded&quot;:false,&quot;pathParameters&quot;:null,&quot;queryStringParameters&quot;:null,&quot;rawPath&quot;:&quot;&#x2F;&quot;,&quot;rawQueryString&quot;:&quot;&quot;,&quot;requestContext&quot;:{&quot;accountId&quot;:&quot;offlineContext_accountId&quot;,&quot;apiId&quot;:&quot;offlineContext_apiId&quot;,&quot;authorizer&quot;:{&quot;jwt&quot;:{}},&quot;domainName&quot;:&quot;offlineContext_domainName&quot;,&quot;domainPrefix&quot;:&quot;offlineContext_domainPrefix&quot;,&quot;http&quot;:{&quot;method&quot;:&quot;GET&quot;,&quot;path&quot;:&quot;&#x2F;&quot;,&quot;protocol&quot;:&quot;HTTP&#x2F;1.1&quot;,&quot;sourceIp&quot;:&quot;127.0.0.1&quot;,&quot;userAgent&quot;:&quot;Mozilla&#x2F;5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit&#x2F;537.36 (KHTML, like Gecko) Chrome&#x2F;103.0.0.0 Safari&#x2F;537.36&quot;},&quot;requestId&quot;:&quot;offlineContext_resourceId&quot;,&quot;routeKey&quot;:&quot;GET &#x2F;&quot;,&quot;stage&quot;:&quot;$default&quot;,&quot;time&quot;:&quot;31&#x2F;Jul&#x2F;2022:13:17:44 -0400&quot;,&quot;timeEpoch&quot;:1659287864820},&quot;routeKey&quot;:&quot;GET &#x2F;&quot;,&quot;stageVariables&quot;:null,&quot;version&quot;:&quot;2.0&quot;},&quot;type&quot;:&quot;object&quot;}');
      /* eslint-enable */
    });
  });

  it('Accepts a string and escapes characters < > & " /', async () => {
    const string = 'This is a test < > & " /';
    await sanitize(string).then(secureString => {
      expect(secureString).toBe('This is a test &lt; &gt; &amp; &quot; &#x2F;');
    });
  });

  it('Does not accept an integer and returns empty string', async () => {
    const int = 17;
    await sanitize(int).then(secureString => {
      expect(secureString).toBe('');
    });
  });

  it('Handles undefined input and returns empty string', async () => {
    const undef = undefined;
    await sanitize(undef).then(secureString => {
      expect(secureString).toBe('');
    });
  });
});
