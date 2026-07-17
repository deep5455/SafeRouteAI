# SafeRoute AI 🚨

A serverless emergency alert web application built using AWS Cloud.

## Features

- Get current user location
- Send emergency SOS alert
- Store incident details in Amazon DynamoDB
- Send real-time email alerts using Amazon SNS
- Serverless backend with AWS Lambda
- REST API using Amazon API Gateway
- Live frontend hosted with GitHub Pages

## Tech Stack

- HTML
- CSS
- JavaScript
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- Amazon SNS
- Git
- GitHub Pages

## Project Workflow

1. User enters Name, Phone Number and Emergency Message.
2. User clicks *Get Current Location*.
3. User clicks *SEND SOS*.
4. API Gateway sends the request to AWS Lambda.
5. Lambda stores the incident in DynamoDB.
6. Lambda publishes an alert to Amazon SNS.
7. Subscriber receives an emergency email.

## Live Demo

https://deep5455.github.io/SafeRouteAI/

## Author

Deep
