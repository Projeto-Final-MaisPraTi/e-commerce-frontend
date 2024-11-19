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

e-commerce-frontend/ 
**├── assets/ # Recursos estáticos, como imagens e ícones**
**├── components/ # Componentes reutilizáveis da interface**
**├── Global/ # Configurações globais, como estilos ou temas**
**├── pages/ # Páginas principais da aplicação**
**├── services/ # Módulos para consumo de APIs e lógica de integração**
**├── utils/ # Funções utilitárias e helpers**
**└── main.jsx # Ponto de entrada do aplicativo**


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
<code>
npm run build
</code>  
Os arquivos estarão na pasta <code>dist/</code>.

## 🚀 Roadmap

Planejamos expandir o projeto com as seguintes funcionalidades:
- Autenticação de usuários (login e cadastro).
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
