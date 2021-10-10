import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import { ButtonInputS, HeaderS, InputS } from './styles';
import Footer from '../components/Footer';
import Switch from "react-switch";
import Card from '../components/Card';
import './CreateSeries.css';

function CreateSerie() {
  const {data, setQuery} = useContext(MyContext);
  const [search, setSearch] = useState('');
  const [filtered, setfiltered] = useState([]);

  // Dark Mode
  const [painted, setPainted] = useState(false);

  const tooglePaint = () => setPainted((prevState) => !prevState);
 

useEffect(() => {
    function handleFilterDataByInput() {
      let newArray = [...data];
      setfiltered(newArray);
    }
    handleFilterDataByInput();
  },
  [data, search]);

  const handleClick = (e) => {
    // Setando a busca para o campo obrigatoriamente como não vazia
    if(!search) return alert('Insira uma série válida para pesquisa');
    // tentei assim:
    e.preventDefault();
   setQuery(search);
   // limpando o input após a busca
   setSearch('')
  };
  console.log(data);


  return (
    <>
    <HeaderS painted={ painted }>
      <h1>
        FortalFlix
      </h1>
      <label/>DarkMode<Switch onChange={tooglePaint} checked={painted} /> 
    </ HeaderS>
    <form>
      <InputS
        type="text"
        className="input"
        onChange={ (e) => setSearch(e.target.value) }
        value={search}
      />
      
        <ButtonInputS
          type="submit"
          className="search"
          name="search"
          onClick={ handleClick }
        >
          Buscar
        </ButtonInputS>
        <div><br></br></div>
      </form>
      <div className="card-content">
        {
          filtered.map((serie) => (<Card serie={serie} />))
        }
      </div>
      <div>
      <Footer/>
      </div>
    </>
  );
}

export default CreateSerie;
