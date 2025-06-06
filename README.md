![alt text](public/next.png)

## Descrição

Este espaço é dedicado a anotações e resumos sobre recursos importantes do Next.js. O objetivo é criar uma referência prática para consultas futuras, facilitando a revisão de conceitos, funcionalidades e boas práticas. Aqui serão registrados pontos relevantes sobre estrutura de pastas, renderização (SSR, SSG, ISR), roteamento, API Routes, otimização de performance, e outros tópicos fundamentais. Essa coleção de informações será útil para resolver dúvidas rapidamente e acelerar o desenvolvimento de projetos com Next.js.

## Sumário

* [Section 4](#section-4)  
* [Section 5](#section-5)  
* [Section 6](#section-6)




### Section 4

- [Aula 30 - O que é Next.js?](#aula-30---o-que-é-nextjs)
- [Aula 31 - Entendendo a estrutura](#aula-31---entendendo-a-estrutura)
- [Aula 32 - Comandos para criar seu primeiro projeto](#aula-32---comandos-para-criar-seu-primeiro-projeto)


## Aula 30 - O que é Next.js?
Next.js é um framework para React que permite a criação de aplicações web modernas, otimizadas e escaláveis. Ele oferece funcionalidades como renderização no servidor (SSR), geração estática de páginas (SSG), suporte a API Routes e otimizações automáticas para melhorar o desempenho da aplicação. Desenvolvido pela Vercel, o Next.js é amplamente utilizado para criar aplicações robustas e eficientes.

## Aula 31 - Entendendo a estrutura
Um projeto Next.js segue uma estrutura organizada para facilitar o desenvolvimento. Os principais diretórios e arquivos são:

- **`pages/`**: Contém os arquivos das páginas da aplicação. Cada arquivo dentro dessa pasta representa uma rota.
- **`public/`**: Armazena arquivos estáticos como imagens e ícones.
- **`styles/`**: Contém arquivos de estilos globais.
- **`components/`** (opcional): Pasta comum para armazenar componentes reutilizáveis.
- **`api/`** (dentro de `pages/`): Usado para criar rotas de API backend.
- **`next.config.js`**: Arquivo de configuração do Next.js.
- **`.next/`**: Diretório gerado automaticamente com os arquivos de build.

## Aula 32 - Comandos para criar seu primeiro projeto
Para criar um projeto Next.js do zero, siga os passos abaixo:

1. Instale o Node.js caso ainda não tenha instalado.
2. Execute o seguinte comando no terminal para criar um novo projeto:
   ```sh
   npx create-next-app@latest meu-projeto
   ```
3. Acesse o diretório do projeto:
   ```sh
   cd meu-projeto
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
5. Abra o navegador e acesse `http://localhost:3000/` para visualizar a aplicação rodando.

### Section 5

- [Aula 1 - Criando rotas no Next.js](#nota-1---criando-rotas-no-nextjs)
- [Aula 2 - Compartilhar componentes entre páginas](#nota-2---compartilhar-componentes-entre-paginas)
- [Aula 3 - Criando componentes](#nota-3---criando-componentes)
- [Aula 4 - Estrutura de componentes no Next](#nota-4---estrutura-de-componentes-no-next)
- [Aula 5 - Componentes internos NextJs](#nota-5---componentes-internos-nextjs)
- [Aula 6 - Criar sistema de autenticação usando provedores federados](#nota-6---criar-sistema-de-autenticacao-usando-provedores-federados)
- [Aula 7 - Utilizando GetServerSideProps](#nota-7---utilizando-getserversideprops)
- [Aula 8 - Criando componente textArea](#nota-8---componente-textarea)
- [Aula 9 - Adicionando Task ao firebase](#nota-9---adicionando-tasks-ao-firebase)

### Nota 1 - Criando rotas no Nextjs

Para criar paginas dentro do nextJs, nos criamos dentro de src/pages/"pasta com nome da rota".
Dentro da pasta que demos o nome da rota criamos um dois arquivos, o **index.tsx**, onde adicionaremos
as tags e componentes da pagina e o **styles.module.css** onde anexamos as classes de nossos objetos.

![alt text](image-1.png)

Acima vemos a rota dashbord criada

### Nota 2 - Compatilhar componentes entre páginas

[Voltar ao topo](#sumário)

O compartilhamento de componentes entre todas as rotas na nossa aplicação, no Next é feito no arquivo **src/pages/\_app.tsx**, como pode ser visto no exemplo abaixo.

```javascript
<>
  <header />
  <Component {...pageProps} />
</>
```

### Nota 3 - Criando componentes

[Voltar ao topo](#sumário)
Dentro de src criamos a pasta "Components" onde adicionamos os components que usaremos
na nossa aplicação, a estrura das pastas arquivos criados deve ser:

![alt text](image-2.png)

### Nota 4 - Estrutura de componentes no Next

[Voltar ao topo](#sumário)
A função que da origem aos componentes no Next é do tipo:

```javascript
export default function "Nome do componente/pagina" () {
    return (
        tags
    )
}
```

### Nota 5 - Componentes internos NextJs

[Voltar ao topo](#sumário)
Use componentes prontos do next como o `<Image/>` e o `<Head>`. Não se esqueça de
priorizar o carregamento da imagem com o atributo "priority" do componente `<Image/>`

### Nota 6 - Criar sistema de autenticação usando provedores federados

[Voltar ao topo](#sumário)
Para criar um sistema de login usando provedores confederados no next, usamos o pacote nextAuth

- No terminal digite:

  ```
      npm install next-auth
  ```

- Crie na pasta pages crie a rota **/pages/api/auth/[...nextauth].ts** !  
  Lembrando que o nome do arquivo na pasta deve ser idêntico ao mostrado acima, senão dará erro.

- Configure compartilhamento do estado da sessão fazendo:

  ```javascript
  import { SessionProvider } from "next-auth/react";

  export default function App({
    Component,
    pageProps: { session, ...pageProps },
  }) {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }
  ```

- Agora devemos escolher no arquivo [...nextauth].ts qual o provedor queremos usar na
  nossa aplicação. Por exemplo, o github.

  ```javascript
  import NextAuth from "next-auth";
  import GithubProvider from "next-auth/providers/github";

  export const authOptions = {
    // Configure one or more authentication providers

    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      // ...add more providers here
    ],
  };

  export default NextAuth(authOptions);
  ```

- As variaveis de ambiente **clientId, clientSecret** devem ser obtidas no site do provedor que
  escolheu usar no seu projeto e adicionadas ao arquivo .env que criamos na raiz do projeto.

- Para utilizar estado de autenticação do usuário fazermos.

  ```javascript
  import { useSession, signIn, signOut } from "next-auth/react";

  export default function Component() {
    const { data: session, status } = useSession();

    // Verificamos o status do usuário, logado ou carregando
    {
      status === "loading" ? (
        <>
          <p>Carregando...</p>
        </>
      ) : session ? (
        <div className={styles.greatingContainer}>
          <p className={styles.greatingUser}>Olá {userName} </p>
          <button className={styles.loginButton} onClick={() => signOut()}>
            Sair
          </button>
        </div>
      ) : (
        <button className={styles.loginButton} onClick={() => signIn("google")}>
          Acessar
        </button>
      );
    }
  }
  ```

### Nota 7 - Utilizando GetServerSideProps

[Voltar ao topo](#sumário)
O getServerSideProps no Next.js é usado para renderizar uma página no lado do servidor a cada requisição. Aqui está uma explicação simples:

**Quando usar?**

- Quando você precisa de dados dinâmicos que mudam a cada requisição.
- Para páginas que dependem de dados sensíveis ou que devem sempre estar atualizados.
- Exemplo: páginas com informações de usuários logados, dados que vêm de uma API que muda com frequência, ou exibição de dados baseados na localização do usuário.

**Por que usar?**

- Garante que os dados estão sempre atualizados no momento em que o usuário acessa a página.
- É útil para SEO, porque os dados já estão disponíveis no HTML gerado no servidor.

**Como usar?**

- O getServerSideProps é uma função exportada dentro de uma página no Next.js.
- Ele roda no servidor, não no cliente.
- Retorna os dados como props, que o componente da página pode usar.

**Exemplo**

```javascript
export async function getServerSideProps(context) {
  // Fetch de dados no servidor
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  // Retorna os dados como props
  return {
    props: {
      data, // Será acessível no componente
    },
  };
}

export default function Page({ data }: { data: "tipo de dado" | null }) {
  return (
    <div>
      <h1>Dados do servidor:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

Todo processo mostrado acima é feito no servidor, ele envia a página já pronta para o navegador imprimir em tela

**Exemplo 2 - Usando na autenticação com provedores Federados**

No exemplo abaixo, vemos como verificar o estado de autenticação do usuário para saber se ele tem acesso a determinada rota.

```javascript
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

// Executado sempre do lado do servidor
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req }); // Aqui obtemos os dados da sessão do usuário

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
```

### Nota 8 - Componente textArea

[Voltar ao topo](#sumário)
Aqui criamos o componente textArea que será utilizado bastante dentro da nossa aplicação, e em função disso, usamos
a propriedade `{ ...rest }: HTMLProps<HTMLTextAreaElement>` uma vez que queremos deixar que o desenvolvedor atribua
qualquer propriedade ao componente via `<TextArea placeholder={...}/>`. A diretiva `HTMLProps<HTMLTextAreaElement` garante que o textArea não possa receber nenhum outro tipo de atributo que não seja o da tag textArea.

```javascript
import { HTMLProps } from "react";
import styles from "./styles.module.css";

export default function Textarea({ ...rest }: HTMLProps<HTMLTextAreaElement>) {
  return (
    <textarea className={styles.textarea} name="" id="" {...rest}></textarea>
  );
}
```

### Nota 9 - Adicionando Tasks ao firebase

[Voltar ao topo](#sumário)

Aqui vamos usar o firebase para salvar nossas tarefas, para isso precisamos instalar o pacote do firebase na nossa aplicação e configurar um projeto no firebase

    npm i firebase

Acesse o site do firebase, e crie um projeto. Após criar esse projeto, integre-o ao nextJS.

Na pasta `src` crie uma pasta chamada **firebase** e dentro dela um arquivo chamado **firebaseConnection.ts**. Dentro
desse arquivo, vamos adicinar o código de integração que recebemos no momento da criação do projeto no firebase.

```javascript
import { initializeApp } from "firebase/app";

import { getFirestore, db, addDoc, collection, onSnapshot, query, where, orderBy } from "firebase/firestore"; // importamos o FireStore

const firebaseConfig = {
  apiKey: "Dados sigilosos"
  authDomain: "Dados sigilosos"
  projectId: "Dados sigilosos"
  storageBucket: "Dados sigilosos"
  messagingSenderId: "Dados sigilosos"
  appId: "Dados sigilosos"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app); // Inicializamos base de dados

export default { db }; // importamos base de dados
```

No rota na qual você quer adicionar dados ao firestore, importe o `db` e faça:

### dashBoard Route

```javascript
import {
  db,
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "../../firebase/firebaseConnection";

// Função de envio do form para salvar dados na base de dados
async function handleSubmit(event: FormEvent) {
  event.preventDefault();

  if (input === "") return;

  try {
    await addDoc(collection(db, "userTasks"), {
      tarefa: input, // state que recebe o valor do input
      public: publicTask, // state que recebe o valor do check input
      createdAt: Date.now(),
      user,
    });

    setInput("");
    setPublicTask(false);
  } catch (error) {
    console.log("Erro ao adicionar documento", error);
  }
}
```

# Tarefas-nextJs

Tarefas é um projeto em Next.js onde usuários podem cadastrar tarefas e receber comentários de outros usuários. A autenticação é feita via Google OAuth usando NextAuth, com dados armazenados no Firebase.
b8dd0f0c48458248c01de25753b7680de129bea4


# Section 6

- [Aula 55 - Conhecendo server components](#aula-55---conhecendo-server-components)
- [Aula 56 - Revendo componentes](#aula-56---revendo-componentes)
- [Aula 57 - Conhecendo loading](#aula-57---conhecendo-loading)
- [Aula 58 - Evoluindo com layouts](#aula-58---evoluindo-com-layouts)
- [Aula 59 - Usando client components dentro de server components](#aula-59---usando-client-components-dentro-de-server-components)
- [Aula 60 - Criando páginas dinâmicas](#aula-60---criando-páginas-dinâmicas)
- [Aula 61 - Criando grupo de páginas](#aula-61---criando-grupo-de-páginas)
- [Aula 62 - Cache e revalidade](#aula-62---cache-e-revalidade)
- [Aula 63 - Error page](#aula-63---error-page)
- [Aula 64 - Not found page](#aula-64---not-found-page)
- [Aula 65 - Aplicando metadata](#aula-65---aplicando-metadata)


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

Agora quando a API demorar responder com os dados, será mostrado "Carregando..." na página ao invés da página ficar carregando e esperando a resposta da API. Importante destacar aqui é que, para adicionar loading em outros server components, fazemos o processo mostrado acima, porém criamos o arquivo loading no mesmo diretório do arquivo `pages.tsx`.

Nesta aula ainda vimos como usar o sistema de **layout** do next, que é um tipo especial de server component, uma vez que é compartilhado entre as páginas da aplicação sendo visivel atrás da nevegação entre as páginas. É usado normalmente para criar headers, navbars, sidebars, footers, que são os elementos que normalmente permanecem o mesmo em todas as rotas da aplicação sem que precise de re-renderização. **Layouts** são colocados dentro do arquivo `layout.tsx`

```javascript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="pt-BR">
      <body>
        -> Layouts components vão dentro da tag body
        {children}
      </body>
    </html>
  );
}
```

O **Metadata** dentro do componente é onde adicionamos metadados do nosso projeto que serão responsáveis por auxiliar os motores de busca do google e encontrar e recomendar nosso site.

### Criando menu como layout

Na pasta `src` crie a pasta `components` e dentro dela o arquivo, Navbar.jsx.

```javascript
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/contato"}>Contato</Link>
      </nav>
    </header>
  );
}
```

Dentro do layout vamos importar o componente.

```javascript
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="pt-BR">
      <Navbar />
      <body>{children}</body>
    </html>
  );
}
```

no exemplo acima, veremos os links em todas as rotas da aplicação.

## Aula 58 - Evoluindo com layouts

Nesta aula aprendemos como podemos criar layouts aninhados dentro de páginas. Por exemplo, caso tenhamos uma rota

    /dashboard

no nosso projeto, podemos criar estruturas que serão compartilhadas entre essa rota e rotas aninhadas a ela. Vejamos um exemplo para simplificar as coisas. Suponha que tenhamos a rota mencionada acima e detro da pasta `dashboard`, criamos outra pasta com nome `settings`. Na pratica o que estamos fazendo é criando uma rota aninhada que terá como endpoint a url:

    /dashboard/settings

Caso tenhamos adicinado um layout.tsx dentro da pasta dashboard, todo componente que adicionarmos dentro desse layout será compartilhado somente entre as rotas dashboard e suas paginas aninhadas. Veja o exemplo de layout.tsx criado dentro da pasta `dashboard` abaixo:

```javascript
export const metadata = {
  title: "Minha pagina dashboard",
  description: "Essa é a minha pagina de dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <h3>Meu layout aninhado</h3>
      {children}
    </>
  );
}
```

## Aula 59 - Usando client components dentro de server components

A integração entre um server component e client component é realizado por meio de props, onde dentro do server component importamos o client component, que é criado exatamente como fazemos no react, dentro da pasta components, e então adicionamos o client component no local adequado dentro do server component e caso haja algum dado para a ser manipulado pelo client component, esse deve ser recebido via props.

### client component

```javascript
"use client";

export function Button({ repoName }) {
  return (
    <>
      <button>{repoName}</button>
    </>
  );
}
```

### server component

```javascript

// Importamos client component
import Button from '@/components/button'

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
    await new Promise((res) => { setTimeout(res, 1000) })
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
      {data.map((item) => (
        <p key={item.id}><strong>Repositório: </strong>{item.name}</p>
        <Button repoName={item.name}>
      ))}
    </div>
  );
}

```

Agora dentro do client components podemos utilizar hooks e alterar estados de variaveis normalmente. Essa integração pode ser muito útil para o caso de precisarmos adicinar interatividade na nossa aplicação.

## Aula 60 - Criando páginas dinâmicas

Temos duas formas diferentes de criarmos páginas dentro do nextJs.

1️⃣ Caso estejamos utilizando o **App Routes**(app/) devemos fazer:

      app/repos/[id]/page.tsx

2️⃣ Caso estejamos utilizando o **Pages Routes**(pages/) fazemos:

      pages/repos/[id].tsx

Aqui utilizamos o primeiro caso, ou seja, dentro da rota **repos** criamos uma sub rota que será uma pagina dinamica. Dentro da rota dinamica criamos
uma página utilizando o formato padrão de páginas no next.

```javascript
interface ParamsProps {
  params: {
    id: string,
  };
}

export default function UniqueRepo({ params }: ParamsProps) {
  if (!params?.id) return <p>Carregando...</p>;

  return (
    <>
      <div>
        <h1>pagina dinamica {params.id}</h1>
      </div>
    </>
  );
}
```

## Aula 61 - Criando grupo de paginas

Caso queiramos criar um grupo de páginas relacionadas num único diretório, devemos criar uma nova pasta com o nome entre parenteses () e mover as rotas(pastas) para dentro do grupo de páginas desejado. Abaixo criamos 4 grupos de paginas e dentro delas adicinamos as rotas da aplicação. Todas as rotas serão acessiveis, porém essa tecnica mantem o código mais organizado.

┣ 📂 (Admin)  
 ┃ ┣ 📂 users  
 ┃ ┣ 📂 dashboard  
 ┃ ┗ 📜 layout.tsx

┣ 📂 (Client)  
 ┃ ┣ 📂 profile  
 ┃ ┣ 📂 orders  
 ┃ ┗ 📜 layout.tsx

┣ 📂 (Private)  
 ┃ ┣ 📂 settings  
 ┃ ┣ 📂 payments  
 ┃ ┗ 📜 layout.tsx

┣ 📂 (Public)  
 ┃ ┣ 📂 home  
 ┃ ┣ 📂 about  
 ┃ ┗ 📜 layout.tsx

┗ 📜 layout.tsx

## Aula 62 - Cache e revalidade

Para evitar que haja busca de dados no nossa API de maneira descessária, poder utilizar o revalidate ou o cache. Ambos são **options** passadas como argumento para o método fetch, sendo o cache usado como padrão dentro do método, o que significa que os dados obtidos numa requisição são armazenados pelo `fetch`. O _revalidate_ é o tempo que um dado cacheado pelo fetch tem de vida antes do servidor ter de fazer outra requisição para os dados atualizados em cache novamente. Para adicionar esse recurso ao nosso projeto fazemos

```javascript
const data = await fetch("https://api.github.com/users/igorfonseca05/repos", {
  cache: "force-cache",
  revalidate: 60,
});
```

No exemplo acima o dado será armazenado em cache e revalidado a cada 60 segundos, ou seja, ao final dos 60 segundos, o servidor irá fazer uma nova solicitação a API externa a salvar dos novos dados em cache por mais 60 segundos.

### Quando usar esse recurso?

A tabela abaixo mostra como podemos decidir quando ou não usar o recurso de cache e revalidate

| Tipo de página                              | Dados mudam?   | Melhor opção                 |
| ------------------------------------------- | -------------- | ---------------------------- |
| Página estática (ex: Sobre, Termos de uso.) | Não            | `cache: 'force-cache'`       |
| Lista de produtos                           | Ocasionalmente | `next: { revalidate: 3600 }` |
| Notícias                                    | Frequentemente | `next: { revalidate: 300 }`  |
| Dashboard em tempo real                     | Sempre         | `cache: 'no-store'`          |

## Aula 63 - Error page

Podemos criar páginas de erro dentro do nosso projeto nextJS, que será mostrado em tela caso de algum erro numa requisição, por exemplo. Dentro da pasta que aninha a página que vc quer adicionar a página de erro crie o arquivo `error.tsx`.

#### Error.tsx

```javascript
"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error,
  reset: () => void,
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <p>{error}</p>
      <button onClick={() => reset()}> Try again </button>
    </div>
  );
}
```

:warning: Páginas de error no nextJS deve sempre ser do tipo 'use client'

no código acima temos um componente de error que recebe dois parametros como props

1. **error** = Instancia do objeto de erro lançado sobre o erro
   - **error.message** = Mostra a mensagem de error original
   - **error.digest** = Um hash gerado automaticamente do erro lançado. Ele pode ser usado para corresponder ao erro correspondente em logs do lado do servidor.
2. **reset** = Funçao para tentar resetar a página

## Aula 64 - Not found page

Quando o usuário tenta acessar uma página que não existe na nossa aplicação, ele será redirecionado a uma página que não existe, podemos estilizar essa página criando um arquivo na raiz do projeto ou na rota chamado `not-found.tsx`. Dentro desse arquivo fazemos:

```javascript
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Página não encontrada</h2>
      <p>Essa página não foi encontrada</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
```

## Aula 65 - Aplicando metadata

Metadados são importantes para definir as tags `meta` e `link` dentro do HTML de modo a melhorar a visibilidade do nosso site em mecânismos de buscas, sendo eles suportados somente em server components. No nextjs existem duas formas de adicionar metadados à sua aplicação.

- **Metadados baseados em configuração**: exportar um objeto de metadado estático ou uma função dinamica `generateMetada` no layout.tsx ou `page.tsx`
- **Metadados baseados em arquivo**: Adicione arquivos especiais estáticos ou gerados dinamicamente aos segmentos de rota

### Static Metadata

Para definir metadados estáticos, exporte um objeto `Metadata` na `layout.tsx` ou `page.tsx` estática:

```javascript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "...", // Define o título da página
  description: "..", // Define a descrição da página
  keywords: ['nextjs', 'javascript'], // Define palavras-chave para SEO
  openGraph: {
    images: ['url1', 'url2', ...] // Define imagens para compartilhamento em redes sociais
  },
  robots: {
    index: true, // Permite que os motores de busca indexem a página
    follow: true, // Permite que os motores de busca sigam os links da página
    nocache: true, // Impede que a página seja armazenada em cache pelos motores de busca
    googleBot: {
      index: true, // Permite que o Google indexe a página
      follow: true, // Permite que o Google siga os links da página
      noimageIndex: true // Impede que o Google indexe imagens da página
    }
  }
};

export default function Page() {}
```

O código acima pode ser copiado e colado em todas as páginas server side do nosso projeto adicionando dados especificos da página, como title e outros.

## Aula 66 - Relembrando conhecimentos

Nesta aula revisamos o que vimos acima

## Aula 67 - Conhecendo Api routes

Podemos usar a pasta Api routes para criar rotas backend dentro do nosso projeto. Para isso criamos uma pasta chamada `api` dentro da pasta `app`. Dentro da `api` criamos uma pasta que vai receber o nome da rota, por exemplo, se quisermos a rota **user** na nossa api devemos fazer

    app/
      └── api/
           └── user/
                  └── route.ts

Agora dentro do route.ts fazemos

```javascript
import { NextResponse } from "next/server";

let tarefas = ["comprar carro", "casa"];

export async function GET(request: Request) {
  return NextResponse.json(tarefas);
}
```

para acessar essa rota dentro da nossa aplicação, fazemos:

    http://localhost:3000/api/user

## Aula 66 - Evoluindo api routes

Podemos usar outros métodos HTTP

### GET

```javascript
import { NextResponse } from "next/server";

let tarefas = ["comprar carro", "casa"];

export async function GET(request: Request) {
  return NextResponse.json(tarefas);
}
```

### POST

```JAVASCRIPT
export async function POST(request: Request) {
  const data = await request.json(); // Dados que serão recebidos na API
  console.log(data);

  return NextResponse.json({'Aqui colocamos uma reposta(obj,arra,string...)'});
}
```

### PUT

```JAVASCRIPT
export async function PUT(request: Request) {
    const {searchParams} = new URL(request.url) //Pega search params
    const index = searchParams.get('index');

    const data = await request.json();

    tarefas[Number(index)] = data.name

    return NextResponse.json({message: 'Tarefa atualizada com sucesso'})
}
```

### DELETE

```JAVASCRIPT
export async function DELETE(request: Request) {
    const {searchParams} = new URL(request.url) //Pega search params
    const index = searchParams.get('index'); // nome do seachParams que vc quer pegar

    const data = await request.json();

    tarefas[Number(index)] = data.name

    return NextResponse.json({message: 'Tarefa atualizada com sucesso'})
}
```

