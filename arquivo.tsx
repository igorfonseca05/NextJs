

/**Vamos revisar o que aprendemos até aqui */

/**
 * 1- Para criar paginas dentro do nextJs, nos criamos dentro de src/pages/"pasta com nome da rota"
 * dentro da pasta que demos o nome da rota criamos um dois arquivos, o index.tsx, onde adicionaremos
 * as tags e componentes da pagina e o styles.module.css onde anexamos as classes de nossos objetos.
 
 * 2- O sistema de roteamento dentro do nextJS é feito dentro do arquivo src/pages/_app.tsx
 * Onde criamos um <></> e dentro dele adicionamos os componentes que queremos compartilhar
 * entre as paginas, por exemplo
 * 
 * <> 
 * <Header/>
 * <Component {...pageProps} />
 * </>
 * 
 * 3- Dentro de src criamos a pasta "Components" onde adicionamos os components que usaremos
 * na nossa aplicação, a estrura das pastas arquivos criados deve ser:
 *    
 *      Src
 *      |--- "Pasta com nome do componente"
 *            |---   index.tsx
 *            |---styles.module.css
 * 
 * 4- A função que da origem aos componentes no Next é do tipo:
 * 
 *         export default function "Nome do componente/pagina" () {
 *              return (
 *                  tags
 *               )
 *         }
 * 
 * 5- Use componentes prontos do next como o <Image> e o <Head>, não se esqueça de
 * priorizar o carregamento da imagem com o atributo "priority" do componente <Image/>
 * 
 * 6- Para criar um sistema de login usando provedores confederados no next, usamos o pacote
 * nextAuth
 * 
 *  6.1 -> No terminal digite: npm install next-auth
 *  6.2 -> Crie na pasta pages a rota que termina com o arquivo [...nextauth].ts: /pages/api/auth/[...nextauth].ts
 *         lembrando que o nome do arquivo na pasta deve ser identico ao mostrado acima, senão dará erro.
 *  6.3 -> Configure compartilhamento do estado da sessão fazendo:
 * 
        import { SessionProvider } from "next-auth/react"
         
        export default function App({Component, pageProps: { session, ...pageProps }}) {

        return (
            <SessionProvider session={session}>
            <Component {...pageProps} />
            </SessionProvider>
        )
    }
 *          
 *  6.4 -> Agora devemos escolher no arquivo [...nextauth].ts qual o provedor queremos usar na
 *          nossa aplicação. Por exemplo, o github.
 * 
                import NextAuth from "next-auth"
                import GithubProvider from "next-auth/providers/github"

                export const authOptions = {

                // Configure one or more authentication providers

                providers: [
                    GithubProvider({
                    clientId: process.env.GITHUB_ID,
                    clientSecret: process.env.GITHUB_SECRET,
                    }),
                    // ...add more providers here
                ],
            }

                export default NextAuth(authOptions)


 *  6.5 -> As variaveis de ambiente clientId, ClientSecret devem ser obtidas no site do provedor que
            escolheu usar no seu projeto e adicionadas ao arquivo .env que criamos na raiz do projeto.

 *  6.6 -> Para utilizar estado de autenticação do usuário fazermos. 
            
            import { useSession, signIn, signOut } from "next-auth/react"

            export default function Component() {

            const { data: session } = useSession()

            if (session) {
                return (
                <>
                    Signed in as {session.user.email} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                </>
                )
            }
            return (
                <>
                Not signed in <br />
                <button onClick={() => signIn()}>Sign in</button>
                </>
            )
        }

 *  6.7 -> As variaveis de ambiente clientId, ClientSecret devem ser obtidas no site do provedor que
            escolher usar no seu projeto.
 *  6.8 -> As variaveis de ambiente clientId, ClientSecret devem ser obtidas no site do provedor que
            escolher usar no seu projeto.

 */