import axios from "axios";
import type { SearchType } from "../types";

export default function useWeather() {

  const fetchWeather = async (search: SearchType) => {

    const appId = 'UF8QUsqELGBJ9czS6u6Qq1AGMCSWBXl24dWdgZj0vvjlBlo6gZcYSa7YmlElYChmBkTpCBpYA1a4EYSBdUa1';

    try {
      const response = await axios.post(
                "https://apigestion-viboraltv.scordsoft.net/api/v1/cliente/consultar-servicios",
        {
          identificacion: search.documento,
          servicio: search.servicios
        },
        {
          headers: {
            "Content-Type": "application/json",
            "appId": appId
          }
        }
      );

      console.log(response.data);

    } catch (error) {
      console.error("Error consultando servicios:", error);
    }
  };

  return {
    fetchWeather
  };
}
