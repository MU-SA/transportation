export default (function () {
  let accounts = [];

  return {
    addAccount: (account) => {
      accounts.push(account);
    },
    getRegisteredAccounts: () => accounts,
  };
})();
