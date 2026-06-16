/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Footprints, Moon, Flame, Plus, ChevronRight, BarChart2 } from 'lucide-react';
import { Screen } from '../types';
import { Header } from '../components/Header';
import { cn } from '../lib/utils';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="min-h-screen pb-24">
      <Header title="반가워요, Alex" />
      
      <main className="max-w-7xl mx-auto px-4 pt-6 space-y-6">
        {/* Insight Card */}
        <section className="glass-card rounded-xl p-6 relative overflow-hidden group">
          <p className="text-xs font-mono text-outline uppercase tracking-widest mb-2">오늘의 분석</p>
          <h2 className="text-xl font-display font-bold leading-tight">
            심박수가 지난주보다 12% 더 안정적입니다. 지금처럼 유지하세요!
          </h2>
        </section>

        {/* Activity Summary - Navigation to Activity */}
        <section 
          className="glass-card rounded-xl p-6 glow-cyan cursor-pointer transition-all hover:scale-[1.02] active:scale-95"
          onClick={() => onNavigate('activity')}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Footprints className="text-primary w-6 h-6" />
            </div>
            <div className="text-right">
              <p className="text-xs font-mono text-outline uppercase">일일 목표: 12k</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full -rotate-90">
                <circle cx="48" cy="48" r="40" className="fill-none stroke-primary/10" strokeWidth="8" />
                <circle cx="48" cy="48" r="40" className="fill-none stroke-primary glow-cyan" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="37.68" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold">85%</span>
              </div>
            </div>
            <div>
              <p className="text-4xl font-display font-extrabold text-primary">10,234</p>
              <p className="text-sm text-outline">걸음수</p>
            </div>
          </div>
        </section>

        {/* Sleep Summary - Navigation to Sleep */}
        <section 
          className="glass-card rounded-xl p-6 glow-purple cursor-pointer transition-all hover:scale-[1.02] active:scale-95"
          onClick={() => onNavigate('sleep')}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <Moon className="text-secondary w-6 h-6" />
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs text-secondary font-bold">최적</span>
            </div>
          </div>
          
          <div>
            <p className="text-3xl font-display font-bold">7시간 20분</p>
            <p className="text-sm text-outline">수면 시간</p>
          </div>
          
          <div className="mt-4">
            <div className="h-1.5 w-full bg-secondary/10 rounded-full overflow-hidden">
              <div className="h-full bg-secondary glow-purple w-[92%]" />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[10px] text-outline font-mono">수면 질: 우수</span>
              <span className="text-[10px] text-secondary font-mono">92%</span>
            </div>
          </div>
        </section>

        {/* Calories Card */}
        <section className="glass-card rounded-xl p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-tertiary/10 rounded-lg">
              <Flame className="text-tertiary w-6 h-6" />
            </div>
            <button className="p-1 hover:bg-surface-container-high rounded-full transition-colors">
              <Plus className="w-6 h-6 text-outline" />
            </button>
          </div>
          
          <div className="mb-4">
            <p className="text-3xl font-display font-bold">1,850</p>
            <p className="text-sm text-outline">소모 칼로리 (KCAL)</p>
          </div>

          <div className="flex gap-1 h-2">
            {[1, 2, 3].map(i => <div key={i} className="flex-1 bg-tertiary/60 rounded-full" />)}
            {[4, 5].map(i => <div key={i} className="flex-1 bg-surface-container-high rounded-full" />)}
            <span className="text-[10px] text-outline font-mono ml-2">일일 목표</span>
          </div>
        </section>

        {/* Weekly Chart */}
        <section className="glass-card rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display font-bold">주간 활동량</h3>
            <div className="flex bg-surface-container-high rounded-lg p-1 text-[10px] font-bold">
              <button className="px-3 py-1 rounded-md">월간</button>
              <button className="px-3 py-1 bg-primary-glow text-surface rounded-md">주간</button>
            </div>
          </div>
          
          <div className="flex items-end justify-between h-40 gap-2">
            {['월', '화', '수', '목', '금', '토', '일'].map((day, i) => {
              const heights = [40, 60, 30, 100, 50, 20, 80];
              const isToday = i === 3; // Thursday
              return (
                <div key={day} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-surface-container-highest rounded-t-lg relative overflow-hidden h-full">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${heights[i]}%` }}
                      className={cn(
                        "absolute bottom-0 w-full",
                        isToday ? "bg-primary-glow glow-cyan" : "bg-primary/40"
                      )} 
                    />
                  </div>
                  <span className={cn("text-[10px] font-mono", isToday ? "text-primary font-bold" : "text-outline")}>{day}</span>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
