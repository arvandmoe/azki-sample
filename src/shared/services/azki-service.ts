import { axiosClient } from "common/network/axios-client";

const getVehicleTypes = () => axiosClient.get(`api/product/vehicle/types`);

const getInsureCompanies = () => axiosClient.get(`api/product/third/companies`);

const getThirdDiscounts = () =>
  axiosClient.get(`api/product/third/third-discounts`);

const AzkiService = {
  getVehicleTypes,
  getInsureCompanies,
  getThirdDiscounts,
};

export default AzkiService;