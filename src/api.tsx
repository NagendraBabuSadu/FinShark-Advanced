import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  console.log("API key: ", process.env.REACT_APP_API_KEY);

  // try {
  //   const data = await axios.get<SearchResponse>(
  //     `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`,
  //   );
  //   return data;
  // } catch (error) {
  //   console.log("Axios error: ", error);
  // }
};
