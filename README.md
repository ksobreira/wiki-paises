
<p align="left">
  <img src="src\assets\logo.png" alt="WikiPaíses Banner" width="50%"/> <!-- adicione um print ou gif aqui -->
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white" />
</p>

<p align="center">
  <a href="https://wiki-paises-omega.vercel.app/">🚀 Acessar aplicação</a> •
  <a href="https://github.com/ksobreira/wiki-paises">📁 Repositório</a>
</p>

---

## 📋 Sobre o Projeto

O **WikiPaíses** é um "catálogo digital" de nações desenvolvido em React. A aplicação consome dados em tempo real da [REST Countries API](https://restcountries.com) e apresenta informações completas sobre países do mundo em duas telas distintas: listagem e detalhes.

O projeto foi desenvolvido como atividade prática da disciplina **T242 - Desenvolvimento de Plataformas Web** do curso de Bacharelado em Ciência da Computação da **UNIFOR**, sob orientação do Prof. Bruno Lopes.

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 🔍 Busca em tempo real | Filtra países por nome conforme o usuário digita |
| 🌎 Filtro por continente | Barra lateral com filtros por Americas, Europe, Asia, Africa e Oceania |
| 📄 Paginação | Navegação entre páginas com controles de Anterior/Próximo e indicador de página |
| 🖱️ Navegação | Ao clicar num card, navega para a tela de detalhes do país |
| 🌙 Tema claro/escuro | Alternância de tema com persistência visual |
| 📱 Responsividade | Layout adaptado para mobile, tablet e desktop |

---

## 🖥️ Telas

### 🏠 Home
- Grid de cards com bandeira, nome comum, capital, região (com badge colorido) e população formatada
- Barra de busca por nome
- Barra lateral de filtro por continente
- Paginação com 8 países por página

### 🔎 Detail
- Bandeira do país em destaque
- Nome oficial e nome comum
- Informações em blocos: Capital, Continente, Sub-região, Área (km²), Idiomas, Moeda, População e Código do país (cca3)
- Seção descritiva sobre o país
- Botão "Voltar para a lista"

---

## 🛠️ Tecnologias

- **[React](https://react.dev/)** — biblioteca principal para construção da interface
- **[Vite](https://vitejs.dev/)** — ferramenta de build e desenvolvimento
- **[React Router DOM](https://reactrouter.com/)** — navegação entre telas
- **[Axios](https://axios-http.com/)** — requisições HTTP para a API
- **[React Icons](https://react-icons.github.io/react-icons/)** — ícones
- **CSS Modules** — estilização com escopo por componente
- **[REST Countries API](https://restcountries.com)** — fonte dos dados dos países

---
## 📁 Estrutura de Pastas

```bash
src/
├── assets/                  # imagens e recursos estáticos
├── components/              # componentes reutilizáveis
│   ├── Card/                # card de país na listagem
│   ├── Footer/              # rodapé da aplicação
│   ├── Header/              # cabeçalho com navegação e tema
│   ├── InfoBlock/           # bloco de informação na tela de detalhes
│   ├── Pagination/          # controles de paginação
│   └── SearchBar/           # barra de busca
├── context/
│   └── ThemeContext.jsx     # contexto global de tema claro/escuro
├── hooks/
│   └── useCountries.js      # hook customizado com lógica de países
├── pages/
│   ├── Home/                # tela de listagem
│   └── Detail/              # tela de detalhes do país
├── router/
│   └── AppRouter.jsx        # configuração das rotas
├── services/
│   ├── wiki.api.js          # configuração do axios
│   └── wiki.service.js      # funções de acesso à API
└── utils/
    └── formatters.js        # funções de formatação
```

---

## 🚀 Como executar localmente

```bash
# Clone o repositório
git clone https://github.com/ksobreira/wikipaises.git

# Entre na pasta
cd wikipaises

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## 📡 API Utilizada

Base URL: `https://restcountries.com/v3.1`

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/all?fields=...` | Lista todos os países |
| GET | `/region/{region}` | Filtra por continente |
| GET | `/name/{name}` | Busca por nome |
| GET | `/alpha/{code}` | Busca pelo código cca3 |

---

## 👨‍💻 Autor

<p align="center">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3ZqdXlubDdsaWI4dTZ5NHpnanNra3VlaGp0ZzN0djllY3JrMnkxZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mV4DysoGs9W51QdD1I/giphy.gif" width="400px"/>
</p>

<p align="center">
  <strong>Kauam Sobreira de Morais</strong>
</p>

<p align="center">
  <a href="https://github.com/ksobreira">🐙 GitHub</a> •
  <a href="https://www.linkedin.com/">💼 LinkedIn</a>
</p>

---

*T242 - Desenvolvimento de Plataformas Web — Prof. Bruno Lopes — UNIFOR*