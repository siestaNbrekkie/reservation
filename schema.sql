DROP DATABASE IF EXISTS reservations;
CREATE DATABASE reservations;

USE reservations;

LOAD DATA LOCAL INFILE '/Users/Faith/Documents/HRSF123/Immersive/FEC/reservations/database/unavailableDates.csv' 
INTO TABLE unavailable_dates FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n' 
IGNORE 1 ROWS 
(id, listingId, day, month, year);