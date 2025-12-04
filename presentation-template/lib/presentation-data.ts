/**
 * TEMPLATE DE DADOS PARA APRESENTAÇÃO
 * 
 * Este arquivo contém a estrutura de dados para a apresentação.
 * Preencha os dados abaixo com as informações da sua apresentação.
 * 
 * INSTRUÇÕES:
 * 1. Substitua todos os valores de exemplo pelos dados reais
 * 2. Mantenha a estrutura de tipos TypeScript
 * 3. Ajuste arrays conforme necessário (adicionar/remover itens)
 */

export type MaturityLevel = "Inicial" | "Repetitivo" | "Definido" | "Gerenciado" | "Otimizado"

export const maturityLevels: MaturityLevel[] = [
    "Inicial",
    "Repetitivo",
    "Definido",
    "Gerenciado",
    "Otimizado"
]

// ===== METADADOS DA APRESENTAÇÃO =====
export const presentationMetadata = {
    cliente: "Nome do Cliente", // Ex: "Empresa XYZ"
    data: "DD/MM/AAAA", // Ex: "05/11/2025"
    totalSlides: 26, // Ajuste conforme necessário
    framework: "Framework Utilizado", // Ex: "CIS Controls v8 - IG2"
    totalControles: 0, // Número total de controles
    controlesExcluidos: 0, // Controles excluídos do escopo
    controlesAtivos: 0, // Controles ativos
    controlesTrabalhados: 0, // Controles prioritários trabalhados
}

// ===== CONTROLES CIS (OU EQUIVALENTE) =====
// Estrutura para controles de segurança ou métricas similares
export type CISStatusData = {
    id: number
    name: string
    valorAtual?: number
    referencia?: number
    worked?: boolean
    excluded?: boolean
}

export const cisStatusData: CISStatusData[] = [
    // Exemplo de estrutura - adicione/remova conforme necessário
    // { id: 1, name: "Nome do Controle", valorAtual: 0, referencia: 0, worked: false },
]

// Lista de controles (gerada a partir de cisStatusData)
export const cisControls = cisStatusData.map(c => ({
    id: c.id,
    name: c.name,
    category: "Categoria", // Ajuste conforme necessário
    worked: c.worked || false,
    excluded: c.excluded || false
}))

export const workedControls = cisControls.filter(c => c.worked)

// Dados para gráfico comparativo
export const statusVsReference = cisStatusData.map(c => ({
    name: `Controle ${c.id}`,
    Atual: c.valorAtual || 0,
    Referencia: c.referencia || 0
}))

// ===== EVOLUÇÃO TEMPORAL =====
// Evolução geral da implementação
export type EvolutionData = {
    periodo: string
    geral: number
}

export const implementationEvolution: EvolutionData[] = [
    // Exemplo: { periodo: 'Jan/24', geral: 0 },
    // Adicione mais períodos conforme necessário
]

// Evolução dos controles trabalhados
const workedIds: number[] = [] // IDs dos controles prioritários
export type WorkedEvolutionData = {
    periodo: string
    trabalhados: number
}

export const workedEvolution: WorkedEvolutionData[] = [
    // Exemplo: { periodo: 'Jan/24', trabalhados: 0 },
    // Adicione mais períodos conforme necessário
]

// Evolução da maturidade (escala 1-5)
export type MaturityEvolutionData = {
    periodo: string
    nivel: number
}

export const maturityEvolution: MaturityEvolutionData[] = [
    // Exemplo: { periodo: 'Jan/24', nivel: 1.0 },
    // Adicione mais períodos conforme necessário
]

// Maturidade atual por controle
export const currentMaturity = cisStatusData.map(c => {
    const valor = c.valorAtual || 0
    let nivel: MaturityLevel = 'Inicial'
    if (valor >= 80) nivel = 'Otimizado'
    else if (valor >= 60) nivel = 'Gerenciado'
    else if (valor >= 40) nivel = 'Definido'
    else if (valor >= 20) nivel = 'Repetitivo'
    
    return {
        controleId: c.id,
        nivel,
        valor
    }
})

// ===== GESTÃO DE VULNERABILIDADES =====
// Escopo de varredura
export const vulnerabilityScanScope = {
    servidores: 0,
    estacoes: 0,
    total: 0
}

// Evolução mensal de vulnerabilidades
export type VulnerabilityEvolutionData = {
    mes: string
    novas: number
    tratadas: number
    total: number
}

export const vulnerabilityEvolution: VulnerabilityEvolutionData[] = [
    // Exemplo: { mes: "Jan/24", novas: 0, tratadas: 0, total: 0 },
    // Adicione mais meses conforme necessário
]

// Total de vulnerabilidades por severidade
export type VulnerabilityTrendData = {
    periodo: string
    total: number
    criticas: number
    altas: number
    medias: number
    baixas: number
}

export const totalVulnerabilitiesTrend: VulnerabilityTrendData[] = [
    // Exemplo: { periodo: "Jan/24", total: 0, criticas: 0, altas: 0, medias: 0, baixas: 0 },
    // Adicione mais períodos conforme necessário
]

// ===== TESTES DE PENETRAÇÃO =====
// Aplicações testadas
export type PentestApplication = {
    nome: string
    vulnerabilidades: {
        critico: number
        alto: number
        medio: number
        baixo: number
        info: number
    }
}

export const pentestApplications: PentestApplication[] = [
    // Exemplo: {
    //     nome: "Aplicação 1",
    //     vulnerabilidades: { critico: 0, alto: 0, medio: 0, baixo: 0, info: 0 }
    // },
    // Adicione mais aplicações conforme necessário
]

// Resumo de pentests (calculado automaticamente)
export const pentestSummary = {
    totalApps: pentestApplications.length,
    totalVulnerabilities: pentestApplications.reduce((sum, app) => 
        sum + app.vulnerabilidades.critico + app.vulnerabilidades.alto + 
        app.vulnerabilidades.medio + app.vulnerabilidades.baixo + app.vulnerabilidades.info, 0),
    criticas: pentestApplications.reduce((sum, app) => sum + app.vulnerabilidades.critico, 0),
    altas: pentestApplications.reduce((sum, app) => sum + app.vulnerabilidades.alto, 0),
    medias: pentestApplications.reduce((sum, app) => sum + app.vulnerabilidades.medio, 0),
    baixas: pentestApplications.reduce((sum, app) => sum + app.vulnerabilidades.baixo, 0)
}

// ===== TAREFAS / PLANO DE AÇÃO =====
export type TaskStatus = 'pendente' | 'em-andamento' | 'concluido'
export type TaskPriority = 'baixo' | 'medio' | 'alto'

export type Task = {
    id: string
    controleRelacionado?: number // ID do controle relacionado (opcional)
    status: TaskStatus
    progress: number // 0-100
    priority: TaskPriority
    titulo: string
    descricao: string
}

export const tarefas: Task[] = [
    // Exemplo:
    // {
    //     id: 't1',
    //     controleRelacionado: 1,
    //     status: 'pendente',
    //     progress: 0,
    //     priority: 'alto',
    //     titulo: 'Título da Tarefa',
    //     descricao: 'Descrição detalhada da tarefa'
    // },
    // Adicione mais tarefas conforme necessário
]

// Agrupamento de tarefas por status
export const tarefasPorStatus = {
    concluidas: tarefas.filter(t => t.status === 'concluido'),
    emAndamento: tarefas.filter(t => t.status === 'em-andamento'),
    pendentes: tarefas.filter(t => t.status === 'pendente'),
}

// ===== PONTOS DE ATENÇÃO =====
export type AttentionPoint = {
    titulo: string
    descricao: string
    impacto: 'baixo' | 'medio' | 'alto'
    status: 'pendente' | 'em-andamento' | 'resolvido'
}

export const pontosAtencao: AttentionPoint[] = [
    // Exemplo:
    // {
    //     titulo: 'Título do Ponto de Atenção',
    //     descricao: 'Descrição detalhada do ponto de atenção',
    //     impacto: 'alto',
    //     status: 'pendente'
    // },
    // Adicione mais pontos conforme necessário
]
