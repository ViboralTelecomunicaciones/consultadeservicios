import { instance } from "../lib/serviceClient";


export const getUsuarioCodigo = async (codigo : string) => {
    console.log("Fetching usuario with codigo  del servicio:", codigo );


  try {
    const { data : dataCodigo } = await instance.get(`/codigo/${codigo}`);
    console.log("Data codigo fetched:", codigo);
    return dataCodigo; 

  } catch (error) {
    console.error("Error fetching usuario por codigo:", error);
    
  } 
};