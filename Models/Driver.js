import Drivers from "../Data/Drivers.js";
import Account from "./Account.js";

class Driver extends Account {
  constructor(account) {
    super(account);
    this.accountID = this.id;
    this.status = "pending";
    this.ride_status = "free";
  }
  setRideStatus = (status) => {
    this.ride_status = status;
  };
  acceptRide = () => {};
}
export default Driver;
