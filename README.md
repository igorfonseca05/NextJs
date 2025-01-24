![alt text](public/next.png)

## Descrição

Este espaço é dedicado a anotações e resumos sobre recursos importantes do Next.js. O objetivo é criar uma referência prática para consultas futuras, facilitando a revisão de conceitos, funcionalidades e boas práticas. Aqui serão registrados pontos relevantes sobre estrutura de pastas, renderização (SSR, SSG, ISR), roteamento, API Routes, otimização de performance, e outros tópicos fundamentais. Essa coleção de informações será útil para resolver dúvidas rapidamente e acelerar o desenvolvimento de projetos com Next.js.

### Nota 1 - Criando rotas no Nextjs

Para criar paginas dentro do nextJs, nos criamos dentro de src/pages/"pasta com nome da rota".
Dentro da pasta que demos o nome da rota criamos um dois arquivos, o **index.tsx**, onde adicionaremos
as tags e componentes da pagina e o **styles.module.css** onde anexamos as classes de nossos objetos.

![alt text](image-1.png)

Acima vemos a rota dashbord criada

### Nota 2 - Compatilhar componentes entre páginas

O compartilhamento de componentes entre todas as rotas na nossa aplicação, no Next é feito no arquivo **src/pages/\_app.tsx**, como pode ser visto no exemplo abaixo.

```javascript
<>
  <header />
  <Component {...pageProps} />
</>
```

### Nota 3 -

Dentro de src criamos a pasta "Components" onde adicionamos os components que usaremos
na nossa aplicação, a estrura das pastas arquivos criados deve ser:

![alt text](image-2.png)

### Nota 4 - Estrutura de componentes/ páginas no Next

A função que da origem aos componentes no Next é do tipo:

```javascript
export default function "Nome do componente/pagina" () {
    return (
        tags
    )
}
```

### Nota 5 - Componentes internos NextJs

Use componentes prontos do next como o `<Image/>` e o `<Head>`. Não se esqueça de
priorizar o carregamento da imagem com o atributo "priority" do componente `<Image/>`

### Nota 6 - Criar sistema de autenticação usando provedores federados(Google, Github...)

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
    const { data: session } = useSession();

    if (session) {
      return (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      );
    }
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }
  ```
