import Drivers from "../Data/Drivers.js";
import Account from "./Account.js";
import Driver from "./Driver.js";
class Customer extends Account {
  constructor(account) {
    super(account);
    this.accountID = account.id;
    this.ride_status = "free";
  }

  setRideStatus = (status) => {
    this.ride_status = status;
  };
  registerAsDriver = () => {
    Drivers.addDriver(
      new Driver({
        accountID: this.accountID,
        fullname: this.fullname,
        phone_number: this.phone_number,
        email: this.email,
        password: this.password,
      })
    );
  };
}
export default Customer;
