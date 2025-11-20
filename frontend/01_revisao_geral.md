# 01_revisao_geral

Data: 20/11/2025
Escopo: revisão completa do frontend do projeto WellFlow conforme SCRIPT 1 — limpeza, padronização e boas práticas em React.

**Sumário executivo**
- Realizei análise dos arquivos principais em `frontend/src` e dos assets em `frontend/public`.
- Removi diretivas Tailwind do CSS global e adaptei estilos base para CSS padrão (`src/index.css`).
- Detectei e corrigi erros críticos (ex.: JSX quebrado no `Footer.jsx`, navegação com `<a>` que provocava full reloads).
- Listei problemas, recomendações e ações práticas detalhadas abaixo.

---

## 1) Problemas encontrados (prioridade/impacto)

1.1 JSX inválido
- `src/components/Footer.jsx` continha atributos soltos (faltavam tags `<a>`), causando erro de compilação. Resultado: aplicação não iniciava.
- Ação tomada: corrigi o JSX envolvendo os ícones com `<a>` corretamente.

1.2 Navegação que provoca full reloads
- Muitos locais (sidebars, cards, botões) usavam `<a href="...">` em vez de `Link` do `react-router-dom`. Isso recarregava a página e resetava o estado do React (por exemplo, logout aparente após navegação).
- Ação tomada: converti as rotas principais para `<Link to="...">` (layouts e alguns cards). Recomendo uniformizar todo o projeto.

1.3 Persistência de autenticação ausente
- `src/context/AuthProvider.jsx` mantinha `user` apenas em memória (`useState(null)`), logo qualquer reload da página limpa o estado e força novo login.
- Recomendação: persistir `user` (ou um token) em `localStorage` ou usar cookie + token. Forneci exemplo de patch no relatório.

1.4 Uso inconsistente de Tailwind
- `src/index.css` tinha diretivas `@tailwind` e `@layer`, mas não há `tailwindcss` em `package.json` nem `tailwind.config.*` no repositório — inconsistente e gerava erro em builds.
- Ação tomada: removi diretivas do index.css e converti regras base para CSS padrão; além disso, adicionei utilitários em `src/App.css` para substituir utilitários Tailwind usados nas páginas.

1.5 Mistura de estilo inline e classes
- Muitos componentes usam estilos inline (por ex. `Footer.jsx`, vários `style={{...}}`). Isso dificulta manutenção e impede otimizações CSS (recomendo mover para `App.css` progressivamente).

1.6 Classes utilitárias remanescentes
- Alguns componentes ainda usam classes do tipo utilitária (`grid`, `grid-3`, `mb-xl`, `text-center`, etc.). Eu já adicionei definições em `App.css` para essas utilitárias, mas idealmente essas classes devem ser consolidadas em classes semânticas de componentes.

1.7 Componentização e duplicação
- Estrutura do projeto apresenta possíveis duplicações (ex.: cabeçalhos/sidebars muito parecidos entre `GestorLayout` e `FuncionarioLayout`). Sugestão: extrair `Sidebar` e `Header` reutilizáveis.

1.8 Acessibilidade
- Verifiquei alguns `aria-label` em uso (bom), mas há entradas faltantes em alguns botões e imagens (ex.: `alt` inconsistentes em assets locais). Recomendo auditar com axe/lighthouse.

1.9 Imports e dependências
- `package.json` possui: react, react-dom, react-router-dom, axios, recharts, sonner, @tabler/icons-react, fontes. Confirmei presença do `@tabler/icons-react` instalado.
- Observação: `src/components/ui/sonner.jsx` atualmente retorna `null` — se a intenção for usar `sonner`, exporte `Toaster` e adicione `<Toaster />` em `App.jsx`.

---

## 2) Recomendações e correções práticas (passo a passo)

2.1 Persistência da sessão (alta prioridade)
- Objetivo: manter o usuário logado após reload até que ele faça `logout`.
- Implementação sugerida (em `src/context/AuthProvider.jsx`):

```jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('wf_user');
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  });

  useEffect(() => {
    if (user) localStorage.setItem('wf_user', JSON.stringify(user));
    else localStorage.removeItem('wf_user');
  }, [user]);

  const login = (username, password) => { /* mock search same as hoje */ };
  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() { return useContext(AuthContext); }
```

- Razão técnica: `localStorage` mantém estado entre reloads; fácil de implementar e suficiente para mock local. Em produção, usar token JWT e refresh tokens.

2.2 Navegação SPA consistente
- Substituir todos os `<a href="...">` por `<Link to="...">` do `react-router-dom` nas views internas (não em links externos).
- Para links externos (GitHub/LinkedIn) manter `<a target="_blank">` com `rel="noopener noreferrer"`.

2.3 Centralizar componentes reutilizáveis
- Extraia `Sidebar`, `Header`, `Footer` (já parcialmente existentes) em `src/components/layout/` e importe nas `layouts`. Isso evita duplicação entre `GestorLayout` e `FuncionarioLayout`.
- Benefício: manutenção mais fácil, menor risco de inconsistência.

2.4 CSS e organização de estilos
- Mantive utilitários no `src/App.css` para que o projeto funcione sem Tailwind. Próximo passo:
  - Substituir utilitários por classes semânticas por componente (ex.: `dashboard-metrics`, `tips-section`).
  - Mover estilos inline dos componentes maiores (`Footer.jsx`, `HeaderGestor.jsx`) para `App.css` ou arquivos CSS module se preferir escopo.

2.5 Limpeza de Tailwind remanescente
- Remover quaisquer arquivos de configuração não utilizados (se existirem) e remover diretivas `@tailwind` (já feitas). Certifique-se de que `package.json` não tenha `tailwindcss` listado se não for usado.

2.6 Sonner (toasts)
- `sonner` está em `package.json` mas você precisa exportar corretamente em `src/components/ui/sonner.jsx` e montar o `Toaster` em `App.jsx`.
- Exemplo:
```js
// src/components/ui/sonner.jsx
export { Toaster, toast } from 'sonner';

// App.jsx
import { Toaster } from './components/ui/sonner';
function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster />
        <Routes>...</Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
```

2.7 Acessibilidade
- Garantir `alt` em todas as imagens; `aria-label` em botões que não contenham texto; foco visível; contraste adequado.
- Rodar `npx jest-axe` (se incluir testes) e audit com Lighthouse.

2.8 Imports/limpeza
- Remover imports não usados (eslint já aponta). Ex.: `user` não utilizado em algumas páginas (remover destructuring ou usar se necessário).

2.9 Erros de compilação e linter
- Corrigi `index.css` (chave extra). Após refatorações, rodar `npm run lint` e corrigir avisos.

---

## 3) Sugestão de organização de pastas (clean architecture simples)

- `src/`
  - `components/` -> componentes compartilhados (Button, Card, Sidebar, Footer, Header)
  - `layouts/` -> wrappers de layout (GestorLayout, FuncionarioLayout) que importam `Sidebar` e `Header`
  - `pages/` -> páginas (Login, DashboardGestor, DashboardFuncionario, etc.)
  - `context/` -> providers (AuthProvider)
  - `services/` -> chamadas HTTP e mocks (api.js)
  - `styles/` -> `App.css`, variáveis, possíveis css-modules

Motivo: clareza, separação de responsabilidades, fácil teste e manutenção.

---

## 4) Identificação de duplicações (principais alvos)
- Sidebars entre `GestorLayout.jsx` e `FuncionarioLayout.jsx` — extrair `Sidebar` e passar itens via props.
- Cards e métricas usados em dashboards — criar componentes `MetricCard`, `ActionCard`.
- Botões — criar `components/Button.jsx` com variantes (`primary`, `secondary`).

---

## 5) Padrões de nomeação e legibilidade
- Use PascalCase para componentes (`HeaderGestor.jsx` ok).
- Use camelCase para funções e variáveis locais.
- Prefira nomes claros: `handleLoginSubmit`, `fetchMetrics` etc.

---

## 6) Segurança e práticas inseguras
- Atualmente os dados de usuário são mock e armazenados em cleartext no `localStorage` (se aplicar persistence). Em ambiente real, não armazene password e use tokens.
- Evitar executar lógica sensível no cliente.

---

## 7) Plano de ações recomendadas (curto prazo)
1. Implementar persistência do `user` em `AuthProvider` (localStorage) — alta prioridade.
2. Substituir todos os `<a href>` internos por `<Link to>` — alta prioridade.
3. Refatorar `Footer`, `HeaderGestor`, `HeaderFuncionario` para usar classes do `App.css` (mover estilos inline) — médio prazo.
4. Extrair `Sidebar` compartilhado — médio prazo.
5. Rodar `npm run lint` e `npm run dev` para validar; corrigir erros restantes — imediato.

---

## 8) Plano de ações recomendadas (médio/longo prazo)
- Revisar e consolidar utilitários CSS em classes semânticas e reduzir o uso de utilitários ad-hoc.
- Implementar testes unitários (Jest + React Testing Library) para componentes críticos (AuthProvider, ProtectedRoute).
- Integrar auditoria de acessibilidade (axe) e pipeline CI com lint e testes.

---

## 9) Razões técnicas (resumo)
- Persistência em `localStorage` evita logout indesejado em reloads; em produção trocar por token seguro.
- `Link` preserva o estado do SPA, eliminando reloads que zerram o contexto React.
- Centralizar componentes evita duplicação e inconsistência visual/funcional.
- Remover dependências não instaladas (Tailwind directives) evita erros de build e confusão no time.

---

## 10) Entregáveis e próximos passos que eu posso executar agora (se você autorizar)
- A: Aplicar a persistência em `AuthProvider.jsx` (patch pronto para aplicar).
- B: Completar a substituição de todos os `<a>` internos por `<Link>` (fazer patch global).
- C: Extrair `Sidebar` e `Button` em componentes reutilizáveis (proposta e patch).
- D: Rodar `npm run dev` aqui e trazer logs de erro para validação.

---

**Observação final**
Relatório gerado automaticamente a partir do estado atual do repositório em `frontend`. Algumas mudanças menores já foram aplicadas (remoção de diretivas Tailwind no `index.css`, correções no `Footer.jsx`, conversões iniciais para `Link`).

Se autorizar, aplico os patches sugeridos em sequência (recomendo começar pela persistência e pela substituição de links internos). 


---

Arquivo gerado por: Copilot (assistente) — tarefa: "SCRIPT 1 — REVISÃO GERAL DO PROJETO"
