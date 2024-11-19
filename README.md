# E-commerce Frontend

Este repositório contém o código-fonte do **frontend** de uma aplicação de e-commerce. Desenvolvido com **Vite**, o projeto foca em desempenho, design responsivo e integração com o backend para oferecer uma experiência de usuário eficiente.

## 🛠️ Tecnologias Utilizadas

- **Vite**: Ferramenta moderna para build e desenvolvimento rápido.
- **React**: Biblioteca para construção de interfaces de usuário.
- **JavaScript** e **CSS**: Linguagens principais para interatividade e estilização.
- **Fetch API**: Utilizada para consumo de dados da API backend.

## ⚙️ Funcionalidades

- **Catálogo de Produtos**: Apresenta produtos com imagem, preço e descrição.
- **Carrinho de Compras**: Possibilita adicionar, remover e atualizar itens.
- **Finalização de Compra**: Comunicação com o backend para processar pedidos.
- **Pesquisa e Filtros**: Facilita a localização de produtos específicos.
- **Design Responsivo**: Compatível com diferentes tamanhos de tela.

## 📂 Estrutura do Projeto

A organização das pastas no projeto segue boas práticas, conforme detalhado abaixo:
```
e-commerce-frontend/ 
├── assets/  Recursos estáticos, como imagens e ícones
├── components/  Componentes reutilizáveis da interface
├── Global/  Configurações globais, como estilos ou temas
├── pages/  Páginas principais da aplicação
├── services/  Módulos para consumo de APIs e lógica de integração
├── utils/  Funções utilitárias e helpers
└── main.jsx  Ponto de entrada do aplicativo
```
## 👥 Colaboradores

Este projeto foi desenvolvido com a colaboração de:

- 👨‍💻 Danilo Paravani 
- 👨‍💻 Enzo Janssen
- 👨‍💻 Erick Ramos  
- 👩‍💻 Francieli  
- 👨‍💻 Gabriel Willian  
- 👨‍💻 Gabriel Bertollo
- 👨‍💻 Henrique Junqueira  
- 👨‍💻 José Carlos  
- 👨‍💻 Luiz Nonato  
- 👨‍💻 Marlon Muller  

## 🌐 Rotas do Projeto

A aplicação utiliza **React Router** para gerenciar as rotas. Abaixo estão listadas as principais rotas, suas descrições e as condições de acesso (privadas ou públicas):

| Rota                      | Descrição                                                       | Tipo       |
|---------------------------|-----------------------------------------------------------------|------------|
| `/`                       | Página inicial com o catálogo de produtos.                    | Pública    |
| `/purchase-sucess`        | Página de confirmação de compra bem-sucedida.                 | Pública    |
| `/login`                  | Página de login para autenticação.                            | Pública    |
| `/register`               | Página de registro de novos usuários.                         | Pública    |
| `/about`                  | Página com informações sobre o e-commerce.                    | Pública    |
| `/product/:id`            | Página de detalhes de um produto específico.                  | Pública    |
| `/contact`                | Página de contato.                                            | Pública    |
| `/cart`                   | Página do carrinho de compras.                                | Privada    |
| `/checkout`               | Página para finalização de compras.                          | Privada    |
| `/account`                | Página de gerenciamento da conta do usuário.                 | Privada    |
| `/payment`                | Página com informações de pagamento.                         | Privada    |
| `/order`                  | Página com detalhes dos pedidos do usuário.                  | Privada    |
| `/category/:category`     | Página para explorar produtos por categoria.                 | Privada    |
| `/category/explore`       | Página para explorar todas as categorias.                    | Privada    |
| `/category/bestselling`   | Página com os produtos mais vendidos.                        | Privada    |
| `/manager`                | Área administrativa com sub-rotas.                           | Privada    |
| `/manager/register`       | Sub-rota para registro de novos produtos.                    | Privada    |
| `/manager/update`         | Sub-rota para buscar produtos para edição.                   | Privada    |
| `/manager/update/:id`     | Sub-rota para editar um produto específico.                  | Privada    |
| `/logout`                 | Rota para realizar logout do sistema.                        | Privada    |
| `*`                       | Página de erro 404 para rotas não encontradas.               | Pública    |

Observações
- **Rotas Privadas**: Exigem autenticação para acesso. Caso o usuário não esteja autenticado, ele será redirecionado para a página de login.
- **Rotas Dinâmicas**: Algumas rotas incluem parâmetros, como `:id` e `:category`, que são utilizados para renderizar conteúdos específicos.

Essa estrutura garante uma navegação organizada e segura, respeitando as permissões de acesso.

## 🖥️ Como Executar

1. **Clone o repositório**:  
   <code>git clone https://github.com/Projeto-Final-MaisPraTi/e-commerce-frontend.git  
   cd e-commerce-frontend</code>

2. **Instale as dependências**:  
   <code>npm install</code>

3. **Inicie o servidor de desenvolvimento**:  
   <code>npm run dev</code>

4. **Acesse a aplicação**:  
   Abra [http://localhost:5173](http://localhost:5173) no navegador.

## 📦 Build para Produção

Para gerar a versão de produção, execute:  
<code>npm run build</code>  
Os arquivos estarão na pasta <code>dist/</code>.

## 🚀 Roadmap

Planejamos expandir o projeto com as seguintes funcionalidades:
- Dashboard para gerenciamento de produtos.
- Integração com gateways de pagamento.
- Implementação de melhorias em acessibilidade.

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do repositório.
2. Crie uma branch para a sua funcionalidade: <code>git checkout -b minha-feature</code>.
3. Commit suas mudanças: <code>git commit -m 'Adicionei minha funcionalidade'</code>.
4. Envie para o repositório remoto: <code>git push origin minha-feature</code>.
5. Abra um Pull Request.

## 📜 Licença

Este projeto está sob a licença MIT. Consulte o arquivo <code>[LICENSE](LICENSE)</code> para mais detalhes.
