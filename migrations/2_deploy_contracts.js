const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary, "Udacity Star Notary", "UST", 18, 1000);
};
