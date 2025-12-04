# Template de Apresentação Profissional

> Template interativo para apresentações profissionais com design system ness.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)

## 📋 Visão Geral

Template de apresentação web interativa com design system da ness. Permite criar apresentações profissionais com navegação avançada, modo apresentador, visualizações de dados e muito mais.

### ✨ Características Principais

- 🎯 **Slides Profissionais** com estrutura modular
- 🗺️ **Navegação Avançada** com minimap interativo
- 🎤 **Modo Apresentador** com timer e notas
- ⌨️ **12+ Atalhos de Teclado** para controle eficiente
- 📊 **Visualizações de Dados** usando Recharts
- 🎨 **Design System ness.** com cores da marca
- ♿ **Acessibilidade Completa** com navegação por teclado
- 🌙 **Sistema de Temas** (Dark + High Contrast)

---

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+ e npm
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>
cd presentation-template

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev

# Abra no navegador
open http://localhost:3000
```

### Build para Produção

```bash
# Build otimizado
npm run build

# Inicie o servidor de produção
npm start
```

---

## 📝 Como Usar

### 1. Preencha os Dados

Edite o arquivo `lib/presentation-data.ts` e preencha com os dados da sua apresentação:

```typescript
// Metadados da apresentação
export const presentationMetadata = {
    cliente: "Nome do Cliente",
    data: "DD/MM/AAAA",
    framework: "Framework Utilizado",
    // ...
}

// Controles/Métricas
export const cisStatusData = [
    { id: 1, name: "Controle 1", valorAtual: 50, referencia: 60, worked: true },
    // ...
]

// Tarefas
export const tarefas = [
    {
        id: 't1',
        status: 'pendente',
        priority: 'alto',
        titulo: 'Título da Tarefa',
        descricao: 'Descrição...'
    },
    // ...
]
```

### 2. Personalize os Slides

Edite `app/presentation/page.tsx` para ajustar os slides conforme necessário:

- Adicione ou remova slides
- Modifique o conteúdo dos slides
- Ajuste as seções

### 3. Ajuste as Seções

Modifique o array `slideSections` em `app/presentation/page.tsx`:

```typescript
const slideSections = [
  { title: 'Introdução', startIndex: 0, endIndex: 3, icon: <Shield /> },
  { title: 'Seção 2', startIndex: 4, endIndex: 9, icon: <Target /> },
  // ...
]
```

---

## 🎨 Estrutura da Apresentação

### Seções Padrão

1. **Introdução** - Slides de abertura
2. **Controles/Métricas** - Análise de controles ou métricas
3. **Vulnerabilidades** - Gestão de vulnerabilidades (opcional)
4. **Pentests** - Testes de segurança (opcional)
5. **Tarefas** - Plano de ação
6. **Pontos de Atenção** - Riscos e recomendações
7. **Serviços** - Apresentação de serviços (opcional)

### Personalização

Você pode:
- Adicionar novas seções
- Remover seções não utilizadas
- Modificar a ordem dos slides
- Criar novos componentes de slide

---

## ⌨️ Atalhos de Teclado

| Atalho | Função |
|--------|--------|
| `→` ou `Space` | Próximo slide |
| `←` | Slide anterior |
| `Home` | Primeiro slide |
| `End` | Último slide |
| `1-9` | Ir para seção |
| `M` | Alternar minimap |
| `F` | Alternar tela cheia |
| `P` | Alternar modo apresentador |
| `N` | Alternar notas do apresentador |
| `T` | Alternar tema |
| `?` | Mostrar atalhos |
| `Esc` | Sair da tela cheia |

---

## 🏗️ Stack Tecnológico

### Tecnologias Principais

- **Framework:** Next.js 16.0.6 (App Router)
- **UI Library:** React 19.2.0
- **Linguagem:** TypeScript 5
- **Estilização:** Tailwind CSS 4
- **Animações:** Framer Motion 12.23.25

### Componentes UI

- **Ícones:** Lucide React 0.555.0
- **Gráficos:** Recharts 2.15.4
- **Primitivos:** Radix UI (Progress)
- **Utilitários:** CVA, clsx, tailwind-merge

### Design System

- **Cores:** Ness Design System (#00ade8)
- **Fontes:** Inter (primária), Montserrat (secundária)
- **Componentes:** Implementação customizada estilo Shadcn

---

## 📁 Estrutura do Projeto

```
presentation-template/
├── app/
│   ├── presentation/
│   │   ├── page.tsx          # Apresentação principal
│   │   └── layout.tsx        # Layout protegido
│   ├── login/
│   │   └── page.tsx          # Autenticação
│   ├── api/auth/             # Endpoints de autenticação
│   ├── layout.tsx            # Layout raiz
│   └── globals.css           # Estilos globais
├── components/
│   ├── ui/                   # Componentes base UI
│   ├── slides/               # Componentes de slide
│   └── presentation/         # Componentes de apresentação
├── lib/
│   ├── presentation-data.ts  # Dados da apresentação (EDITAR AQUI)
│   ├── auth.ts              # Helpers de autenticação
│   └── utils.ts             # Utilitários
└── tailwind.config.ts       # Configuração Tailwind + tema ness.
```

---

## 📊 Estrutura de Dados

Todos os dados da apresentação estão centralizados em `lib/presentation-data.ts`:

### Metadados
- `presentationMetadata`: Informações gerais da apresentação

### Controles/Métricas
- `cisStatusData`: Dados dos controles ou métricas
- `cisControls`: Lista de controles processada
- `workedControls`: Controles prioritários

### Evolução Temporal
- `implementationEvolution`: Evolução geral
- `workedEvolution`: Evolução dos prioritários
- `maturityEvolution`: Evolução da maturidade

### Vulnerabilidades
- `vulnerabilityScanScope`: Escopo de varredura
- `vulnerabilityEvolution`: Evolução mensal
- `totalVulnerabilitiesTrend`: Tendência por severidade

### Pentests
- `pentestApplications`: Aplicações testadas
- `pentestSummary`: Resumo consolidado

### Tarefas
- `tarefas`: Lista de tarefas
- `tarefasPorStatus`: Agrupadas por status

### Pontos de Atenção
- `pontosAtencao`: Lista de pontos críticos

---

## 🎯 Funcionalidades Avançadas

### 🗺️ Navegação Avançada (Pressione `M`)

**Recursos do Minimap:**
- Visão geral visual de todos os slides
- Organizado por seções com ícones
- Rastreamento de progresso por seção
- Navegação rápida para qualquer slide
- Design glassmorphism

### 🎤 Modo Apresentador (Pressione `P`)

**Ferramentas Profissionais:**
- **Timer:** Contagem regressiva de 30 minutos com alertas
- **Notas do Apresentador:** Painel de notas aprimorado
- **Prévia do Próximo Slide:** Veja o que vem a seguir
- **Rastreamento de Progresso:** Mantenha-se no cronograma
- **Controles:** Play/pause/reset do timer

### 📊 Indicadores de Progresso

**Rastreamento Multi-nível:**
- **Barra de Progresso de Seção:** Segmentos interativos
- **Breadcrumb:** Mostra a seção atual
- **Contador de Slides:** Formato 01/26
- **Porcentagem:** Conclusão geral
- **Status Visual:** Indicadores verde/azul/cinza

---

## 📄 Licença

Este projeto é proprietário e confidencial.

© 2025 Ness Digital Engineering - Todos os direitos reservados.

---

## 👥 Contato

**Ness Digital Engineering**
ness.
contato@ness.com.br

---

**Pronto para criar apresentações profissionais!** 🚀
