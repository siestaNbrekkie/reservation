# Reservations Module

> This is the reservations module for a rental reservation web app created by siestaNbrekkie. Users are shown the price per night, rating and number of reviews of a specific listing. They then can browse through the calendar to choose dates for their stay, as well as add the number of guests to their booking. Considering the number of nights and fees, a total price is calculated, and users can click the reservation button, which prompts them to sign up to complete the booking.

This is a fullstack project, with a great focus on React for functionality and React styled components for styling. The backend is compromised of an Express server and MySQL as the datatbase, with Sequelize as the ORM.

## Preview of functionality
![reservation-gif](https://user-images.githubusercontent.com/41028186/85629928-951e6b80-b627-11ea-8697-50a3dbd92b05.gif)

## Table of Contents

1. [Features](#features)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Screenshots](#screenshots)
1. [Related Projects](#related-projects)

## Features
  * Check-in calendar
    - Calendar that starts on the month and year of the current date
    - Arrow buttons (left and right) to toggle between months where left arrow button is disabled for current month (cannot look at past months)
    - Dates before current date are crossed out and made unavailable so users cannot click past dates
    - On-hover effect over dates
    - Clicking on a date renders Checkout calendar for user to choose check out date
    - Check-in date appears inside Dates box in d/m/Y format
    - Close button at the bottom corner to close calendar; underlined upon hover
  * Checkout calendar
    - Upon clicking of check-in date, checkout calendar colours chosen check-in date
    - All dates after next unavailable date are crossed out to allow users to book consecutive available dates only
    - Dragged on-hover effect (multiple dates highlighted) between check-in date and current date hovered over
    - Check out date appears inside Dates box in d/m/Y format once chosen, and checkout calendar closes
    - Close button at the bottom corner to close calendar; underlined upon hover
    - Rendering of fees (includes calculation of nights) and total once check out date is clicked
  * Guest form drop down
    - Users can add guests upon click of '+' button for each type of guest
    - '-' button disabled for default number of guests so numbers do not reach negative
    - '+' button disabled when maximum number of guests are reached
    - Guests box updated with number of guests during button toggle
    - Close button at the bottom corner to close drop down; underlined upon hover
  * Reserve button
    - Sign up modal appears upon click, with options of using social media or email
    - 'X' button at the top corner to close modal

## Requirements
  * npm 6.10.x
  * Node 8.15.x
  * MySQL 5.7.x

## Development

### Installing Dependencies and running module locally

From within the root directory:

1. Install project dependencies

```sh
npm install
```

2. Create and seed MySQL database
```sh
npm run seed
```

3. Start server
```sh
npm start
```

Visit `http://localhost:3002/rooms/{listing_number}/` on your browser to view, where `{listing_number}` refers to any listing number between 1-100 inclusive.

## Screenshots

Screenshots of deployed service:

Initial
<img width="384" alt="initial" src="https://user-images.githubusercontent.com/41028186/85626686-44584400-b622-11ea-88bb-b423c479eef3.png">

Check-in calendar
<img width="389" alt="checkin" src="https://user-images.githubusercontent.com/41028186/85627051-ccd6e480-b622-11ea-9964-b2db54ede6e9.png">

Checkout calendar
<img width="389" alt="checkout" src="https://user-images.githubusercontent.com/41028186/85627131-e8da8600-b622-11ea-9004-5ee20e46f418.png">

Dates chosen and fees calculated
<img width="384" alt="calculated-fees" src="https://user-images.githubusercontent.com/41028186/85627179-fa239280-b622-11ea-8fd4-8e8ae0574b5a.png">

Adding guests
<img width="385" alt="add-guests" src="https://user-images.githubusercontent.com/41028186/85627303-2a6b3100-b623-11ea-9329-07f074d5ea7e.png">

Updated with number of guests
<img width="385" alt="include-guests" src="https://user-images.githubusercontent.com/41028186/85627378-3f47c480-b623-11ea-8f39-3f9477230f96.png">

Sign up modal
<img width="805" alt="modal" src="https://user-images.githubusercontent.com/41028186/85627462-62727400-b623-11ea-99ca-56305f2a3ca3.png">

Reservations GIF
![reservation-gif](https://user-images.githubusercontent.com/41028186/85629928-951e6b80-b627-11ea-8697-50a3dbd92b05.gif)

## Related Projects

https://github.com/siestaNbrekkie/image-carousel
https://github.com/siestaNbrekkie/reviews
https://github.com/siestaNbrekkie/calendar