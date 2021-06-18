//Axios e a biblioteca que utilizamos para fazer a conexao com a api
//npx json-server --watch db.json --port 5000 comanando para iniciar o server na porta 5000
import axios from 'axios'


export const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export const busca = async(url, setDado) => { 
  //Como estamos lidando com servidor e a resposta pode vir na hora ou nao, entao estamos lidando com dados assincronos. Por isso o async e o await
  const reposta = await api.get(url) //para pegar os dados a gente usa o get
  setDado(reposta.data)
}