//Aqui importamos las cosas y por lo tanto, si queremos importar el JSON será aqui
import "./App.css";
//Se puede hacer como arriba pero vamos a darle un nombre por si las moscas
//Este codigo de abajo, básicamente dice: "importa la data de x.json y guardalos en la variable <y>"
import contactData from "./contacts.json"

//si vas a usar un estado, el primer paso es importarlo desde react
import React, {useState} from "react"





//Toda la info, la queremos imprimir gracias a esto de aqui abajo:

//Nos pide: crear una variable de estado llamada contacts (por lo tanto, el segundo argumento/funcion se llamara setContacts)
//Extraer los 5 primeros contactos=sclice
function App() {
  const [contacts, setContacts]=useState(contactData.slice(0,5));

  //Aqui todo lo del randomizer
  const addRandomActor = () => {
    const randomizer = Math.floor(Math.random() * contactData.length);
    const randomContact = contactData[randomizer];


    //Aqui va lo del estado ese. Recuerda que tienes que tirar de la segunda funcion/argumento
    setContacts((prevContacts) => [...prevContacts, randomContact]);
  };
  //aqui las fuyncionalidades
  //aqui elpaso 5, ordenar alphabeticamente
  const sortAlpha= ()=>{
    const sortedContacts= [...contacts].sort((a, b)=>


      a.name.localeCompare(b.name)
    );
    setContacts(sortedContacts);
  };

  const sortPopular= ()=>{
    const sortedContacts = [...contacts].sort((a, b) =>
      b.popularity - a.popularity
    );
    setContacts(sortedContacts);
  };

  //deletear
  const deletearActor = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won a Juankar</th>
            <th>Won a Emilia</th>
          </tr>
        </thead>

        {/* La parte de arriba corresponde a la tabla que creamos, la de abajo a la informacion(que se renderiza) */}

        <tbody>
          {contacts.map((contacts, index) => (
            <tr key={index}>
              <td><img src={contacts.pictureUrl} alt={contacts.name} width="50" /></td>
              <td>{contacts.name}</td>
              <td>{contacts.popularity}</td>

              {/* Forma tradicional en react */}
              <td>{contacts.wonOscar?<span>🏆</span>:null}</td>
              {/* Forma "otra" de la cual no recuedo el nombre pero sin el null */}
              <td>{contacts.wonEmmy && <span>🏆</span>}</td>
            </tr>
          ))}
         
        </tbody>

        <button onClick={addRandomActor}>Add Random Actor</button>
          <button onClick={sortAlpha}>Sort by Alphabet</button>
          <button onClick={sortPopular}>Sort by Popularity</button>
          <button onClick={deletearActor}>Exterminate the Actor</button>

      </table>
    </div>
  );
}

export default App;
