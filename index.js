import Customers from "./Data/Customers.js";
import Drivers from "./Data/Drivers.js";
import Customer from "./Models/Customer.js";

export default function min() {
  let fullname = "Muhammad saleh";
  let password = "1234";
  let phone_number = "01101226262";
  let email = "muhammadsaleh.dev@gmail.com";

  const customer = new Customer({
    fullname,
    password,
    phone_number,
    email,
    fullname,
  });
  
  next();
  function next() {
    if (customer.login()) {
      console.log("logged");

      customer.registerAsDriver();
      console.log(Drivers.getRegisteredDrivers());
    } else {
      customer.register();
      next();
    }
  }
}

min();
