import { instance } from "../lib/serviceClient";

export const getUsuario = async (identificacion : string) => {
    console.log("Fetching usuario with identificacion  del servicio:", identificacion );
  try {
    
    const { data } = await instance.get(`/cliente/${identificacion}`);
    return data;

   
    
  } catch (error) {
    console.error("Error fetching usuario:", error);
    throw error;
  } 
};



   




