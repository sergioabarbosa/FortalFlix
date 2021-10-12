import React from "react";
import {Link} from 'react-router-dom'
// import MyContext from '../context/MyContext';
// import Details from "../pages/Details";

function Card({serie}) {
console.log(serie.show.id);
  return(
  <div className="card">
    <Link to={`/details/${serie.show.id}`}>
      {serie.show.image ? <img className="img" src={serie.show.image.medium} alt="imagem da série" /> :'Sem Imagem'}
    </Link>
    <ul key={ console.log(serie.show.id) }>
      <li>Nome da Série:{ serie.show.name }</li>
      <li>Status da Série:{ serie.show.status }</li>
      <li>Número de Episódios:{ serie.show.weight }</li>
      <li>Gênero:{ serie.show.genres }</li>
      <li>Nota:{ serie.score }</li>
      {/* <li>Resumo:{ serie.show.summary }</li> */}
      <li>Onde Assistir:{serie.show.network ? serie.show.network.name :'Sem Canais' }</li>
      {/* <li><Details /></li> */}
      <li>
        <a
          href={ serie.url }
          rel="noopener noreferrer"
          target="_blank"
          >
          { serie.url }
        </a>
        <Link to={`/details/${serie.show.id}`}>
        <li>Resumo...</li>
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default Card;