# Biblioteca de Componentes

Este documento lista todos os componentes disponíveis no template de apresentação.

## 📦 Componentes UI Base

### Button
Componente de botão com múltiplas variantes.

```tsx
import { Button } from '@/components/ui/button'

<Button variant="default" size="default">Clique aqui</Button>
```

**Variantes:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`  
**Tamanhos:** `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`

---

### Card
Componente de card para agrupar conteúdo.

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
  <CardFooter>Rodapé</CardFooter>
</Card>
```

---

### Badge
Componente de badge para labels e tags.

```tsx
import { Badge } from '@/components/ui/badge'

<Badge variant="default">Novo</Badge>
```

**Variantes:** `default`, `secondary`, `destructive`, `outline`

---

### Alert
Componente de alerta para mensagens importantes.

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

<Alert variant="info">
  <AlertTitle>Informação</AlertTitle>
  <AlertDescription>Mensagem de alerta</AlertDescription>
</Alert>
```

**Variantes:** `default`, `info`, `success`, `warning`, `danger`

---

### Progress
Barra de progresso.

```tsx
import { Progress } from '@/components/ui/progress'

<Progress value={75} />
```

---

### StatCard
Card de estatística com ícone e tendência.

```tsx
import { StatCard } from '@/components/ui/stat-card'

<StatCard
  title="Total"
  value={1234}
  description="Descrição"
  icon={TrendingUp}
  trend={{ value: 12, label: "vs mês anterior" }}
  variant="success"
/>
```

**Variantes:** `default`, `success`, `warning`, `danger`, `info`

---

### Table
Componente de tabela para dados estruturados.

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Coluna 1</TableHead>
      <TableHead>Coluna 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Dado 1</TableCell>
      <TableCell>Dado 2</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

### Tabs
Componente de abas para organizar conteúdo.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Aba 1</TabsTrigger>
    <TabsTrigger value="tab2">Aba 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Conteúdo 1</TabsContent>
  <TabsContent value="tab2">Conteúdo 2</TabsContent>
</Tabs>
```

---

### Separator
Separador visual.

```tsx
import { Separator } from '@/components/ui/separator'

<Separator orientation="horizontal" />
```

**Orientações:** `horizontal`, `vertical`

---

### Avatar
Componente de avatar para imagens de perfil.

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="Nome" />
  <AvatarFallback>NM</AvatarFallback>
</Avatar>
```

---

## 🎨 Componentes de Slides

### SlideLayout
Layout base para slides.

```tsx
import { SlideLayout, ContentContainer } from '@/components/slides/SlideLayout'

<SlideLayout title="Título" subtitle="Subtítulo" icon={Shield}>
  <ContentContainer variant="stack" gap={6}>
    {/* Conteúdo */}
  </ContentContainer>
</SlideLayout>
```

**Variantes de ContentContainer:** `stack`, `grid`  
**Gap:** `2`, `4`, `6`, `8`

---

### DataCard
Card de dados com ícone e status.

```tsx
import { DataCard } from '@/components/slides/DataCard'

<DataCard
  title="Título"
  value={123}
  subtitle="Subtítulo"
  icon={Server}
  status="success"
/>
```

**Status:** `success`, `warning`, `danger`, `info`, `neutral`

---

### ChartCard
Card para exibir gráficos.

```tsx
import { ChartCard } from '@/components/slides/ChartCard'

<ChartCard
  title="Título do Gráfico"
  subtitle="Descrição"
  icon={BarChart3}
  chart={<MeuGrafico />}
  insight={{ value: "75%", label: "acima da média" }}
  status="success"
  height="lg"
/>
```

**Alturas:** `sm`, `md`, `lg`

---

### MetricGrid
Grid de métricas.

```tsx
import { MetricGrid } from '@/components/slides/MetricGrid'

<MetricGrid
  metrics={[
    { id: '1', label: 'Métrica 1', value: 100, icon: TrendingUp },
    { id: '2', label: 'Métrica 2', value: 200, icon: Activity }
  ]}
  columns={4}
  variant="detailed"
/>
```

**Variantes:** `default`, `detailed`  
**Colunas:** `2`, `3`, `4`

---

### InfoPanel
Painel de informações.

```tsx
import { InfoPanel } from '@/components/slides/InfoPanel'

<InfoPanel variant="highlight" status="info">
  <p>Mensagem importante</p>
</InfoPanel>
```

**Variantes:** `default`, `highlight`, `bordered`, `glassmorphic`  
**Status:** `info`, `success`, `warning`, `danger`

---

### StatusIndicator
Indicador de status.

```tsx
import { StatusIndicator } from '@/components/slides/StatusIndicator'

<StatusIndicator
  status="success"
  label="Status"
  description="Descrição"
  icon={CheckCircle2}
/>
```

**Status:** `success`, `warning`, `danger`, `info`, `neutral`

---

### Timeline
Componente de linha do tempo.

```tsx
import { Timeline } from '@/components/slides/Timeline'

<Timeline
  items={[
    {
      id: '1',
      title: 'Evento 1',
      description: 'Descrição',
      date: 'Jan/2024',
      status: 'completed'
    },
    {
      id: '2',
      title: 'Evento 2',
      status: 'current'
    }
  ]}
  orientation="vertical"
/>
```

**Orientações:** `vertical`, `horizontal`  
**Status:** `completed`, `current`, `upcoming`

---

### ComparisonTable
Tabela de comparação.

```tsx
import { ComparisonTable } from '@/components/slides/ComparisonTable'

<ComparisonTable
  items={[
    {
      feature: 'Recurso 1',
      description: 'Descrição',
      values: {
        col1: true,
        col2: false,
        col3: 'Valor'
      }
    }
  ]}
  columns={[
    { key: 'col1', label: 'Coluna 1' },
    { key: 'col2', label: 'Coluna 2', highlight: true },
    { key: 'col3', label: 'Coluna 3' }
  ]}
/>
```

---

### FeatureGrid
Grid de features.

```tsx
import { FeatureGrid } from '@/components/slides/FeatureGrid'

<FeatureGrid
  features={[
    {
      id: '1',
      title: 'Feature 1',
      description: 'Descrição',
      icon: Shield,
      highlight: false
    }
  ]}
  columns={3}
/>
```

**Colunas:** `2`, `3`, `4`

---

## 📊 Componentes de Gráficos

### CisStatusChart
Gráfico de barras comparativo.

```tsx
import { CisStatusChart } from '@/components/presentation/cis-status-chart'

<CisStatusChart
  data={[
    { name: 'Controle 1', Atual: 80, Referencia: 60 },
    { name: 'Controle 2', Atual: 90, Referencia: 70 }
  ]}
/>
```

---

### EvolutionTimeline
Gráfico de linha temporal.

```tsx
import { EvolutionTimeline } from '@/components/presentation/evolution-timeline'

<EvolutionTimeline
  data={[
    { periodo: 'Jan/24', geral: 50 },
    { periodo: 'Fev/24', geral: 60 }
  ]}
  lines={[{ dataKey: 'geral', name: 'Evolução', color: '#00ade8' }]}
/>
```

---

### MaturityRadar
Gráfico radar de maturidade.

```tsx
import { MaturityRadar } from '@/components/presentation/maturity-radar'

<MaturityRadar
  data={[
    { controleId: 1, nivel: 'Gerenciado', valor: 75 }
  ]}
  controleNames={{ 1: 'Controle 1' }}
/>
```

---

### VulnerabilityEvolutionChart
Gráfico de evolução de vulnerabilidades.

```tsx
import { VulnerabilityEvolutionChart } from '@/components/presentation/vulnerability-chart'

<VulnerabilityEvolutionChart
  data={[
    { mes: 'Jan/24', novas: 10, tratadas: 5, total: 100 }
  ]}
/>
```

---

## 🎯 Componentes de Navegação

### MinimapOverlay
Minimap para navegação entre slides.

```tsx
import { MinimapOverlay } from '@/components/presentation/slide-minimap'

<MinimapOverlay
  isOpen={showMinimap}
  onClose={() => setShowMinimap(false)}
  slides={slides}
  currentSlide={current}
  onNavigate={goToSlide}
  sections={slideSections}
/>
```

---

### PresenterView
Modo apresentador.

```tsx
import { PresenterView } from '@/components/presentation/presenter-mode'

<PresenterView
  isOpen={showPresenter}
  onToggle={() => setShowPresenter(!showPresenter)}
  currentSlide={{ speakerNotes: 'Notas' }}
  nextSlide={{ speakerNotes: 'Próximas notas' }}
  currentIndex={0}
  totalSlides={26}
/>
```

---

### ProgressIndicator
Indicador de progresso.

```tsx
import { ProgressIndicator } from '@/components/presentation/progress-indicator'

<ProgressIndicator
  current={5}
  total={26}
  sections={slideSections}
/>
```

---

## 🎨 Design System

Todos os componentes seguem o design system da ness:

- **Cores primárias:** `#00ade8` (primary-500)
- **Fontes:** Inter (primária), Montserrat (secundária)
- **Paleta:** Slate (950 a 50)
- **Animações:** Framer Motion
- **Ícones:** Lucide React

---

## 📝 Notas de Uso

1. Todos os componentes são TypeScript e totalmente tipados
2. Componentes seguem padrões acessíveis (ARIA)
3. Animações podem ser desabilitadas removendo `motion` do Framer Motion
4. Cores podem ser customizadas via Tailwind classes
5. Componentes são responsivos por padrão

---

**Para mais exemplos, consulte os slides em `app/presentation/page.tsx`**

