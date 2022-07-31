# RequestSec

RequestSec by CyberVISOR is the first library to monitor network connections at the most critical layer, the application. 
We can identify and stop threats in real-time with our proprietary analysis platform. 


pnpm

The goal:

Program:
- Code coverage 
- Async library, non-blocking
- Intercept incoming request and stringify the data (headers, body, etc)
- Intercept outgoing response and stringify
- Receive the data from the source as a string, must be a call in the parent library

- Look for malicious signs in the payload
    - Use honeypot
- Provide a way to
- Allow for async or sync

Functionality:
1. Receive the http request as a string
2. Send data to a lambda (this can then target kafka, a database, S3, etc)
    1. https://stackoverflow.com/questions/57105918/push-messages-from-aws-lambda-to-kafka


Content:

Lambda exploits
- https://medium.com/r3d-buck3t/vulnerable-lambda-leaks-aws-account-information-c613837377ad

Http Request
https://www.researchgate.net/figure/Examples-of-malicious-HTTP-requests-received-and-their-description_tbl7_320476110
- Must track malicious bots names
- Track signatures
- Track usernames / admin
- Track system calls


Terraform the lambda
- This will be how it can get stood up in house

Targets:
- AWS Lambda
- Kafka
- Syslog
- 