

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
 *         lembrando que deve ser identico ao mostrado acima, senão dará erro.
 *  6.3 -> 
 *  6.4 -> No terminal digite: npm install next-auth
 *  6.5 -> No terminal digite: npm install next-auth
 * 
 */