'use strict';

describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport;
  });

  it("#land", function() {
    expect(airport.land).toBeDefined();
  });

  it("#planes", function() {
    var plane = 'plane';
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });
});