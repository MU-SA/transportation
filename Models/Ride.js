class Ride {
  constructor(ride) {
    this.id = 0;
    this.fromArea = ride.from;
    this.toArea = ride.to;
    this.driver = ride.driver;
    this.customer = ride.customer;
  }

  start = () => {
    this.driver.setRideStatus("in_a_ride");
    this.customer.setRideStatus("in_a_ride");
  };
  end = () => {
    this.driver.setRideStatus("free");
    this.customer.setRideStatus("free");
  };
}

export default Ride;
