"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Status Atual vs Referência"

interface CisStatusChartProps {
    data: Array<{
        name: string
        Atual: number
        Referencia: number
    }>
}

const chartConfig = {
    Atual: {
        label: "Atual",
        color: "#00ade8", // Ness Blue
    },
    Referencia: {
        label: "Referência",
        color: "#64748b", // Slate 500
    },
} satisfies ChartConfig

export function CisStatusChart({ data }: CisStatusChartProps) {
    // Filter data to remove items with 0 or NaN values if needed, or just pass through
    // The data comes with 'name' like "CIS 1", "CIS 2" etc.

    return (
        <Card className="bg-slate-950 border-slate-800">
            <CardHeader>
                <CardTitle className="text-slate-100">Status Atual vs Referência</CardTitle>
                <CardDescription className="text-slate-400">Comparativo de Aderência (%)</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px] w-full">
                    <BarChart accessibilityLayer data={data} layout="vertical" margin={{ left: 0 }}>
                        <CartesianGrid horizontal={false} stroke="#334155" opacity={0.3} />
                        <YAxis
                            dataKey="name"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 10 }}
                            width={50}
                        />
                        <XAxis type="number" domain={[0, 100]} hide />
                        <ChartTooltip
                            cursor={{ fill: '#334155', opacity: 0.1 }}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="Atual" fill="var(--color-Atual)" radius={[0, 4, 4, 0]} barSize={12} />
                        <Bar dataKey="Referencia" fill="var(--color-Referencia)" radius={[0, 4, 4, 0]} barSize={12} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium text-slate-300">
                    {/* Personalize este texto conforme necessário */}
                    Comparativo de aderência aos controles
                </div>
                <div className="text-slate-500 leading-none">
                    Dados baseados na avaliação realizada
                </div>
            </CardFooter>
        </Card>
    )
}
