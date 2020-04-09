import axios from "axios";

export interface IPopulationComposition {
  year: number;
  value: number;
  rate?: number;
}

export interface IPopulationCompositionApiResponseBody {
  boundaryYear: number;
  data: [{
    label: string;
    data: IPopulationComposition;
  }];
}

export interface IPopulationCompositionApiResponse {
  message: string | null,
  result: IPopulationCompositionApiResponseBody
}

const _instance = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp",
  timeout: 1000,
  headers: {
    'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY
  }
});

const _getPopulationCompositions = async (prefCode: number, cityCode: number | string = "-"): Promise<IPopulationCompositionApiResponseBody| undefined> => {
  try {
    const params = new URLSearchParams();
    params.append("cityCode", String(cityCode));
    params.append("prefCode", String(prefCode));
    const url = "/api/v1/population/composition/perYear?" + params.toString()
    const response = await _instance.get(url) 
    if(response.status !== 200) throw [response.status, response.statusText]
    return response.data.result;
  } catch (error) {
    console.error("error", error);
  }
}

export const getTotalPopulations = async (prefCode: number, cityCode: number | string = "-") => {
  const response = await _getPopulationCompositions(prefCode, cityCode);
  if(response == undefined) return ;
  return response.data.filter(item => item.label == "総人口")[0]
}