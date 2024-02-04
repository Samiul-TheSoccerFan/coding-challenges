/***

We have a list of drivers who drives for a generic company with their next trip information. Our goal is to write some queries 
to get some insights on the data. Each query will have one function and can have multiple supporting functions if needed.

Here is what looks like a driver object

{
  id: id of the driver
  first_name: first name of the driver
  last_name: last name of the driver
  start_time: time when the trip starts; time is in timestamp for easier representation
  duration: duration of the trip in minutes
  isInternational: boolean value if the trip is domestic or international
  cargo_types: types of cargo the trip is involved
}

*/


const listOfDrivers = [
  {
    id: 1001,
    first_name: 'Tony',
    last_name: 'Stark',
    start_time: 1707090842,
    duration: 45,
    isInternation: false,
    cargo_types: ['parcels', 'goods'],
  },
  {
    id: 1002,
    first_name: 'Thor',
    last_name: 'Odison',
    start_time: 1707090842,
    duration: 21650,
    isInternation: true,
    cargo_types: ['furniture', 'car', 'parcels'],
  },
  {
    id: 1003,
    first_name: 'Jack',
    last_name: 'Peralta',
    start_time: 1707090842,
    duration: 45,
    isInternation: true,
    cargo_types: ['car', 'parcels', 'goods'],
  },
  {
    id: 1004,
    first_name: 'Phil',
    last_name: 'Dunphy',
    start_time: 1707090842,
    duration: 145,
    isInternation: false,
    cargo_types: ['furniture', 'car', 'goods'],
  },
  {
    id: 1005,
    first_name: 'Thanos',
    last_name: 'Dione',
    start_time: 1707090842,
    duration: 45,
    isInternation: false,
    cargo_types: ['goods'],
  },
  {
    id: 1006,
    first_name: 'Charles',
    last_name: 'Boyle',
    start_time: 1707090842,
    duration: 450,
    isInternation: false,
    cargo_types: ['furniture'],
  },
  {
    id: 1007,
    first_name: 'Claire',
    last_name: 'Dunphy',
    start_time: 1707090842,
    duration: 700,
    isInternation: false, //
    cargo_types: ['furniture'],
  },
  {
    id: 1008,
    first_name: 'Steve',
    last_name: 'Rogers',
    start_time: 1707090842,
    duration: 345678,
    isInternation: true,
    cargo_types: ['furniture', 'goods', 'car', 'parcels'],
  },
  {
    id: 1009,
    first_name: 'Steve',
    last_name: 'Jobs',
    start_time: 1707090842,
    duration: 4555,
    isInternation: true,
    cargo_types: ['car', 'parcels'],
  },
  {
    id: 1010,
    first_name: 'Raka',
    last_name: 'Shaka',
    start_time: 1707090842,
    duration: 2500,
    isInternation: false,
    cargo_types: ['furniture', 'car'],
  }
];
    
/**
 
  1. Write a function to print all the drivers information.
  2. Given a driver id, write a function to return the matched driver.
  3. Write a function to find the driver with the longest trip.
  4. Write a function to find the driver with the shortest trip.
  5. Write a function to sort the list of drivers from longest to shortest trip.
  6. A wife called to look for husband and claiming the driver works here. Please write a function
      to find the driver when a first name is given as parameters.
  7. More trouble coming in, police is now looking for a convict. They can provide any form of a full name format such as
      "John Hansom" or "Hansom, John". Write a function to peform a search on the list of drivers 
      and return the driver if found matching. Return null if no one found.
  8. How many drivers are making trips with cargo types of 'car'?
  9. We need a count on how many drivers are driving in domestic and internation? Output will be something like this:
  {
    international: 4,
    domestic: 6
  }
  */
    