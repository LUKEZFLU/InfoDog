# iLease (INFO 490/491 Capstone)
⚠️ This repo will shift private after June 30 2024

## Project Description

Subletting is a common solution for University of Washington students struggling to cover high rents during breaks. However, finding suitable tenants often proves difficult. This financial pressure led our team to develop a reliable platform that connects UW leaseholders with potential tenants. Using detailed search filters, users can find properties that fit their needs and communicate directly with leaseholders. Simple listing instructions enable leaseholders to easily add their properties and manage tenant requests. Our platform offers an essential solution to the subleasing challenges faced by UW students and also helps those seeking short-term accommodation in the UW area.

## Features (Scope)

- **Explore Listings**: Users can browse through a list of available rental properties, with options to view detailed pages for each listing.
- **Detailed Property View**: Each property has its own detailed page where users can see specifics such as amenities, price, and location.
- **Dynamic Filtering**: Users can filter properties based on criteria like location, price, room type, and more, with filters dynamically adjusting the viewable listings.
- **Contact Request**: Tenant able to request to get in contact with the leaseholder for more information if they're interested in that place. And leaseholder can reject or accept the request.
- **Profile**: User can update their personal information for better reach.

## Functionality: 

This is a local version, please follow the instructions below to install and test this site:


### Installation

Clone the repository and install the dependencies to set up the project locally:

Open your terminal, make sure you are on the directory you want.

```
# Clone this repo
git clone https://github.com/LUKEZFLU/iLease.git
```

### Usage
After installation, you can run this site locally:

```
# get into the iLease directory
cd iLease
```
Start the server - port 3001
```
cd server
npm install
node index.js
```
Start the client site - port 3000(cd back to the iLease directory)
```
cd client
npm install
npm start
```

Visit "http://localhost:3000/" to see the site.

## Technology Stack

- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Others:** Axios for API requests

## Usability

To cater to our target audience, our platform’s usability is based on three major aspects: Intuitive Navigation, Privacy, and accessibility. By ensuring the layout is logical and easy to use, users can effortlessly find/post listings. Additionally, we incorporate accessibility features like high-contrast visuals to ensure our platform is inclusive for users with disabilities. Lastly, we emphasize privacy, users must register and verify using institutional email for full feature access and contact information will be shared only when both parties agree.

## Utility/User Validation: 
1. The explore section of our platform offers a sophisticated search experience with highly functional filters to help users find properties that match their specific needs. Users can refine their search by particular features, ensuring they find the most suitable options.
2. The 'List Your Place' section guides users through a streamlined process for providing essential details about their rentals. Clear instructions ensure leaseholders can easily and accurately complete the necessary information regarding their properties. Users can also review their property information on the profile page.
3. In consideration of convenience and protection of user privacy, the contact request button on the detail page allows users to connect with leaseholders directly by sending a notification. Leaseholders can view these requests on their profile page and decide whether to accept them. 
4. To address concerns about reliability and security, tenants are required to verify their identities through institutional emails. UW student leaseholders must verify their identities using their UW emails, ensuring a secure and trustworthy subleasing platform.


## Next steps
1. We are going to put a closing mark (a text box or something like a pop-up window) on our website homepage on June 1. We will also manually send email alerts to every user who registered an account with us (We will leave them a team member email if they have further questions).
2. All the collected survey data will be removed from our team's Google Drive on June 10. All the team members are responsible for deleting their local copies.
3. Main closing date: June 15, 10 pm PST, the MongoDB database will be closed. (If we publish our website at a later stage this quarter, this date will also be the closing date for the website and Azure server).
4. The git repository will be shifted to a private repo on the date June 30. (We view these codes as our private assets and may have a future use purpose)


## Contributors:
- Zefan Lu (zefanl@uw.edu)
- Fan Dai (daif2@uw.edu)
- Kaidi Chen (kaidic@uw.edu)
- Zonglin Zuo (zonglz2@uw.edu)
- Ziliang Huang (zlhuang@uw.edu)

**This Project is copyrighted by the above collaborators.**
