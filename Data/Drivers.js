export default (function () {
  let drivers = [];

  return {
    addDriver: (driver) => {
      drivers.push(driver);
    },
    getRegisteredDrivers: () => drivers,
  };
})();
