import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//O Switch vindo do React router, serve para que o react quando ache um rota que dê match, ele pare de procurar em outras rotas.
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'
import Categoria from './paginas/Categoria'

function App() {
  //Cada <Route> serve para encapsular o elemento
  return (
    <Router>
      <Cabecalho />{/*Inserindo o cabecalho antes do Switch, faz com que ele apareça em todas as paginas durante a navegação */}
      <Switch>
        <Route exact path='/'>{/*Utilizando o exact, ele faz uma comparação por expressão regular, onde somente quando a expressão for exatamente igual, será exibido*/}
          <Home />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route path='/categoria/:id'>
          <Categoria />
        </Route>
        <Route path='/posts/:id'>{/*Colocando :id para poder fazer o match do click com o post correto */}
          <Post />
        </Route>
        <Route>
          <Pagina404 />{/*Qualquer outra rota que nao seja encontrada, o react vai renderizar a pagina404 */}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
