# 🎨 Apresentações

Esta pasta contém todas as apresentações criadas a partir dos templates.

## 📁 Estrutura

Cada apresentação é um diretório independente com sua própria estrutura:

```
presentations/
  ├── cliente-xyz/          # Apresentação para Cliente XYZ
  │   ├── app/
  │   ├── components/
  │   ├── lib/
  │   └── ...
  ├── cliente-abc/          # Apresentação para Cliente ABC
  │   └── ...
  └── README.md             # Este arquivo
```

## 🚀 Criando uma Nova Apresentação

```bash
# Do diretório raiz do projeto
node scripts/create-presentation.js nome-da-apresentacao
```

Isso criará uma nova pasta em `presentations/nome-da-apresentacao/` com todos os arquivos necessários.

## 📝 Trabalhando com uma Apresentação

```bash
# Entrar na pasta da apresentação
cd presentations/nome-da-apresentacao

# Instalar dependências
npm install

# Editar os dados da apresentação
# Edite lib/presentation-data.ts com seus dados

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🎯 Personalização

Cada apresentação é independente. Você pode:

- ✅ Editar `lib/presentation-data.ts` com seus dados
- ✅ Modificar componentes em `components/`
- ✅ Adicionar novos slides
- ✅ Personalizar estilos e cores
- ✅ Adicionar novas funcionalidades

## 📦 Estrutura de Dados

O arquivo principal de dados é `lib/presentation-data.ts`. Ele contém:

- Metadados da apresentação (cliente, data, framework)
- Controles CIS (ou equivalente)
- Evolução temporal
- Vulnerabilidades
- Pentests
- Tarefas
- Pontos de atenção

## 🔄 Sincronização com Templates

**Importante:** Apresentações não são sincronizadas automaticamente com templates.

Se você atualizar um template, as apresentações existentes **não** serão atualizadas automaticamente. Isso é intencional para evitar que mudanças quebrem apresentações já criadas.

Para aplicar atualizações de um template:

1. Compare manualmente as mudanças
2. Aplique as mudanças manualmente na apresentação
3. Ou crie uma nova apresentação e migre os dados

