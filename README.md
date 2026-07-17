# 🚨 SafeRoute AI

SafeRoute AI is a serverless emergency alert web application built using AWS Cloud services. It allows users to send an emergency SOS with their live location, stores the incident in Amazon DynamoDB, and sends an instant email alert using Amazon SNS.

## 🌐 Live Demo

https://deep5455.github.io/SafeRouteAI/

---

## ✨ Features

- 📍 Get Current Location
- 🚨 Send Emergency SOS
- ☁️ AWS Lambda Backend
- 🌐 Amazon API Gateway
- 🗄️ Amazon DynamoDB Storage
- 📧 Amazon SNS Email Alerts
- 💻 GitHub Pages Deployment

---

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- Amazon SNS
- Git
- GitHub
- GitHub Pages

---

## 📸 Screenshots

### Home Page

![Home](images/home.png)

### Email Alert

![Email Alert](images/email-alert.png)

### DynamoDB Record

![DynamoDB](images/dynamodb.png)

---

## 🔄 Project Workflow

1. User enters Name, Phone Number and Emergency Message.
2. User clicks *Get Current Location*.
3. User clicks *Send SOS*.
4. API Gateway sends the request to AWS Lambda.
5. Lambda stores the incident in Amazon DynamoDB.
6. Lambda publishes an alert to Amazon SNS.
7. User receives an emergency email alert.

---

## 👨‍💻 Author

Deepak Thakur
