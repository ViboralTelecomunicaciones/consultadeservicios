
import React, { useEffect, useState, type FormEvent } from "react";
import { servicios } from "../../data/servicios";
import styles from './Form.module.css'
import { getUsuario } from "../../services/usuario.service";
// import { getUsuarioCodigo } from "../../services/codigo.service";
import type { ClienteResponse } from "../../types";


interface User {
    id: number;
    nombre: string;
    identificacion: string;
    servicios: string[];
    user:string;
}

export default function Form() {

   
    const [user, setUser] = useState<ClienteResponse>();
     
      const fetchData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const documento = formData.get("documento") as string;
           
      
        getUsuario(documento).then((data:ClienteResponse) => {
        setUser(data);
        console.log("Usuario data:", data);
        console.log("Usuario data:", data?.resultado);
      }).catch(error => {
        console.error("Error fetching usuario in useEffect:", error);
      });
      
         
    }

    // export default function FormCodigo() {

   
    // const [userCodigo, setUserCodigo] = useState<ClienteResponse>();
     
    //   const fetchData = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     const codigo = formData.get("codigo") as string;
           

    //     getUsuarioCodigo(codigo).then((data:ClienteResponse) => {
    //     setUserCodigo(data);
    //     console.log("Usuario data:", data);
    //     console.log("Usuario data:", data?.resultado);
    //   }).catch(error => {
    //     console.error("Error fetching usuario in useEffect:", error);
    //   });
      
         
    
 
  return (

   
<> 

 <form 
      className={styles.form}
      onSubmit={fetchData}
      >
        

      <div className={styles.field}>
        <label htmlFor="documento">Número de Documento:</label>
        <input
          id="documento"
          type= 'text'
          name="documento"
          placeholder="Número de Documento"
        
       
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="servicios">Servicio a consultar:</label>

        <select 
        id="servicios"
        
        name="servicios"
        
        >
          <option value="">-- Seleccione un Servicio --</option>

          {servicios.map((servicio, index) => (
            <option
              key={`${servicio.code}-${index}`}
              value={servicio.code}
            >
              {servicio.name}
            </option>
          ))}
        </select>
      </div>

      <button className={styles.submit}  type="submit">Consultar</button>
    </form>

     <div>   
      {user && user?.resultado.length > 0 && (
        <div className={styles.result}>
          <h2>Resultados para {user.resultado[0].nombres}</h2> 
          <p><strong>Código:</strong> {user.resultado[0].codigo}</p>
          <p><strong>Dirección:</strong> {user.resultado[0].direccion}</p>
          <p><strong>Documento de Identidad:</strong> {user.resultado[0].documento_identidad}</p>
          <p><strong>Estado:</strong> {user.resultado[0].estado}</p>
          <p><strong>Deuda Total:</strong> ${user.resultado[0 ].deuda_total.toFixed(2)}</p>
    </div>
      )} 
    </div>
</>
   
   
  );
}
