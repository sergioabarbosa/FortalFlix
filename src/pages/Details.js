import React from "react";
import { useContext } from "react";
import MyContext from '../context/MyContext';
import './CreateSeries.css';
import { HeaderS } from "./styles";
// import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Details(props) {
  const serieId = props.match.params.id;
  const {data} = useContext(MyContext);
  console.log(data);
  const serie = data.find(({show}) => show.id === +serieId);
  console.log(serie);
  return(
    <div>
    <HeaderS/>
    <div><h2>Detalhes: </h2></div>
      <div className="details">
        {serie.show.image ? <img className="img-details" src={serie.show.image.medium} alt="imagem" /> :'Sem Imagem'}
        {/* {Retira as tags <p> do resumo} */}
      <div dangerouslySetInnerHTML={ {__html : serie.show.summary} }/>
          <Link to={`/`}>
          <button className="button-goback">Voltar</button>
          </Link>
    </div>
    {/* <Footer /> */}
  </div>
  )
}

export default Details;
