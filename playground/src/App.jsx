import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useFetch } from '../hooks/useFetch'

function App() {

  // const [data, setData] = useState()
  const [avaliable, setAvailable] = useState(false)
  const [dishe, setDishe] = useState({})

  const url = 'http://localhost:3000/pratos'

  const { data: dishes, error, loading, httpConfig } = useFetch(url)

  function handleDishes(e) {
    setDishe({
      ...dishe,
      [e.target.name]: e.target.value
    })
  }

  function handleObject(obj) {
    return (
      obj.nome?.trim() &&
      obj.descricao?.trim() &&
      obj.preco?.trim() &&
      obj.categoria?.trim() &&
      obj.imagem?.trim()
    )
  }

  async function handleForm(e) {
    e.preventDefault()

    if (!handleObject(dishe)) return

    httpConfig(dishe, 'POST')

    // try {
    //   const res = await fetch('http://localhost:3000/pratos', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(dishe),
    //   })

    //   if (!res.ok) {
    //     throw new Error('Erro ao adicionar o dado' + res.status)
    //   }

    //   const dado = await res.json()

    //   setData(prev => [...prev, dado])

    //   e.target.reset()
    // } catch (error) {
    //   console.log(error.message)
    // }
  }


  // useEffect(() => {

  //   const controller = new AbortController()

  //   async function getData() {
  //     try {
  //       const res = await fetch('http://localhost:3000/pratos', {
  //         signal: controller.signal
  //       });

  //       if (!res.ok) {
  //         throw new Error("Erro na requisição: " + resposta.status)
  //       }

  //       const dados = await res.json()
  //       setData(dados)
  //     } catch (error) {
  //       if (error.name !== 'AbortError') {
  //         console.log(error)
  //       }
  //     }

  //   }

  //   getData()

  //   return () => controller.abort() // Cleanup
  // }, [])



  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Dados </h1>
        <ul>
          {
            dishes?.map(prato => (
              <div key={prato.id} style={{ display: 'flex', gap: 20 }}>
                <li>{prato.nome}</li>
                <button onClick={() => httpConfig(prato, 'DELETE')}>Deletar</button>
              </div>
            ))
          }
        </ul>
      </div>
      {/* <button onClick={() => setNum(num + 1)}>Count</button> */}
      <form className="form-container" onSubmit={handleForm}>
        <h2>Novo Prato</h2>

        {/* Nome */}
        <div className="form-group">
          <label htmlFor="nome">Nome do prato</label>
          <input type="text" id="nome" name="nome" placeholder="Ex.: Spaghetti à Carbonara" required onChange={handleDishes} />
        </div>

        {/* Descrição */}
        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea id="descricao" name="descricao" placeholder="Descreva o prato..." required onChange={handleDishes} />
        </div>

        {/* Preço */}
        <div className="form-group">
          <label htmlFor="preco">Preço (R$)</label>
          <input
            type="number"
            id="preco"
            name="preco"
            step="0.01"
            min="0"
            placeholder="Ex.: 34.90"
            onChange={handleDishes}
            required

          />
        </div>

        {/* Categoria */}
        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" name="categoria" defaultValue="" required onChange={handleDishes}>
            <option value="" disabled>
              Selecione...
            </option>
            <option value="Massas">Massas</option>
            <option value="Carnes">Carnes</option>
            <option value="Peixes">Peixes</option>
            <option value="Vegetariano">Vegetariano</option>
            <option value="Lanches">Lanches</option>
            <option value="Asiática">Asiática</option>
            <option value="Pizzas">Pizzas</option>
            <option value="Entradas">Entradas</option>
            <option value="Brasileira">Brasileira</option>
            <option value="Saladas">Saladas</option>
          </select>
        </div>

        {/* Imagem */}
        <div className="form-group">
          <label htmlFor="imagem">URL da imagem</label>
          <input
            type="url"
            id="imagem"
            name="imagem"
            placeholder="https://example.com/imagens/prato.jpg"
            onChange={handleDishes}
            required

          />
        </div>

        {/* Disponível */}
        <div className="form-group checkbox-group">
          <input type="checkbox" id="disponivel" name="disponivel" value={avaliable} onChange={(e) => {
            handleDishes(e)
            setAvailable(!avaliable)
          }} />
          <label htmlFor="disponivel">Disponível para venda</label>
        </div>

        {/* Botão de envio */}
        <button type="submit" className="btn-submit">
          Salvar prato
        </button>
      </form>
    </>
  )
}

export default App
