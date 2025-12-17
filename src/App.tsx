
import styles from './App.module.css'
import Form from './components/form/Form'
import useWeather from './Hook/useWeather'



function App() {

  const { fetchWeather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Consulta tus Servicios</h1>
    
        <div className={styles.container}>

            <Form 
              fetchWeather={fetchWeather}
            />
            <p>2</p>
            

        </div>
    </>

    
  )

  
}

export default App


