import { axiosClient } from "common/network/axios-client";
import { CarType } from "../types/CarType";
import { Company } from "../types/Company";
import { OffPercent } from "../types/OffPercent";

const getVehicleTypes = () => axiosClient.get<CarType[]>(`api/product/vehicle/types`);

const getInsureCompanies = () => axiosClient.get<Company[]>(`api/product/third/companies`);

const getThirdDiscounts = () =>
  axiosClient.get<OffPercent[]>(`api/product/third/third-discounts`);

const AzkiService = {
  getVehicleTypes,
  getInsureCompanies,
  getThirdDiscounts,
};

export default AzkiService;
