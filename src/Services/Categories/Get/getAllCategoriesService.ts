// Axios
import { AxiosResponse } from "axios";
import { _axios } from "../../base_axios_configs/_axios";
// Axios

// Models
import { I_Category } from "../../../Models/interfaces";
// Models

export const getAllCategoriesService = (): Promise<
  AxiosResponse<I_Category[]>
> => {
  return _axios.get(`/get_categories`);
};
