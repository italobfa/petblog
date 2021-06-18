import React, {useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/post.css'
//Usando o useParams, podemos fazer o gancho com o id que vai ser clicado para o react renderizar. Para isso tem que adicionar o :id na rota.
/*O react router possui um hook chamado history que possui o método push e através dele conseguimos navegar até a rota indicada, que nesse caso é a rota 404. */

const Post = () => { 
  let history = useHistory()
  const { id } = useParams()
  const[post, setPost] = useState({})

  useEffect(() => {
    busca(`/posts/${id}`, setPost)
    .catch(()=>{
      history.push('/404')
    })
  }, [id])

  return(
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="carta__texto">{post.body}</p>
      </article>
    </main>
  )
}

export default Post