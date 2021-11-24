export default (function () {
  let customers = [];

  return {
    addAccount: (account) => {
      customers.push(account);
    },
    getRegisteredCustomers: () => customers,
  };
})();
