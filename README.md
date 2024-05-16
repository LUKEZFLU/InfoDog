# iLease (INFO 490/491 Capstone)
⚠️ This repo will shift private after June 30 2024

## Project Description

Subletting is a common solution for University of Washington students struggling to cover high rents during breaks. However, finding suitable tenants often proves difficult. This financial pressure led our team to develop a reliable platform that connects UW leaseholders with potential tenants. Using detailed search filters, users can find properties that fit their needs and communicate directly with leaseholders. Simple listing instructions enable leaseholders to easily add their properties and manage tenant requests. Our platform offers an essential solution to the subleasing challenges faced by UW students and also helps those seeking short-term accommodation in the UW area.

## Features

- **Explore Listings**: Users can browse through a list of available rental properties, with options to view detailed pages for each listing.
- **Detailed Property View**: Each property has its own detailed page where users can see specifics such as images, amenities, price, and location.
- **Dynamic Filtering**: Users can filter properties based on criteria like location, price, room type, and more, with filters dynamically adjusting the viewable listings.
- **Interactive Property Images**: Each listing displays random images from a specified directory, giving a fresh look each time the properties are loaded.
- **Responsive Design**: Ensures that the application is accessible and functional across various devices and screen sizes.

## Installation

Clone the repository and install the dependencies to set up the project locally:

```
git clone https://github.com/LUKEZFLU/iLease.git
cd iLease
npm install
```

## Usage
After installation, you can run the server locally:

```
# To run the client side:
cd client
npm install
npm start

# To run the server side:
cd server
npm install
node index.js
```

## Technology Stack

- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Others:** Axios for API requests



Contact zefanl@uw.edu if you need any help!

Welcome to iLease!

Collaborators:
- Zefan Lu
- Fan Dai
- Kaidi Chen
- Zonglin Zuo
- Ziliang Huang

This Project is copyrighted by the above collaborators.


First start the server (port 3001): 
cd to the server directory, then: nodemon index.js

Then start the client (port 3000): 
cd to the client directory, then: npm start
