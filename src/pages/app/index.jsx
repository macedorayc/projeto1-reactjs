import './index.scss';

import { Link } from 'react-router-dom'




export default function App() {
  return (
    <div className="pagina-app">
      <h1 classname="titulo1"> Estudos de ReactJS
        <i className='fa fa-heart'></i>
      </h1>
      <br />
      <h2>Estudando JSX</h2>

      <ul>
        <li>
          <Link to='/Contato'>Ir para Contato</Link>
        </li>
      </ul>


    </div>
  );
}


