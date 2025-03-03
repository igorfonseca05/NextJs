![Group 20](https://github.com/user-attachments/assets/620a8888-e794-4276-8145-3dd494592c0c)
 
## Aula 55 - Conhecendo server components

Server component é um componente react que executa completamente no lado do servidor, isso faz com que não inclua
javascript no lado do cliente aumentando a performance das nossas aplicações. No nextjs, todos os componentes são
server components por padrão, mas podemos alterar esse comportamente usando a diretiva `use client` no topo do arquivo.

No nextJs, se fizermos

```javascript
export default function Home() {
  return <div>Home</div>;
}
```

teremos um server component, e para mudar isso fazemos:

```javascript
"use client";

export default function Home() {
  return <div>Home</div>;
}
```

Agora temos um client component, onde podemos utilizar recursos como "useState", "useEffect" entre outros hooks do react.

Como mencionado acima, um server component renderiza toda informação da pagina no lado do servidor e só envia o HTML já preenchido para o client side. Para vermos melhor como isso é feito, veja o código abaixo.

```javascript
// app/page.tsx (Server Component)
async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Page;
```

O método de requisição assincrona fetch é executado no lado do servidor, quando recebe os dados, preenche o componente com as informações correspondentes e envia esse componente para ser renderizado no lado do cliente.

## Aula 56 - Revendo componentes

Nessa aula visualizamos a diferença entre um componente react que executa no lado do client e um componente react que executa no lado do servidor, e o ponto principal entre eles é que caso tenhamos uma API lenta, a pagina do client é mostrada parcialmente sem os dados inseridos, uma vez que não foram retornados pela requisição. Já no caso do server component a página como um todo demora um pouco para ser carregada, mas todo o conteudo da pagina é mostrado de uma unica vez.

## Aula 57 - Conhecendo loading

Para o caso de termos uma api lenta, podemos utilizar o recurso de loading disponivel dentro do nextJs. Esse recurso é muito util para o caso de termos uma API que demora para retornar os dados, e como no nextJS a pagina não é mostrada até os dados sejam retornados pela API, temos um carregamento da pagina sem nada ser mostrado. Para evitar isso poodemos criar um loading para indicar para os usuário que os dados ainda estão sendo carregado.

Dentro do componente server no qual voce pretende adicionar um laoding, crie um arquivo chamado:

    loading.tsx

dentro desse arquivo, devemos, obrigatóriamente, criar um componente com o nome `Loading`

```javascript
export default function Loading() {
  return (
    <div>
      <h1>Carregando...</h1>
    </div>
  );
}
```

Agora quando a API demorar responder com os dados, será mostrado "Carregando..." na página ao invés da página ficar carregando e esperando a resposta da API.
