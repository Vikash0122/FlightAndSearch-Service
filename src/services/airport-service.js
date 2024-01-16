const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport({ name, cityId }) {
    try {
      const airport = await this.airportRepository.createAirport({
        name,
        cityId,
      });
      return airport;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async getAirport(id) {
    try {
      const airport = this.airportRepository.getAirport(id);
      return airport;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async deleteAirport(id) {
    try {
      const deletedAirportResponse = await this.airportRepository.deleteAirport(id);
      return deletedAirportResponse;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = AirportService;
