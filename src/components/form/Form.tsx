import React, { useState } from "react";
import type { SearchType } from "../../types";
import { servicios } from "../../data/servicios";
import styles from './Form.module.css'
import Alert from "../../Alert/Alert";



type FormProps = {
  fetchWeather: (search: SearchType) => Promise<void>;

}


export default function Form({ fetchWeather }: FormProps) {

    const [search, setSearch] = useState<SearchType>({
        documento: '',
        servicios: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
      const [alert, setAlert] = useState('')

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if(Object.values(search).includes('')){
              setAlert('Todos los campos son obligatorios');
              return
        }

        fetchWeather(search);
    }
  return (

   

    <form 
      className={styles.form}
      onSubmit={handleSubmit}
      >
        {alert && <Alert>{alert}</Alert>}

      <div className={styles.field}>
        <label htmlFor="documento">Número de Documento:</label>
        <input
          id="documento"
          type= 'text'
          name="documento"
          placeholder="Número de Documento"
         value= {search.documento}
         onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="servicios">Servicio a consultar:</label>

        <select 
        id="servicios"
        value={search.servicios}
        name="servicios"
        onChange={handleChange}
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

      <button className={styles.submit} type="submit">Consultar</button>
    </form>
  );
}
