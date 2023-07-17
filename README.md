# Jewelry Store Web Application


This web application for the Jewelry Store ensures a secure and user-friendly experience for customers. Users are required to log in with their credentials, and only authenticated users can access certain features. Admins have additional privileges to manage products and view order history from a separate dashboard. User passwords are encrypted for security, and the application gracefully handles errors. The design is responsive, allowing access from various devices.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Database](#database)

## Features

- User Registration and Login: Users can create an account and log in to access their profile and make purchases.
- Jewelry Collection: Users can browse and view a wide range of jewelry items.
- Search and Filter: Users can search for specific jewelry items and apply filters to refine their search.
- Shopping Cart: Users can add items to their shopping cart and proceed to checkout.
- Secure Payment: The application does not include a payment gateway but can be easily integrated with one.
- User Profile: Users can view and manage their profile information and order history.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/RashidHussain786/Khazana_Jewellers.git`
2. Navigate to the project directory: `cd jewelry`
3. Install the dependencies for the front end: `npm install`
4. Install the .NET Core SDK from https://dotnet.microsoft.com/download
5. Navigate to the backend directory: `cd backend`
6. Install the NuGet packages: `dotnet restore `

## Usage

1. Start the development server for the front end: `npm start `
2. Start the backend server: `dotnet run `
3. Open your web browser and go to: `http://localhost:3000`

## Technologies

The project uses the following technologies:

- Front-end: React.js, Material-UI
- Backend: .NET Core Web API, Microsoft SQL Server (Code First Approach)
  

## Database

The application uses Microsoft SQL Server for data storage. The database and its tables will be automatically created using the Code First approach when you run the application for the first time. The connection string can be configured in the `appsettings.json` file.

