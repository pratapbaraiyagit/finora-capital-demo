'use client';

import * as React from 'react';
import {
  Wallet,
  TrendingUp,
  CalendarClock,
  Target,
  ArrowUpRight,
} from 'lucide-react';
import { portfolioMetrics, portfolioGrowth, assetAllocation } from '@/lib/data';
import { Reveal } from '@/components/site/reveal';

const iconMap = { Wallet, TrendingUp, CalendarClock, Target };

export function HeroDashboard() {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const max = Math.max(...portfolioGrowth.map((d) => d.value));
  const min = Math.min(...portfolioGrowth.map((d) => d.value));
  const range = max - min || 1;

  // Build smooth area path
  const w = 280;
  const h = 90;
  const pts = portfolioGrowth.map((d, i) => {
    const x = (i / (portfolioGrowth.length - 1)) * w;
    const y = h - ((d.value - min) / range) * (h - 12) - 6;
    return [x, y] as const;
  });
  const linePath = pts
    .map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`))
    .join(' ');
  const areaPath = `${linePath} L${w},${h} L0,${h} Z`;

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/10 via-transparent to-primary/5 blur-2xl" />
      <div className="relative rounded-3xl border border-border bg-card p-5 shadow-float sm:p-6">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          </div>
          <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Demo Dashboard
          </span>
        </div>

        {/* Portfolio header */}
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Portfolio Overview</p>
            <p className="mt-1 font-display text-2xl font-semibold tracking-tight">
              ₹24,85,000
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
            <TrendingUp className="h-3 w-3" />
            +12.4%
          </div>
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-2xl border border-border bg-secondary/40 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-foreground">Growth</p>
            <p className="text-[10px] text-muted-foreground">Last 12 months</p>
          </div>
          <svg
            viewBox={`0 0 ${w} ${h}`}
            className="mt-2 w-full"
            preserveAspectRatio="none"
            style={{ height: 90 }}
          >
            <defs>
              <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="hsl(var(--accent))"
                  stopOpacity="0.25"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(var(--accent))"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#heroArea)" />
            <path
              d={linePath}
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {pts.map((p, i) => (
              <circle
                key={i}
                cx={p[0]}
                cy={p[1]}
                r={hovered === i ? 3.5 : 0}
                fill="hsl(var(--accent))"
                className="transition-all"
              />
            ))}
          </svg>
          <div className="mt-1 flex justify-between text-[9px] text-muted-foreground">
            <span>Jan</span>
            <span>Apr</span>
            <span>Jul</span>
            <span>Dec</span>
          </div>
        </div>

        {/* Metric cards */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {portfolioMetrics.map((m, i) => {
            const Icon = iconMap[m.icon as keyof typeof iconMap];
            return (
              <div
                key={m.label}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="rounded-xl border border-border bg-background p-3 transition-all hover:border-accent/40 hover:shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-4 w-4 text-accent" />
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground/50" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{m.label}</p>
                <p className="mt-0.5 text-sm font-semibold">{m.value}</p>
              </div>
            );
          })}
        </div>

        {/* Asset allocation */}
        <div className="mt-4 rounded-2xl border border-border bg-secondary/40 p-4">
          <p className="text-xs font-medium">Asset Allocation</p>
          <div className="mt-3 flex h-2.5 w-full overflow-hidden rounded-full">
            {assetAllocation.map((a) => (
              <div
                key={a.name}
                style={{ width: `${a.value}%`, backgroundColor: a.color }}
                className="h-full"
              />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
            {assetAllocation.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between text-[11px]"
              >
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: a.color }}
                  />
                  {a.name}
                </span>
                <span className="font-medium">{a.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-[10px] text-muted-foreground">
          Illustrative demo data — not investment advice.
        </p>
      </div>
    </div>
  );
}
