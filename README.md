# Recanto-Bela-Vista

<div align="center">
  <img src="img/recanto-belavistalogo.png" alt="Logo do Recanto Bela Vista" width="250"/>
</div>

<h1 align="center">Website - Recanto Bela Vista</h1>

Este é um projeto de website estático (landing page) desenvolvido para um cliente (Recanto Bela Vista) para divulgar seus serviços de aluguel de espaço para eventos.

O projeto foi **concluído** conforme o briefing, apresentando um design responsivo, galeria de fotos e seções de serviços. O cliente optou por não hospedar o site no momento, e o projeto agora serve como uma peça de portfólio.

## 🌟 Destaque Tecnológico: Tailwind CSS

Diferente de um site com CSS puro, este projeto foi construído usando **Tailwind CSS**.

Isso significa que a estilização é feita através de classes utilitárias diretamente no HTML, o que permite um desenvolvimento muito mais rápido e um CSS final (`output.css`) otimizado e "purgado" (removendo tudo o que não foi usado).

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica.
* **Tailwind CSS:** Framework CSS "utility-first" para estilização.
* **Node.js / npm:** Usado para gerenciar as dependências de desenvolvimento (como o próprio Tailwind).
* **JavaScript (ES6+):** Para interatividade (ex: menu mobile) no `script.js`.
* **Slick Carousel:** Biblioteca (ver `slick.min.js`) usada para a galeria de fotos (`/imgGaleria`).

## 📂 Estrutura do Projeto

A estrutura é focada na compilação do Tailwind:

* **`/` (Raiz):** Contém o `index.html` (página principal), `propaganda.html` (página secundária) e os arquivos de configuração `tailwind.config.js` e `package.json`.
* **`css/`:**
    * `input.css`: O arquivo-fonte onde as diretivas do Tailwind (`@tailwind base`) são escritas.
    * `output.css`: O arquivo **gerado** pelo Tailwind, que é o único CSS que o `index.html` realmente lê.
    * `slick.css`: Estilos da biblioteca do carrossel.
* **`js/`:** Contém os scripts das bibliotecas (`slick.min.js`) e o script customizado (`script.js`).
* **`img/` e `imgGaleria/`:** Contém todos os ativos visuais (logos, fotos do local).
* **`node_modules/`:** (Deve estar no `.gitignore`) Pasta gerada pelo `npm install` que contém as dependências de desenvolvimento, como o Tailwind CSS.

## 🏃 Como Executar Localmente (e Ver o Site)

Como este projeto usa Tailwind, você não pode simplesmente abrir o `index.html` (o `output.css` pode não estar lá). Você precisa "compilar" o CSS primeiro.

**Pré-requisito:** Você precisa ter o [Node.js](https://nodejs.org/pt-br) instalado.

1.  **Clonar o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/RecantoBealVista.git](https://github.com/seu-usuario/RecantoBealVista.git)
    cd RecantoBealVista
    ```

2.  **Instalar as dependências (Tailwind):**
    Este comando vai ler o `package.json` e baixar o Tailwind (e qualquer outra dependência) na pasta `node_modules`.
    ```bash
    npm install
    ```

3.  **Compilar o CSS (Modo "Build"):**
    Este comando (geralmente configurado no `package.json`) executa o Tailwind, que lê o `input.css` e gera o `output.css` final.
    ```bash
    npm run build
    ```
    *(Se você não tiver um script "build", o comando direto do Tailwind é `npx tailwindcss -i ./css/input.css -o ./css/output.css`)*

4.  **Abrir o site:**
    Após o `output.css` ser gerado, basta dar um **duplo clique no arquivo `index.html`** para abri-lo no seu navegador.

## 👨‍💻 Autor

Este projeto foi desenvolvido como um trabalho freelance por:

**Dimas Aparecido Rabelo de Souza**
* **LinkedIn:** [linkedin.com/in/dimasrabelo/](https://www.linkedin.com/in/dimasrabelo/)
* **GitHub:** [github.com/DimasRabelo](https://github.com/DimasRabelo)
* **Site Profissional:** [dimtech.com.br](https://dimtech.com.br/)
