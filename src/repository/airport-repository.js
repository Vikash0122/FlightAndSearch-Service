const { Airport } = require("../models/index");

class AirportRepository {
  async createAirport({ name, cityId }) {
    try {
      const airport = await Airport.create({
        name,
        cityId,
      });
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw { error };
    }
  }
  async getAirport(id) {
    try {
      const airport = await Airport.findOne({
        where: {
          id: id,
        },
      });
      return airport;
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
