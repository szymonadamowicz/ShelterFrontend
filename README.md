
# Shelter Finder App

This project is a React application for a shelter adoption service, designed to help users find and adopt pets. The application includes features such as browsing available pets, viewing detailed information about specific pets, navigating shelters on a map, and searching for both pets and shelters. It uses React Router for navigation, Axios for backend requests, and Material UI for consistent design.
## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)

## Demo

You can see a live version of the Shelter Adoption App at [Shelter Finder](https://shelter-frontend-two.vercel.app).

## Features

- **Home Page**: A welcoming page that displays the shelter's mission, with a carousel of images showing adoptable animals.
- **Adoption Page**: View a list of available animals, with filtering and pagination. Clicking on a pet leads to a detailed view of that animal, where users can learn more about the pet and the shelter that houses it.
- **Map**: A map interface to display shelter locations, allowing users to explore shelters geographically.
- **Shelters Page**: Displays a list of shelters, where users can search and navigate to specific shelters for more information.
- **Pagination and Search**: Paginated views for animals and shelters, with integrated search functionality for better user experience.

## Technologies

- **React**: Frontend framework used for building the user interface.
- **React Router**: For handling routes and navigation between pages.
- **TypeScript**: Provides type safety for JavaScript code.
- **Axios**: For making API requests to the backend to fetch animal and shelter data.
- **Material UI**: A UI component library used for styling the components.
- **Leaflet**: For displaying and interacting with the map.
- **Slick Carousel**: Used for the image carousel on the home page.
- **React Testing Library & Jest**: For writing unit and integration tests.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/shelter-adoption-app.git
   cd shelter-adoption-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application locally:

   ```bash
   npm start
   ```

4. Open the application in the browser:

   ```
   http://localhost:3000
   ```

## Usage

### Home Page

- Displays a carousel of images of pets available for adoption.
- Presents information about the shelter's mission and purpose.

### Adoption Page

- Shows a paginated list of animals available for adoption.
- Users can click on each animal to get more detailed information about the pet, including a picture and description.

### Map

- Interactive map displaying the locations of shelters.
- Users can click on the map markers to view shelter information and navigate to their websites.

### Shelters

- A searchable list of shelters.
- Allows users to explore shelters and see which animals are currently available.

## API Integration

This app relies on an external API (set up using Axios in `useSheltersAndPets.ts`) to fetch data for shelters and pets. The backend provides endpoints for retrieving:

- `GET /shelters` - Retrieves a list of all shelters, including details like name, location, and available pets.
- `GET /pets` - Fetches the animals that are available for adoption, including information such as name, species, description, and shelter details.
