# 💜 WellFlow

> **Sistema de Monitoramento de Bem-estar Corporativo**

WellFlow é uma plataforma web que coloca saúde mental e bem-estar no centro da gestão organizacional. Torna visível o invisível: o estresse corporativo.

---

## Link Deploy | Vercel

[https://github.com/bresantos/Wellflow](https://wellflow-six.vercel.app/)

---

## 🎯 O Problema

O estresse corporativo é invisível até explodir. Funcionários sofrem em silêncio sem ferramentas para comunicar seu estado mental. Gestores operam no escuro sem dados para identificar problemas antes que virem desligamentos.

WellFlow muda isso.

---

## 🚀 Funcionalidades Principais

### ✅ Sistema de Autenticação
- Login com email e senha
- Suporte para dois roles: **Gestor** e **Funcionário**
- Persistência de sessão (localStorage)
- Logout seguro

### ✅ Dashboard do Funcionário
- **Início**: Resumo do dia com métricas principais
- **Formulário Semanal**: Preenchimento de avaliação de estresse
- **Ambiente**: Monitoramento de temperatura, umidade e qualidade do ar
- **Dicas de Bem-estar**: Recomendações em Alimentação, Atividade Física e Saúde Mental
- **Histórico**: Acompanhamento de progresso ao longo do tempo

### ✅ Dashboard do Gestor
- **Dashboard**: Visão clara do status de toda a equipe
- **Cards de Funcionários**: Detalhes de estresse individual com barras de progresso
- **Relatórios**: Análises e exportação de dados (em desenvolvimento)
- **Ambiente**: Métricas do espaço físico compartilhado
- **Configurações**: Ajustes da plataforma (em desenvolvimento)

### ✅ Componentes Inteligentes
- **Sidebar Responsiva**: Navega por role, colapsa em mobile
- **Header Dinâmico**: Mostra user logado, notificações e métrica de estresse
- **Mobile Menu**: Menu de navegação otimizado para tela pequena
- **Footer**: Créditos e links da equipe
- **Componentes de UI**: Buttons, cards, sliders, badges customizados

---

## 🏗️ Arquitetura do Projeto

```
frontend/
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Header/           # Headers específicos (Funcionário, Gestor)
│   │   ├── Layout/           # Sidebar e estrutura de página
│   │   ├── MobileMenu.jsx    # Menu móvel
│   │   └── ui/               # Componentes base (Sonner toasts)
│   │
│   ├── context/              # Gerenciamento de estado
│   │   └── AuthProvider.jsx  # Contexto de autenticação
│   │
│   ├── layouts/              # Layouts por role
│   │   ├── FuncionarioLayout.jsx
│   │   └── GestorLayout.jsx
│   │
│   ├── pages/                # Páginas da aplicação
│   │   ├── Login.jsx
│   │   ├── Funcionario/
│   │   │   ├── DashboardFuncionario.jsx
│   │   │   ├── FormularioSemanal.jsx
│   │   │   ├── DicasBemEstar.jsx
│   │   │   ├── Ambiente.jsx
│   │   │   └── Historico.jsx
│   │   └── Gestor/
│   │       ├── DashboardGestor.jsx
│   │       ├── Relatorios.jsx
│   │       ├── Ambiente.jsx
│   │       └── Configuracoes.jsx
│   │
│   ├── routes/               # Configuração de rotas
│   │   ├── ProtectedRoute.jsx
│   │   ├── navigation.js     # Links da sidebar por role
│   │   └── index.jsx         # Definição de rotas
│   │
│   ├── services/             # Serviços e APIs
│   │   └── api.js            # Configuração Axios + fake backend
│   │
│   ├── styles/               # Sistema de design
│   │   └── global.css        # Design system completo
│   │
│   ├── utils/                # Utilitários
│   │   └── auth.js           # Funções de autenticação
│   │
│   ├── App.jsx               # Componente raiz
│   └── main.jsx              # Entry point
│
├── public/                   # Imagens estáticas
│   ├── logo-wellflow-branco-transparente.png
│   ├── mulher[1-5].jpg       # Fotos de funcionárias
│   ├── homem[1-3].jpg        # Fotos de funcionários
│   └── gestora.jpg           # Foto da gestora
│
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

### 💡 Decisões Técnicas

**React + Vite**: Desenvolvimento rápido, hot reload, build otimizado
**Context API**: Gerenciamento simples de autenticação sem Redux
**Rotas Separadas**: Layouts e navegação específicos por role (gestor vs funcionário)
**CSS Puro**: Design system mantido em global.css, sem dependências externas
**Fake Backend**: API.js simula comportamento com JSON, pronto para migração real
**LocalStorage**: Persistência leve de sessão para melhor UX

---

## 📱 Fluxo do Usuário

**Funcionário:** Login → Dashboard → Formulário Semanal / Ambiente / Dicas / Histórico

**Gestor:** Login → Dashboard → Relatórios / Ambiente / Configurações

---

## 🚀 Como Rodar

### Pré-requisitos
- Node.js v16+ instalado
- npm ou yarn

### Instalação
```bash
# Entrar na pasta do frontend
cd frontend

# Instalar dependências
npm install
```

### Dependências Principais
```bash
# React e roteamento
npm install react-router-dom

# Ícones
npm install @tabler/icons-react

# Gráficos
npm install recharts

# Notificações
npm install sonner

# Tipagem (opcional)
npm install prop-types

# Fontes (opcional)
npm install @fontsource/inter @fontsource/poppins
```

### Executar Localmente
```bash
npm run dev
```

A aplicação abrirá em `http://localhost:5173`

### Build para Produção
```bash
npm run build
```

### Credenciais de Teste

#### Funcionário
- **Email**: funcionario@wellflow.com
- **Senha**: senha123

#### Gestor
- **Email**: gestor@wellflow.com
- **Senha**: senha123

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Proposito |
|-----------|--------|----------|
| **React** | 18+ | Framework UI |
| **Vite** | 7.2.2+ | Build tool |
| **React Router** | 7+ | Roteamento cliente |
| **Context API** | Built-in | State management |
| **@tabler/icons-react** | Latest | Ícones SVG |
| **Recharts** | Latest | Gráficos interativos |
| **Sonner** | Latest | Toast notifications |
| **Axios** | Latest | HTTP client |
| **CSS Puro** | - | Estilização |
| **PropTypes** | Latest | Type checking |

---

## 🎨 Design System

### Paleta de Cores
```css
Primária:     #6A4CC3 (Roxo WellFlow)
Secundária:   #A78BFA (Roxo claro)
Background:   #FAF9F6 (Bege claro)
Texto:        #1F2937 (Cinza escuro)
Sucesso:      #10B981 (Verde)
Aviso:        #F59E0B (Âmbar)
Erro:         #EF4444 (Vermelho)
Info:         #3B82F6 (Azul)
```

### Tipografia
- **Headings**: Inter Bold (600-700)
- **Body**: Inter Regular (400)
- **Display**: Poppins (quando necessário)

### Componentes Reutilizáveis
- Cards com shadows e hover effects
- Buttons em variações (primary, secondary, danger)
- Input fields com validação visual
- Sliders customizados
- Badges de status
- Alerts com ícones

### Espaçamento
- XS: 4px
- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px
- 2XL: 48px

---

## 📈 Próximos Passos

### Curto Prazo (Sprint Próxima)
- [ ] Backend real com autenticação JWT
- [ ] Dashboard dinâmico conectado à API
- [ ] Integração com base de dados (PostgreSQL)

### Médio Prazo (2-3 sprints)
- [ ] Recomendações baseadas em IA
- [ ] Alertas automáticos para gestores
- [ ] Exportação de relatórios em PDF
- [ ] Notificações em tempo real

### Longo Prazo (Roadmap)
- [ ] Integração com calendários (Google Calendar, Outlook)
- [ ] Wellness programs customizados
- [ ] Escalabilidade para múltiplas empresas (multi-tenant)

---

## 👥 Autores

**Projeto Acadêmico FIAP - GS (Global Solution) 2025**

Desenvolvido por:
- **Brenda Santos**
- **Lucas Santana**
- **Gustavo**

---

## 📄 Licença

Este projeto é de uso acadêmico. Desenvolvido como trabalho de conclusão do programa FIAP.

---

## 💬 Dúvidas?

Abra uma issue ou entre em contato com o time de desenvolvimento.

---

**Made with 💜 by WellFlow Team**
