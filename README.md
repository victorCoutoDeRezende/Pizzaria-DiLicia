<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Pizzaria do Victor</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
            line-height: 1.6;
            background-color: #0d1117;
            color: #c9d1d9;
            padding: 20px 40px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            border: 1px solid #30363d;
            border-radius: 8px;
            padding: 24px;
            background-color: #161b22;
        }
        h1, h2 {
            border-bottom: 1px solid #30363d;
            padding-bottom: 10px;
            color: #58a6ff;
        }
        h1 {
            font-size: 2em;
        }
        h2 {
            font-size: 1.5em;
            margin-top: 30px;
        }
        p {
            margin-bottom: 16px;
        }
        a {
            color: #58a6ff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
        }
        code {
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
            font-size: 0.9em;
            background-color: rgba(110, 118, 129, 0.4);
            padding: 3px 6px;
            border-radius: 6px;
        }
        pre {
            background-color: #161b22;
            padding: 16px;
            border-radius: 6px;
            border: 1px solid #30363d;
            overflow-x: auto;
        }
        pre code {
            background-color: transparent;
            padding: 0;
        }
        strong {
            color: #c9d1d9;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin-top: 16px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1><span role="img" aria-label="pizza">🍕</span> Pizzaria do Victor - Aplicação Mobile</h1>
        
        <h2><span role="img" aria-label="book">📖</span> Sobre o Projeto</h2>
        <p>A <strong>Pizzaria do Victor</strong> é uma aplicação mobile completa desenvolvida em React Native com Expo. O projeto simula uma aplicação de uma pizzaria real, permitindo que os utilizadores criem contas, façam pedidos, consultem o seu histórico e encontrem a localização do restaurante. O principal objetivo foi criar uma experiência de utilizador fluida e funcional, implementando um sistema de gestão de dados totalmente autónomo e local.</p>
        <p>A aplicação foi projetada para funcionar de forma 100% offline (após a instalação), utilizando o armazenamento local do dispositivo para simular um backend completo, garantindo que possa ser demonstrada em qualquer lugar, sem dependência de um computador ou de uma ligação à internet.</p>

        <h2><span role="img" aria-label="sparkles">✨</span> Funcionalidades Principais</h2>
        <ul>
            <li><strong>Sistema de Autenticação:</strong>
                <ul>
                    <li>Registo e Login de utilizadores.</li>
                    <li>Os dados são guardados localmente de forma segura.</li>
                    <li>Sistema de logout para encerrar a sessão.</li>
                </ul>
            </li>
            <li><strong>Realização de Pedidos:</strong>
                <ul>
                    <li>Navegação por um cardápio dividido em categorias (Tradicional, Especial, etc.).</li>
                    <li>Cálculo de preço dinâmico com base no tamanho da pizza selecionado (Pequena, Média, Grande, Gigante).</li>
                    <li>Fluxo de compra completo, desde a seleção da pizza até à confirmação do pedido.</li>
                </ul>
            </li>
            <li><strong>Gestão de Pedidos do Utilizador:</strong>
                <ul>
                    <li>Tela "Os Meus Pedidos" que exibe um histórico de todos os pedidos realizados pelo utilizador autenticado.</li>
                    <li>Funcionalidade de <strong>edição de pedidos</strong> em tempo real, permitindo alterar dados como nome, endereço, telefone, sabor e tamanho da pizza.</li>
                    <li>Opção para <strong>cancelar/eliminar</strong> um pedido do histórico.</li>
                </ul>
            </li>
            <li><strong>Telas Adicionais:</strong>
                <ul>
                    <li><strong>Fale Conosco:</strong> Um formulário de contato para os utilizadores enviarem dúvidas ou sugestões.</li>
                    <li><strong>Restaurantes:</strong> Exibe a localização da pizzaria num mapa interativo, utilizando <strong>React Native Maps</strong> para uma experiência nativa no telemóvel e uma <code>WebView</code> para compatibilidade na web.</li>
                </ul>
            </li>
        </ul>

        <h2><span role="img" aria-label="rocket">🚀</span> Tecnologias Utilizadas</h2>
        <ul>
            <li><strong>Framework Principal:</strong> React Native com Expo</li>
            <li><strong>Linguagem:</strong> JavaScript (ES6+)</li>
            <li><strong>Gestão de Estado:</strong> React Hooks (<code>useState</code>, <code>useEffect</code>) e Hooks Customizados (ex: <code>useAuth</code>, <code>useOrders</code>).</li>
            <li><strong>Navegação:</strong> Sistema de navegação simples baseado em estado para alternar entre telas.</li>
            <li><strong>Armazenamento de Dados (Backend Local):</strong> <code>@react-native-async-storage/async-storage</code> para persistir todos os dados da aplicação (utilizadores e pedidos) diretamente no dispositivo.</li>
            <li><strong>Mapas:</strong>
                <ul>
                    <li><code>react-native-maps</code> para uma experiência nativa de mapas no iOS e Android.</li>
                    <li><code>react-native-webview</code> para exibir o mapa em ambientes web.</li>
                </ul>
            </li>
            <li><strong>Estilização:</strong> <code>StyleSheet</code> do React Native para uma estilização performática e componentizada.</li>
        </ul>

        <h2><span role="img" aria-label="gear">⚙️</span> Como Executar o Projeto</h2>
        <ol>
            <li><strong>Clone o repositório:</strong>
                <pre><code>git clone https://github.com/seu-usuario/nome-do-repositorio.git</code></pre>
            </li>
            <li><strong>Aceda à pasta do projeto:</strong>
                <pre><code>cd nome-do-repositorio</code></pre>
            </li>
            <li><strong>Instale as dependências:</strong>
                <pre><code>npm install</code></pre>
            </li>
            <li><strong>Instale as bibliotecas nativas necessárias:</strong>
                <pre><code>npx expo install react-native-webview
npx expo install react-native-maps
npx expo install @react-native-async-storage/async-storage</code></pre>
            </li>
            <li><strong>Inicie o servidor de desenvolvimento:</strong>
                <pre><code>npx expo start</code></pre>
            </li>
            <li>Leia o QR Code com a aplicação <strong>Expo Go</strong> no seu telemóvel iOS ou Android para testar.</li>
        </ol>

        <h2><span role="img" aria-label="hammer and wrench">🛠️</span> Para Gerar o <code>.apk</code></h2>
        <p>Para compilar a aplicação num ficheiro <code>.apk</code> executável e autónomo, siga os passos abaixo:</p>
        <ol>
            <li><strong>Instale o EAS CLI:</strong>
                <pre><code>npm install -g eas-cli</code></pre>
            </li>
            <li><strong>Configure o projeto:</strong>
                <pre><code>eas build:configure</code></pre>
            </li>
            <li><strong>Inicie a compilação:</strong>
                <pre><code>eas build --platform android --profile preview</code></pre>
            </li>
            <li>Após a conclusão, descarregue o <code>.apk</code> a partir do link fornecido e instale-o no seu dispositivo Android.</li>
        </ol>
    </div>
</body>
</html>
