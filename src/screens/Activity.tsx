/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Flame, MapPin, TipsAndUpdates } from 'lucide-react';
import { Screen } from '../types';
import { Header } from '../components/Header';
import { cn } from '../lib/utils';

export function Activity() {
  return (
    <div className="min-h-screen pb-24">
      <Header title="활동" />
      
      <main className="max-w-7xl mx-auto px-4 pt-6 space-y-6">
        {/* Ring Visualizer */}
        <section className="glass-card rounded-xl p-8 flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-glow to-transparent opacity-30"></div>
          
          <div className="relative w-64 h-64">
            <svg className="w-full h-full -rotate-90">
              {/* Steps Ring */}
              <circle cx="128" cy="128" r="90" className="fill-none stroke-primary/10" strokeWidth="12" />
              <motion.circle 
                cx="128" cy="128" r="90" 
                className="fill-none stroke-primary glow-cyan" 
                strokeWidth="12" 
                strokeLinecap="round"
                initial={{ strokeDasharray: "565.48", strokeDashoffset: "565.48" }}
                animate={{ strokeDashoffset: "141.37" }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              {/* Calories Ring */}
              <circle cx="128" cy="128" r="72" className="fill-none stroke-secondary/10" strokeWidth="10" />
              <motion.circle 
                cx="128" cy="128" r="72" 
                className="fill-none stroke-secondary" 
                strokeWidth="10" 
                strokeLinecap="round"
                initial={{ strokeDasharray: "452.39", strokeDashoffset: "452.39" }}
                animate={{ strokeDashoffset: "158.33" }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              />
              {/* Distance Ring */}
              <circle cx="128" cy="128" r="56" className="fill-none stroke-tertiary-container/10" strokeWidth="8" />
              <motion.circle 
                cx="128" cy="128" r="56" 
                className="fill-none stroke-tertiary-container" 
                strokeWidth="8" 
                strokeLinecap="round"
                initial={{ strokeDasharray: "351.85", strokeDashoffset: "351.85" }}
                animate={{ strokeDashoffset: "87.96" }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-mono text-[10px] text-outline uppercase tracking-widest">걸음수</span>
              <span className="text-5xl font-display font-extrabold text-primary">8,432</span>
              <span className="font-mono text-[10px] text-outline">목표: 10,000</span>
            </div>
          </div>

          <div className="grid grid-cols-2 w-full gap-4 mt-8">
            <div className="bg-surface-container-high/50 p-4 rounded-lg flex flex-col border border-outline-variant/10">
              <div className="flex items-center gap-2 mb-1">
                <Flame className="w-4 h-4 text-secondary" />
                <span className="font-mono text-[10px] text-outline uppercase">칼로리</span>
              </div>
              <p className="text-xl font-display font-bold">1,240 <span className="text-xs font-normal text-outline">kcal</span></p>
            </div>
            <div className="bg-surface-container-high/50 p-4 rounded-lg flex flex-col border border-outline-variant/10">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-tertiary-container" />
                <span className="font-mono text-[10px] text-outline uppercase">거리</span>
              </div>
              <p className="text-xl font-display font-bold">5.8 <span className="text-xs font-normal text-outline">km</span></p>
            </div>
          </div>
        </section>

        {/* Weekly Progress */}
        <section className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-lg">주간 진행 상황</h2>
            <span className="font-mono text-[10px] text-primary-glow font-bold">지난주 대비 +12%</span>
          </div>
          
          <div className="flex items-end justify-between h-40 gap-2">
            {[
              { day: '월', p: 60 },
              { day: '화', p: 85 },
              { day: '수', p: 70 },
              { day: '목', p: 95, highlight: true },
              { day: '금', p: 40 },
              { day: '토', p: 55 },
              { day: '일', p: 25 },
            ].map((item) => (
              <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-surface-container-highest rounded-full h-full relative overflow-hidden">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${item.p}%` }}
                    className={cn(
                      "absolute bottom-0 w-full transition-all",
                      item.highlight ? "bg-primary-glow glow-cyan" : "bg-primary/40"
                    )}
                  />
                </div>
                <span className={cn("text-[10px] font-mono", item.highlight ? "text-primary-glow font-bold" : "text-outline")}>
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Insight Card */}
        <section className="space-y-3">
          <h2 className="px-1 font-display font-bold text-lg">인사이트</h2>
          <div className="bg-primary-container p-6 rounded-xl flex items-start gap-4 border border-primary/20">
            <div className="p-2 bg-on-primary-container rounded-full flex items-center justify-center">
              <TipsAndUpdates className="w-5 h-5 text-primary-glow" />
            </div>
            <div className="space-y-1">
              <p className="text-on-primary font-bold">대단해요!</p>
              <p className="text-sm text-on-primary-container/80 leading-relaxed">
                4일 연속으로 일일 걸음수 목표를 달성하셨습니다. 이 페이스를 유지하면 심폐 지구력이 5% 향상될 수 있습니다.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Mocking TipsAndUpdates as a Lucide Sparkles variant
function TipsAndUpdates(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>;
}
