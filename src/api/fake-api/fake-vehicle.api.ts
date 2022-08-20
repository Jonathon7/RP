/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { IVehicle } from "~/interfaces/vehicle";
import { VehicleApi } from "~/api/base";
import {
    addUserVehicles,
    getMakes,
    getModels,
    getUserVehicles,
    getVehicleByVin,
    getVehicles,
    removeUserVehicles,
} from "~/fake-server/endpoints";
import axios from "axios";

let counter = 0;

export class FakeVehicleApi extends VehicleApi {
    async getYears(): Promise<number[]> {
        const response = await axios.get("/api/years");
        const years: number[] = [];
        response.data.forEach((elem: { model_year: number }) => years.push(elem.model_year));

        return years;
    }

    async getMakes(year: number): Promise<string[]> {
        const response = await axios.get(`/api/makes/${year}`);
        const makes: string[] = [];
        response.data.forEach((elem: { asset_url: string }) => makes.push(elem.asset_url));
        // response.data.forEach((elem: { model_make_id: string }) => makes.push(elem.model_make_id));

        let interbal = setInterval(() => {
            let str = makes[counter];
            str = str.slice(0, -1);
            str += "1";

            window.open(str);
            counter++;
            if (counter === 10) {
                clearInterval(interbal);
            }
        }, 3000);

        return makes;
    }

    async getModels(year: number, make: string): Promise<string[]> {
        const response = await axios.get(`/api/models/${year}/${make}`);
        const models: string[] = [];
        response.data.forEach((elem: { model_name: string }) => models.push(elem.model_name));

        return models;
    }

    async getVehicles(year: number, make: string, model: string): Promise<IVehicle[]> {
        const response = await axios.get(`/api/engines/${year}/${make}/${model}`);
        const engines: string[] = [];
        response.data.forEach((elem: { model_engine_cc: string }) => engines.push(elem.model_engine_cc));

        return getVehicles(year, make, model);
    }

    getVehicleByVin(vin: string): Promise<IVehicle> {
        return getVehicleByVin(vin);
    }

    getUserVehicles(): Promise<IVehicle[]> {
        return getUserVehicles();
    }

    addUserVehicle(vehicleId: number): Promise<void> {
        return addUserVehicles(vehicleId);
    }

    removeUserVehicle(vehicleId: number): Promise<void> {
        return removeUserVehicles(vehicleId);
    }
}
