# 💜 WELLFLOW

Sistema web para monitorar **bem-estar dos funcionários** e oferecer ao gestor uma **visão clara do clima organizacional**.

## 🚀 Tecnologias
* **React** (Vite)
* **React Router DOM**
* **Axios** (para requisições HTTP)
* **Tabler Icons** (para ícones)
* **Recharts** (para gráficos)
* **Sonner** (para notificações)
* **CSS** (design system customizado)
* **Fontes** via `@fontsource`

## 📦 Instalação

### Configuração Inicial
Para iniciar o projeto:
1.  Criar projeto Vite: `npm create vite@latest frontend -- --template react`
2.  Acessar pasta: `cd frontend`
3.  Instalar dependências principais: `npm install`

### Bibliotecas Adicionais
* Navegação: `npm install react-router-dom`
* Requisições HTTP: `npm install axios`
* Ícones: `npm install @tabler/icons-react`
* Fontes (Fira Code e Inter): `npm install @fontsource/fira-code @fontsource/inter`
* Notificações: `npm install sonner`
* Gráficos: `npm install recharts`

### Rodar Localmente
Utilize o comando: `npm run dev`

## 🧩 Arquitetura Simplificada

### Estilos
* `index.css`: Reset global + variáveis básicas.
* `App.css`: Sistema de design (cores, botões, cards, responsividade).

### Layouts
* `GestorLayout.jsx`: Sidebar roxa + navegação completa.
* `FuncionarioLayout.jsx`: Versão reduzida com acesso ao essencial.

### Contexto e Segurança
* `AuthContext`: Gerenciamento de autenticação com persistência leve.
* `ProtectedRoute`: Componente para impedir acesso sem login.
* Perfis: `gestor/admin` e `funcionario/admin`.

## 📊 Dashboards

### Gestor
* Cards de funcionários.
* Nível de estresse individual.
* Alertas importantes.
* Gráficos e métricas organizacionais.

### Funcionário
* Termômetro de bem-estar.
* Ações rápidas.
* Métricas do ambiente de trabalho.
* Informações da equipe.

## 📝 Páginas do MVP
1.  Login
2.  Dashboard
3.  Formulário Semanal (para feedback)
4.  Ambiente de Trabalho
5.  Dicas de Bem-Estar

## 🎨 Paleta de Cores
| Nome | Código HEX |
| :--- | :--- |
| **Primária** (Roxo) | `#6A4CC3` |
| **Secundária** (Lilás) | `#A78BFA` |
| **Fundo** | `#FAF9F6` |
| **Cards** | `#FFFFFF` |
| **Sucesso** | `#10B981` |
| **Alerta** | `#F59E0B` |
| **Erro** | `#EF4444` |

## 🔐 Funcionalidades (Checklist)
* ✔ Login com perfis distintos.
* ✔ Dashboard por usuário.
* ✔ Formulário com sliders (1–5).
* ✔ Métricas ambientais.
* ✔ Dicas automatizadas de bem-estar.
* ✔ Rotas protegidas.
* ✔ Sistema de design reutilizável.

## 🧱 Componentes Base (CSS Classes)
* `.card`
* `.employee-card`
* `.metric-card`
* `.tip-card`
* `.btn`
* `.btn-primary`
* `.sidebar`
* `.main-content`