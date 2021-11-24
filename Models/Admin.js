import Account from "./Account.js";

class Admin extends Account {
  constructor(account) {
    super(account);
    this.email = account.email;
    this.fullname = account.fullname;
    this.password = account.password;
  }
  
  susbendDriver = () => {};
}
export default Admin;
