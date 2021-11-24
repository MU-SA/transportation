export default (function () {
  let admins = [];

  return {
    addAdmin: (admin) => {
      admins.push(admin);
    },
    getRegisteredAdmins: () => admins,
  };
})();
