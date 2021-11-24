import Accounts from "../Data/Accounts.js";
import Customers from "../Data/Customers.js";
// import Account from "./Account.js";

class Account {
  constructor(account) {
    this.email = account.email;
    this.fullname = account.fullname;
    this.password = account.password;
    this.phone_number = this.phone_number;
    this.id = Accounts.getRegisteredAccounts().length;
  }
  searchForEntry = () => {
    return Accounts.getRegisteredAccounts().filter(
      (acc) =>
        acc.password === this.password && acc.phone_number === this.phone_number
    );
  };
  login = () => {
    const result = this.searchForEntry();
    if (result.length === 0) {
      console.log("not found");
      return false;
    }
    return result[0];
  };
  register = () => {
    if (this.searchForEntry().length !== 0)
      console.log("phone number already exist");
    return this.saveRegisterAccount();
  };
  saveRegisterAccount = () => {
    const registeredAccount = new Account({
      id: Accounts.getRegisteredAccounts().length,
      email: this.email,
      password: this.password,
      phone_number: this.phone_number,
    });
    Accounts.addAccount(registeredAccount);
    return registeredAccount;
  };
}
export default Account;
