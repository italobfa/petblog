/*Toda interecao esta sendo feita direto com o arquivo db.json, o react fica mapeando os nomes usados la no arquivo.
Ex: em categorias, existem dois objetos cada um com um nome especifico o primeiro 'Bem estar' e o segundo 'Comportamento'
Por isso quando eu escrevo na linha {categoria.nome} ele mostra as duas propiedades do objeto na pagina*/
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'

const ListaCategorias = () => { 

  const[categorias, setCategorias] = useState([])

  useEffect(() => {
   busca(`/categorias`, setCategorias)
  }, [])

  return(
    <ul className="lista-categorias container flex">
      {
        categorias.map((categoria) => (
          <Link to={`/categoria/${categoria.id}`}>
            <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
              {categoria.nome}
            </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default ListaCategorias