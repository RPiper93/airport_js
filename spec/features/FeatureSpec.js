'use strict';

describe("User Story 1",
  function(){
    it("can land a plane at an airport and check it's there",
      function(){
    var airport = new Airport;
    var plane = new Plane;
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });
});

//As an air traffic controller
//So I can get passengers on the way to their destination
//I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

//As an air traffic controller
//To ensure safety
//I want to prevent takeoff when weather is stormy

//As an air traffic controller
//To ensure safety
//I want to prevent landing when weather is stormy

//As an air traffic controller
//To ensure safety
//I want to prevent landing when the airport is full

//As the system designer
//So that the software can be used for many different airports
//I would like a default airport capacity that can be overridden as appropriate