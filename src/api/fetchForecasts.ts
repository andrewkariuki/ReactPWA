import axios from "axios";

const _URL = "https://api.openweathermap.org/data/2.5/weather";
const _KEY = "6d10be7b3eedd2d1f290106007f74376";

interface QueryProps {
  query: string;
}

export const fetchForecasts = async ({ query }: QueryProps) => {
  const { data } = await axios.get(_URL, {
    params: {
      q: query,
      units: "metric",
      APPID: _KEY,
    },
  });

  return data;
};
