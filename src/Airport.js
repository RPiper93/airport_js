function Airport() {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  if(this.isStormy() === true){
    throw "Weather is stormy: Can't land";
  };
  this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  if(this.isStormy() === true){
    throw "Weather is stormy: Can't take off";
  };
  this.planes.splice(plane);
};

Airport.prototype.isStormy = function() {

};