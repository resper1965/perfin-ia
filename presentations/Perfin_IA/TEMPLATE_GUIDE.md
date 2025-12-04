# Guia de Preenchimento do Template

Este guia explica como preencher os dados do template para criar sua apresentação personalizada.

## 📋 Índice

1. [Metadados da Apresentação](#metadados-da-apresentação)
2. [Controles/Métricas](#controlesmétricas)
3. [Evolução Temporal](#evolução-temporal)
4. [Vulnerabilidades](#vulnerabilidades)
5. [Pentests](#pentests)
6. [Tarefas](#tarefas)
7. [Pontos de Atenção](#pontos-de-atenção)

---

## Metadados da Apresentação

Edite `presentationMetadata` em `lib/presentation-data.ts`:

```typescript
export const presentationMetadata = {
    cliente: "Nome do Cliente",        // Nome da organização/cliente
    data: "05/11/2025",                // Data da apresentação (formato DD/MM/AAAA)
    totalSlides: 26,                   // Total de slides (ajuste conforme necessário)
    framework: "CIS Controls v8 - IG2", // Framework ou padrão utilizado
    totalControles: 18,                // Número total de controles
    controlesExcluidos: 1,             // Controles excluídos do escopo
    controlesAtivos: 17,               // Controles ativos
    controlesTrabalhados: 8,           // Controles prioritários trabalhados
}
```

---

## Controles/Métricas

### Estrutura Básica

```typescript
export const cisStatusData = [
    {
        id: 1,                                    // ID único do controle
        name: "Nome do Controle",                 // Nome completo do controle
        valorAtual: 87.5,                         // Valor atual (0-100)
        referencia: 58.0,                         // Valor de referência (0-100)
        worked: true,                             // Se é um controle prioritário
        excluded: false                           // Se está excluído do escopo
    },
    // Adicione mais controles...
]
```

### Exemplo Completo

```typescript
export const cisStatusData = [
    {
        id: 1,
        name: "Inventário e Controle de Ativos Corporativos",
        valorAtual: 87.5,
        referencia: 58.0,
        worked: false,
        excluded: false
    },
    {
        id: 2,
        name: "Inventário e Controle de Ativos de Software",
        valorAtual: 91.7,
        referencia: 56.0,
        worked: true,  // Controle prioritário
        excluded: false
    },
    // ...
]
```

---

## Evolução Temporal

### Evolução Geral

```typescript
export const implementationEvolution = [
    { periodo: 'Dez/23', geral: 15.0 },
    { periodo: 'Jul/24', geral: 25.0 },
    { periodo: 'Mai/25', geral: 35.0 },
    { periodo: 'Out/25', geral: 42.0 },
    { periodo: 'Nov/25', geral: 45.0 },
]
```

### Evolução dos Controles Trabalhados

Primeiro, defina os IDs dos controles prioritários:

```typescript
const workedIds = [2, 3, 4, 5, 6, 8, 9, 13] // IDs dos controles prioritários
```

Depois, preencha a evolução:

```typescript
export const workedEvolution = [
    { periodo: 'Dez/23', trabalhados: 20.0 },
    { periodo: 'Jul/24', trabalhados: 35.0 },
    { periodo: 'Mai/25', trabalhados: 60.0 },
    { periodo: 'Out/25', trabalhados: 75.0 },
    { periodo: 'Nov/25', trabalhados: 82.0 },
]
```

### Evolução da Maturidade

Escala de 1 a 5:
- 1 = Inicial
- 2 = Repetitivo
- 3 = Definido
- 4 = Gerenciado
- 5 = Otimizado

```typescript
export const maturityEvolution = [
    { periodo: 'Dez/23', nivel: 1.06 },
    { periodo: 'Jul/24', nivel: 1.35 },
    { periodo: 'Mai/25', nivel: 1.75 },
    { periodo: 'Out/25', nivel: 1.95 },
    { periodo: 'Nov/25', nivel: 2.12 },
]
```

---

## Vulnerabilidades

### Escopo de Varredura

```typescript
export const vulnerabilityScanScope = {
    servidores: 15,
    estacoes: 151,
    total: 166  // Calculado automaticamente se não fornecido
}
```

### Evolução Mensal

```typescript
export const vulnerabilityEvolution = [
    { mes: "Ago/25", novas: 0, tratadas: 0, total: 0 },
    { mes: "Set/25", novas: 0, tratadas: 0, total: 771 },
    { mes: "Out/25", novas: 53, tratadas: 418, total: 406 },
]
```

### Tendência por Severidade

```typescript
export const totalVulnerabilitiesTrend = [
    {
        periodo: "Set/25",
        total: 771,
        criticas: 345,
        altas: 95,
        medias: 220,
        baixas: 111
    },
    {
        periodo: "Out/25",
        total: 406,
        criticas: 22,
        altas: 86,
        medias: 202,
        baixas: 96
    },
]
```

---

## Pentests

### Aplicações Testadas

```typescript
export const pentestApplications = [
    {
        nome: "Aplicação 1",
        vulnerabilidades: {
            critico: 0,
            alto: 5,
            medio: 21,
            baixo: 49,
            info: 0
        }
    },
    {
        nome: "Aplicação 2",
        vulnerabilidades: {
            critico: 0,
            alto: 2,
            medio: 10,
            baixo: 15,
            info: 0
        }
    },
]
```

**Nota:** O `pentestSummary` é calculado automaticamente a partir de `pentestApplications`.

---

## Tarefas

### Estrutura de Tarefa

```typescript
{
    id: 't1',                           // ID único (ex: 't1', 't2.1', etc)
    controleRelacionado: 1,             // ID do controle relacionado (opcional)
    status: 'pendente',                 // 'pendente' | 'em-andamento' | 'concluido'
    progress: 0,                        // 0-100 (usado apenas se status = 'em-andamento')
    priority: 'alto',                   // 'baixo' | 'medio' | 'alto'
    titulo: 'Título da Tarefa',
    descricao: 'Descrição detalhada da tarefa e o que está bloqueando (se pendente)'
}
```

### Exemplo Completo

```typescript
export const tarefas = [
    {
        id: 't1',
        controleRelacionado: 2,
        status: 'pendente',
        progress: 0,
        priority: 'alto',
        titulo: 'Aprovação da norma de Software',
        descricao: 'Norma sugerida e alterada pela TI. Aguardando aprovação da diretoria.'
    },
    {
        id: 't2',
        controleRelacionado: 3,
        status: 'em-andamento',
        progress: 75,
        priority: 'alto',
        titulo: 'Solução de cofre de senhas',
        descricao: 'Passbolt selecionado após testes. Comparativo elaborado para aprovação.'
    },
    {
        id: 't3',
        controleRelacionado: 5,
        status: 'concluido',
        progress: 100,
        priority: 'alto',
        titulo: 'Implantação de MFA',
        descricao: 'MFA habilitado em todas as aplicações com suporte.'
    },
]
```

**Nota:** `tarefasPorStatus` é calculado automaticamente.

---

## Pontos de Atenção

```typescript
export const pontosAtencao = [
    {
        titulo: 'Título do Ponto de Atenção',
        descricao: 'Descrição detalhada do ponto de atenção e seu impacto.',
        impacto: 'alto',  // 'baixo' | 'medio' | 'alto'
        status: 'pendente'  // 'pendente' | 'em-andamento' | 'resolvido'
    },
    {
        titulo: 'Formalização e Publicação de Processos',
        descricao: 'Ausência de formalização e publicação de processos já desenvolvidos e executados pela equipe de forma repetitiva.',
        impacto: 'alto',
        status: 'pendente'
    },
]
```

---

## Dicas e Boas Práticas

1. **Mantenha a Consistência:** Use o mesmo formato de datas e períodos em todos os arrays
2. **IDs Únicos:** Garanta que todos os IDs sejam únicos
3. **Valores Percentuais:** Use valores de 0 a 100 para percentuais
4. **Maturidade:** Use valores de 1.0 a 5.0 para níveis de maturidade
5. **Teste Regularmente:** Após preencher os dados, teste a apresentação para verificar se tudo está funcionando

---

## Próximos Passos

Após preencher os dados:

1. Execute `npm run dev` para testar localmente
2. Ajuste os slides em `app/presentation/page.tsx` se necessário
3. Personalize as seções conforme sua necessidade
4. Faça o build com `npm run build` quando estiver pronto

---

**Boa apresentação!** 🚀

