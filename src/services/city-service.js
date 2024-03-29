const { CityRepository } = require("../repository/index");

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(cityData) {
        try {
            const city = await this.cityRepository.createCity(cityData);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw{error};
        }
    }

    async deleteCity(cityId) {
        try {
            const deletedcityResponse = await this.cityRepository.deleteCity(cityId);
            return deletedcityResponse;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw{error};
        }
    }

    async updateCity(cityId,cityData) {
        try {
            const cityResponse = await this.cityRepository.updateCity(
                cityId,
                cityData
            );
            return cityResponse;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw{error};
        }
    }

    async getCity(cityId) {
        try {
            const city = this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw{error};
        }
    }

    async getAllCities(filter) {
        try {
            const cities = await this.cityRepository.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw{error};
        }
    }
}

module.exports = CityService;