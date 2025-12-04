/**
 * DADOS PARA APRESENTAÇÃO - Perfin IA
 * 
 * Este arquivo contém a estrutura de dados para a apresentação.
 * Preencha os dados abaixo com as informações da sua apresentação.
 */

// ===== METADADOS DA APRESENTAÇÃO =====
export const presentationMetadata = {
    cliente: "Perfin IA",
    data: new Date().toLocaleDateString('pt-BR'),
    totalSlides: 26,
    framework: "Apresentação Perfin IA",
}

// ===== TAREFAS / PLANO DE AÇÃO =====
export type TaskStatus = 'pendente' | 'em-andamento' | 'concluido'
export type TaskPriority = 'baixo' | 'medio' | 'alto'

export type Task = {
    id: string
    status: TaskStatus
    progress: number // 0-100
    priority: TaskPriority
    titulo: string
    descricao: string
}

export const tarefas: Task[] = [
    // Adicione suas tarefas aqui
    // Exemplo:
    // {
    //     id: 't1',
    //     status: 'pendente',
    //     progress: 0,
    //     priority: 'alto',
    //     titulo: 'Título da Tarefa',
    //     descricao: 'Descrição detalhada da tarefa'
    // },
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
    // Adicione seus pontos de atenção aqui
    // Exemplo:
    // {
    //     titulo: 'Título do Ponto de Atenção',
    //     descricao: 'Descrição detalhada do ponto de atenção',
    //     impacto: 'alto',
    //     status: 'pendente'
    // },
]

// ===== DADOS VAZIOS PARA COMPATIBILIDADE COM COMPONENTES =====
// Estes dados são mantidos vazios para evitar erros nos componentes que ainda os referenciam
// Você pode removê-los se não forem necessários

export const cisStatusData: any[] = []
export const cisControls: any[] = []
export const workedControls: any[] = []
export const statusVsReference: any[] = []
export const implementationEvolution: any[] = []
export const workedEvolution: any[] = []
export const maturityEvolution: any[] = []
export const currentMaturity: any[] = []
export const vulnerabilityScanScope = {
    servidores: 0,
    estacoes: 0,
    total: 0
}
export const vulnerabilityEvolution: any[] = []
export const totalVulnerabilitiesTrend: any[] = []
export const pentestApplications: any[] = []
export const pentestSummary = {
    totalApps: 0,
    totalVulnerabilities: 0,
    criticas: 0,
    altas: 0,
    medias: 0,
    baixas: 0
}
