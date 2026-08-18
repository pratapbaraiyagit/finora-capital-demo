'use client';

import * as React from 'react';
import { Calculator, Target, TrendingUp, Wallet, RotateCcw } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

function fmtINR(n: number) {
  return new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
  style: 'currency',
    currency: 'INR',
  }).format(Math.round(n));
}

function fmtShort(n: number) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)}Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(2)}L`;
  return `₹${Math.round(n).toLocaleString('en-IN')}`;
}

export function FinancialCalculator() {
  const [monthly, setMonthly] = React.useState(10000);
  const [rate, setRate] = React.useState(10);
  const [years, setYears] = React.useState(10);

  const r = rate / 100 / 12;
  const n = years * 12;
  const invested = monthly * n;
  const future =
    r === 0
      ? invested
      : monthly * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
  const returns = future - invested;

  // Goal planner
  const [goal, setGoal] = React.useState(5000000);
  const [current, setCurrent] = React.useState(500000);
  const [contrib, setContrib] = React.useState(15000);
  const [horizon, setHorizon] = React.useState(15);
  const goalRate = 10 / 100 / 12;
  const goalN = horizon * 12;
  const goalFuture =
    goalRate === 0
      ? current + contrib * goalN
      : current * Math.pow(1 + goalRate, goalN) +
        contrib * (((Math.pow(1 + goalRate, goalN) - 1) / goalRate) * (1 + goalRate));
  const progress = Math.min((goalFuture / goal) * 100, 100);

  return (
    <div className="space-y-20">
      {/* SIP Calculator */}
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  SIP Calculator
                </h3>
                <p className="text-sm text-muted-foreground">
                  Estimate the future value of monthly investments.
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-6">
              <SliderField
                label="Monthly Investment"
                value={monthly}
                min={500}
                max={100000}
                step={500}
                onChange={setMonthly}
                display={fmtINR(monthly)}
              />
              <SliderField
                label="Expected Annual Return"
                value={rate}
                min={1}
                max={20}
                step={0.5}
                onChange={setRate}
                display={`${rate}%`}
              />
              <SliderField
                label="Investment Duration"
                value={years}
                min={1}
                max={40}
                step={1}
                onChange={setYears}
                display={`${years} yr${years > 1 ? 's' : ''}`}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-primary p-7 text-primary-foreground shadow-float sm:p-8">
            <p className="text-sm text-primary-foreground/70">
              Estimated Results
            </p>
            <div className="mt-3 grid gap-5 sm:grid-cols-3">
              <ResultCard
                label="Invested Amount"
                value={fmtShort(invested)}
                icon={<Wallet className="h-4 w-4" />}
              />
              <ResultCard
                label="Estimated Returns"
                value={fmtShort(returns)}
                icon={<TrendingUp className="h-4 w-4" />}
              />
              <ResultCard
                label="Total Value"
                value={fmtShort(future)}
                icon={<Target className="h-4 w-4" />}
                highlight
              />
            </div>

            {/* Donut */}
            <div className="mt-7 flex items-center gap-6">
              <Donut
                segments={[
                  { value: invested, color: 'hsl(var(--chart-2))' },
                  { value: returns, color: 'hsl(var(--chart-1))' },
                ]}
              />
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'hsl(var(--chart-2))' }} />
                  <span className="text-primary-foreground/70">Invested</span>
                  <span className="font-medium">{fmtShort(invested)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'hsl(var(--chart-1))' }} />
                  <span className="text-primary-foreground/70">Returns</span>
                  <span className="font-medium">{fmtShort(returns)}</span>
                </div>
              </div>
            </div>

            {/* Growth chart */}
            <GrowthChart monthly={monthly} rate={rate} years={years} />
          </div>
        </Reveal>
      </div>

      {/* Goal Planner */}
      <Reveal>
        <div className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                Plan your financial goal
              </h3>
              <p className="text-sm text-muted-foreground">
                See how your savings and contributions could grow toward a target.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <SliderField
                label="Goal Amount"
                value={goal}
                min={100000}
                max={50000000}
                step={100000}
                onChange={setGoal}
                display={fmtShort(goal)}
              />
              <SliderField
                label="Current Savings"
                value={current}
                min={0}
                max={10000000}
                step={50000}
                onChange={setCurrent}
                display={fmtShort(current)}
              />
              <SliderField
                label="Monthly Contribution"
                value={contrib}
                min={500}
                max={100000}
                step={500}
                onChange={setContrib}
                display={fmtINR(contrib)}
              />
              <SliderField
                label="Time Horizon"
                value={horizon}
                min={1}
                max={40}
                step={1}
                onChange={setHorizon}
                display={`${horizon} yr${horizon > 1 ? 's' : ''}`}
              />
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-secondary/50 p-7">
              <p className="text-sm text-muted-foreground">
                Estimated Goal Progress
              </p>
              <p className="mt-1 font-display text-4xl font-semibold tracking-tight">
                {progress.toFixed(0)}%
              </p>
              <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-6 space-y-2 text-sm">
                <Row label="Target" value={fmtShort(goal)} />
                <Row label="Projected Value" value={fmtShort(goalFuture)} />
                <Row
                  label="Status"
                  value={
                    progress >= 100
                      ? 'On track to meet goal'
                      : `Short by ${fmtShort(Math.max(goal - goalFuture, 0))}`
                  }
                  accent={progress >= 100}
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
          <Calculator className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-sm leading-relaxed">
            This calculator is for educational and demonstration purposes
            only. Actual investment outcomes may vary. Figures assume
            consistent monthly contributions and a constant annual rate —
            real markets fluctuate.
          </p>
        </div>
      </Reveal>
    </div>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="rounded-lg bg-secondary px-2.5 py-1 text-sm font-semibold text-foreground">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-accent"
        aria-label={label}
      />
      <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
        <span>{min.toLocaleString('en-IN')}</span>
        <span>{max.toLocaleString('en-IN')}</span>
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
  icon,
  highlight,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-4 ${
        highlight ? 'bg-accent text-accent-foreground' : 'bg-primary-foreground/5'
      }`}
    >
      <div className="flex items-center gap-1.5 text-xs opacity-80">
        {icon}
        {label}
      </div>
      <p className="mt-2 font-display text-xl font-semibold tracking-tight">
        {value}
      </p>
    </div>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2">
      <span className="text-muted-foreground">{label}</span>
      <span className={`font-medium ${accent ? 'text-accent' : ''}`}>
        {value}
      </span>
    </div>
  );
}

function Donut({ segments }: { segments: { value: number; color: string }[] }) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = 52;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg viewBox="0 0 140 140" className="h-36 w-36 -rotate-90">
      <circle
        cx="70"
        cy="70"
        r={r}
        fill="none"
        stroke="hsl(var(--primary-foreground) / 0.1)"
        strokeWidth="14"
      />
      {segments.map((s, i) => {
        const len = (s.value / total) * c;
        const el = (
          <circle
            key={i}
            cx="70"
            cy="70"
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth="14"
            strokeDasharray={`${len} ${c - len}`}
            strokeDashoffset={-offset}
            strokeLinecap="round"
          />
        );
        offset += len;
        return el;
      })}
    </svg>
  );
}

function GrowthChart({
  monthly,
  rate,
  years,
}: {
  monthly: number;
  rate: number;
  years: number;
}) {
  const points = React.useMemo(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const arr: { year: number; invested: number; value: number }[] = [];
    for (let y = 0; y <= years; y++) {
      const months = y * 12;
      const inv = monthly * months;
      const val =
        r === 0
          ? inv
          : monthly * (((Math.pow(1 + r, months) - 1) / r) * (1 + r));
      arr.push({ year: y, invested: inv, value: val });
    }
    return arr;
  }, [monthly, rate, years]);

  const w = 500;
  const h = 150;
  const max = Math.max(...points.map((p) => p.value)) || 1;
  const xFor = (i: number) => (i / (points.length - 1)) * w;
  const yFor = (v: number) => h - (v / max) * (h - 16) - 8;

  const valLine = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${xFor(i)},${yFor(p.value)}`)
    .join(' ');
  const valArea = `${valLine} L${w},${h} L0,${h} Z`;
  const invLine = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${xFor(i)},${yFor(p.invested)}`)
    .join(' ');

  return (
    <div className="mt-7">
      <div className="flex items-center justify-between text-xs">
        <span className="text-primary-foreground/70">Growth over time</span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-chart-2" />
            Invested
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-chart-1" />
            Value
          </span>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 w-full" style={{ height: 150 }}>
        <defs>
          <linearGradient id="calcArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--chart-1))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--chart-1))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={valArea} fill="url(#calcArea)" />
        <path d={valLine} fill="none" stroke="hsl(var(--chart-1))" strokeWidth="2.5" strokeLinecap="round" />
        <path d={invLine} fill="none" stroke="hsl(var(--chart-2))" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>
      <div className="mt-1 flex justify-between text-[10px] text-primary-foreground/50">
        <span>0y</span>
        <span>{Math.round(years / 2)}y</span>
        <span>{years}y</span>
      </div>
    </div>
  );
}
