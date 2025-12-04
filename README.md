# 🎯 Sistema de Apresentações - Perfin IA

Sistema para criar e gerenciar apresentações profissionais usando templates imutáveis.

## 📚 Estrutura do Projeto

```
perfin-ia/
├── templates/              # 📦 Templates imutáveis (NÃO EDITAR diretamente)
│   ├── default/           # Template padrão
│   └── README.md
├── presentations/         # 🎨 Apresentações criadas (editáveis)
│   └── README.md
├── scripts/               # 🔧 Scripts utilitários
│   └── create-presentation.js
└── README.md              # Este arquivo
```

## 🚀 Início Rápido

### 1. Criar uma Nova Apresentação

```bash
# Criar apresentação a partir do template padrão
node scripts/create-presentation.js minha-apresentacao
```

### 2. Configurar a Apresentação

```bash
# Entrar na pasta da apresentação
cd presentations/minha-apresentacao

# Instalar dependências
npm install

# Editar os dados
# Abra lib/presentation-data.ts e preencha com seus dados
```

### 3. Executar

```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

## 📖 Como Funciona

### Templates (Imutáveis)

- Localizados em `templates/`
- **NÃO devem ser editados diretamente** (exceto para atualizações de templates)
- Servem como base para criar novas apresentações
- Cada template é uma cópia completa do projeto base

### Apresentações (Editáveis)

- Localizadas em `presentations/`
- Criadas a partir de templates usando o script
- Cada apresentação é **independente** e pode ser editada livremente
- Contém seus próprios dados e personalizações

## 🔧 Scripts Disponíveis

### Criar Nova Apresentação

```bash
node scripts/create-presentation.js <nome> [template]
```

**Exemplos:**
```bash
# Usar template padrão
node scripts/create-presentation.js cliente-xyz

# Especificar template
node scripts/create-presentation.js cliente-abc default
```

## 📝 Personalizando uma Apresentação

### 1. Dados da Apresentação

Edite `lib/presentation-data.ts`:

```typescript
export const presentationMetadata = {
    cliente: "Nome do Cliente",
    data: "05/11/2025",
    framework: "CIS Controls v8 - IG2",
    // ...
}
```

### 2. Controles e Métricas

Adicione seus controles, vulnerabilidades, tarefas, etc. no mesmo arquivo.

### 3. Componentes e Slides

Modifique ou adicione novos slides em `app/presentation/page.tsx` e componentes em `components/`.

## 🎨 Templates Disponíveis

- **default**: Template padrão com estrutura completa de apresentação profissional

## ⚠️ Importante

- **Templates são imutáveis**: Não edite diretamente em `templates/` a menos que esteja atualizando o template em si
- **Apresentações são independentes**: Cada apresentação tem sua própria cópia dos arquivos
- **Sem sincronização automática**: Mudanças em templates não afetam apresentações existentes

## 📚 Documentação Adicional

- [Templates](./templates/README.md) - Documentação sobre templates
- [Apresentações](./presentations/README.md) - Documentação sobre apresentações
- [Template Guide](./presentation-template/TEMPLATE_GUIDE.md) - Guia do template (se existir)

## 🛠️ Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Recharts

## 📄 Licença

[Adicione informações de licença aqui]

