#🍕 Pizzaria DiLicia
#📖 Sobre o Projeto
Pizzaria DiLicia é uma aplicação mobile completa desenvolvida em React Native com Expo. Ela simula uma pizzaria real, permitindo que os utilizadores:

Criem contas

Façam pedidos

Consultem seu histórico

Encontrem a localização da pizzaria

O foco principal é oferecer uma experiência fluida e 100% offline, utilizando armazenamento local para simular um backend completo.

#✨ Funcionalidades Principais
#🔐 Sistema de Autenticação
Registro e login de utilizadores

Dados armazenados localmente com segurança

Logout para encerrar sessões

#🍕 Realização de Pedidos
Cardápio dividido em categorias (Tradicional, Especial, etc.)

Cálculo de preço dinâmico por tamanho (Pequena, Média, Grande, Gigante)

Fluxo completo de compra: seleção → confirmação

#📦 Gestão de Pedidos
Tela "Meus Pedidos" com histórico completo

Edição em tempo real: nome, endereço, telefone, sabor e tamanho

Cancelamento/remoção de pedidos do histórico

#📞 Telas Adicionais
Fale Conosco: Formulário para dúvidas ou sugestões

Restaurantes: Localização via mapa interativo (nativo + WebView)

#🚀 Tecnologias Utilizadas
Framework: React Native com Expo

Linguagem: JavaScript (ES6+)

#📦 Gestão de Estado
useState, useEffect e hooks personalizados (useAuth, useOrders)

#🧭 Navegação
Sistema simples baseado em estado

#💾 Armazenamento Local
@react-native-async-storage/async-storage

#🗺️ Mapas
react-native-maps (nativo)

react-native-webview (compatibilidade web)

#🎨 Estilização
StyleSheet do React Native

#⚙️ Como Executar o Projeto
bash
Copiar
Editar
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Acesse a pasta
cd nome-do-repositorio

# Instale as dependências
npm install

# Instale as bibliotecas nativas
npx expo install react-native-webview
npx expo install react-native-maps
npx expo install @react-native-async-storage/async-storage

# Inicie o servidor de desenvolvimento
npx expo start
Use a aplicação Expo Go no seu dispositivo Android/iOS para escanear o QR Code e testar.
