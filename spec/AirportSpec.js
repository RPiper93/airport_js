'use strict';

describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport;
    plane = 'plane'
  });

  describe ("not stormy", function(){
    it("#land", function() {
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });

    it('#takeoff', function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planes).not.toContain(plane);
    });
  });

  it("#isStormy", function() {
    expect(airport.isStormy()).toBeFalsy();
  });

  describe ("is stormy", function(){

    it("#take-off", function(){
      airport.land(plane)
      spyOn(airport, "isStormy").and.returnValue(true);
      expect(function() {airport.takeoff(plane);}).toThrow(
        "Weather is stormy: Can't take off");
    });

    it("#land", function(){
      spyOn(airport, "isStormy").and.returnValue(true);
      expect(function() {airport.land(plane);}).toThrow(
        "Weather is stormy: Can't land");
    });
  });

});