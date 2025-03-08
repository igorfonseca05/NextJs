
import { Suspense } from "react"

interface DataProps {
  id: number,
  name: string,
  private: boolean,
  full_name: string,
  owner: {
    login: string,
    id: number,
    avatar_url: string
  }
}


async function getData() {
  try {
    await new Promise((res) => { setTimeout(res, 3000) })
    const res = await fetch('https://api.github.com/users/igorfonseca05/repos')

    return res.json()
  } catch (error) {
    console.log(error)
  }
}



export default async function Home() {

  const data: DataProps[] = await getData()

  return (
    <div>
      <h1>Bem vindo a pagina home</h1>

      <h2>Repositórios</h2>
      <Suspense fallback={<p>Carregando...</p>}>
        {/* {data.map((item) => (
          <p key={item.id}><strong>Repositório: </strong>{item.name}</p>
        ))} */}
        <ListaRepos />
      </Suspense>
    </div>
  );
}


async function ListaRepos() {
  const data: DataProps[] = await getData();

  return (
    <>
      {data.map((item) => (
        <p key={item.id}><strong>Repositóri: </strong>{item.name}</p>
      ))}
    </>
  );
}
