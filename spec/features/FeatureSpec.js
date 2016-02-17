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

describe("User Story 2", function() {
  it("can have a plane take-off and check it's not in the airport",
    function(){
      var airport = new Airport;
      var plane = new Plane;
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planes).not.toContain(plane);
    });
});

describe("User Story 3", function() {
  it("prevents take-off when weather is stormy", function() {
    var airport = new Airport;
    var plane = new Plane;
    airport.land(plane);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ airport.takeoff();}).toThrow(
      "Weather is stormy: Can't take off");
    expect(airport.planes).toContain(plane);
  });
});

describe("User Story 4", function() {
  it("prevents landing when stormy", function(){
    var airport = new Airport;
    var plane = new Plane;
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ airport.land(plane);}).toThrow(
      "Weather is stormy: Can't land");
    expect(airport.planes).not.toContain(plane);
  });
});

//As an air traffic controller
//To ensure safety
//I want to prevent landing when the airport is full

//As the system designer
//So that the software can be used for many different airports
//I would like a default airport capacity that can be overridden as appropriate