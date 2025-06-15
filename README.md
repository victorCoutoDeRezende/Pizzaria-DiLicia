🍕 Pizzaria DiLicia

📖 Sobre o Projeto

A Pizzaria DiLicia é uma aplicação mobile completa desenvolvida em React Native com Expo. O projeto simula uma aplicação de uma pizzaria real, permitindo que os utilizadores criem contas, façam pedidos, consultem o seu histórico e encontrem a localização do restaurante. O principal objetivo foi criar uma experiência de utilizador fluida e funcional, implementando um sistema de gestão de dados totalmente autónomo e local.

A aplicação foi projetada para funcionar de forma 100% offline (após a instalação), utilizando o armazenamento local do dispositivo para simular um backend completo, garantindo que possa ser demonstrada em qualquer lugar, sem dependência de um computador ou de uma ligação à internet.

✨ Funcionalidades Principais

Sistema de Autenticação:

Registo e Login de utilizadores.

Os dados são guardados localmente de forma segura.

Sistema de logout para encerrar a sessão.

Realização de Pedidos:

Navegação por um cardápio dividido em categorias (Tradicional, Especial, etc.).

Cálculo de preço dinâmico com base no tamanho da pizza selecionado (Pequena, Média, Grande, Gigante).

Fluxo de compra completo, desde a seleção da pizza até à confirmação do pedido.

Gestão de Pedidos do Utilizador:

Tela "Os Meus Pedidos" que exibe um histórico de todos os pedidos realizados pelo utilizador autenticado.

Funcionalidade de edição de pedidos em tempo real, permitindo alterar dados como nome, endereço, telefone, sabor e tamanho da pizza.

Opção para cancelar/eliminar um pedido do histórico.

Telas Adicionais:

Fale Conosco: Um formulário de contato para os utilizadores enviarem dúvidas ou sugestões.

Restaurantes: Exibe a localização da pizzaria num mapa interativo, utilizando React Native Maps para uma experiência nativa no telemóvel e uma WebView para compatibilidade na web.

🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e bibliotecas:

Framework Principal: React Native com Expo

Linguagem: JavaScript (ES6+)

Gestão de Estado: React Hooks (useState, useEffect) e Hooks Customizados (ex: useAuth, useOrders).

Navegação: Sistema de navegação simples baseado em estado para alternar entre telas.

Armazenamento de Dados (Backend Local): @react-native-async-storage/async-storage para persistir todos os dados da aplicação (utilizadores e pedidos) diretamente no dispositivo.

Mapas:

react-native-maps para uma experiência nativa de mapas no iOS e Android.

react-native-webview para exibir o mapa em ambientes web.

Estilização: StyleSheet do React Native para uma estilização performática e componentizada.

⚙️ Como Executar o Projeto

Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git

Entre na pasta do projeto:

cd nome-do-repositorio

Instale as dependências:

npm install

Instale as bibliotecas nativas necessárias:

npx expo install react-native-webview
npx expo install react-native-maps
npx expo install @react-native-async-storage/async-storage

Inicie o servidor de desenvolvimento:

npx expo start

Leia o QR Code com a aplicação Expo Go no seu celular iOS ou Android para testar.
npx expo install @react-native-async-storage/async-storage

Inicie o servidor de desenvolvimento:

npx expo start

Leia o QR Code com a aplicação Expo Go no seu telemóvel iOS ou Android para testar.
