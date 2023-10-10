import { AxiosResponse } from "axios";
import { _axios } from "../../base_axios_configs/_axios";
import { I_ProductItemsResponse } from "../../../Models/interfaces";

export const getProductsService = (_data: {
  productCategoryId: number | string;
  currPage: number;
}): Promise<AxiosResponse<I_ProductItemsResponse>> => {
  return _axios.get(
    `/get_product?categories=${_data.productCategoryId}&page=${_data.currPage}`
  );
};
