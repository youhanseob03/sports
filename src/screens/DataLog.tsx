/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PlusCircle, Calendar, Filter, ChevronRight, TrendingUp, TrendingDown, Plus } from 'lucide-react';
import { Screen } from '../types';
import { Header } from '../components/Header';
import { cn } from '../lib/utils';

export function DataLog() {
  return (
    <div className="min-h-screen pb-24">
      <header className="bg-surface sticky top-0 z-40 w-full border-b border-outline-variant/10">
        <div className="flex items-center justify-between px-4 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <h1 className="text-primary font-display text-2xl font-extrabold tracking-tight">기록</h1>
          </div>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors active:scale-95">
            <Calendar className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pt-6 pb-24 space-y-8">
        {/* CTA Section */}
        <section className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-glow via-secondary to-tertiary-container rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass-card rounded-xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
            <div className="space-y-2">
              <h2 className="text-xl font-display font-bold">새로운 기록 추가</h2>
              <p className="text-sm text-outline max-w-xs leading-relaxed">
                오늘의 지표를 아직 측정하지 않으셨나요? 지금 바로 기록하여 연속 달성을 이어가세요.
              </p>
            </div>
            <button className="bg-primary hover:brightness-110 text-on-primary font-display font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-primary/20">
              <PlusCircle className="w-6 h-6" />
              <span>오늘의 데이터 기록하기</span>
            </button>
          </div>
        </section>

        {/* Filters */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-[10px] text-outline uppercase tracking-widest">조회 기간</h3>
            <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">
              상세 필터 <Filter className="w-3 h-3" />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {['최근 7일', '월간', '격주', '연간'].map((label, i) => (
              <button 
                key={label}
                className={cn(
                  "whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-sm transition-all border",
                  i === 0 
                  ? "bg-secondary-container text-on-secondary-container border-secondary/20" 
                  : "bg-surface-container-high text-outline border-outline-variant/10 hover:border-outline"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Daily Log List */}
        <section className="space-y-6">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-display font-bold text-lg">일일 로그</h3>
            <span className="font-mono text-[10px] text-outline">총 7개의 기록</span>
          </div>
          
          <div className="space-y-4">
            <LogCard 
              day="오늘" 
              date="10월 24일 목요일" 
              glowClass="glow-header-cyan"
              metrics={[
                { label: '걸음수', value: '12,482', trend: 'up', color: 'text-primary-glow' },
                { label: '수면', value: '7시간 20분', color: 'text-secondary' },
                { label: '칼로리', value: '2,105', color: 'text-tertiary-container' }
              ]} 
              active
            />
            <LogCard 
              day="어제" 
              date="10월 23일 수요일" 
              glowClass="glow-header-purple"
              metrics={[
                { label: '걸음수', value: '8,120', color: 'text-primary-glow' },
                { label: '수면', value: '64시간 45분', trend: 'down', color: 'text-secondary' },
                { label: '칼로리', value: '1,940', color: 'text-tertiary-container' }
              ]} 
              opacity="opacity-90"
            />
            <LogCard 
              day="그저께" 
              date="10월 22일 화요일" 
              glowClass="glow-header-orange"
              metrics={[
                { label: '걸음수', value: '14,902', color: 'text-primary-glow' },
                { label: '수면', value: '8시간 12분', color: 'text-secondary' },
                { label: '칼로리', value: '2,340', color: 'text-tertiary-container' }
              ]} 
              opacity="opacity-80"
            />
          </div>

          <button className="w-full py-4 flex items-center justify-center gap-2 text-outline hover:text-primary transition-colors font-bold text-sm border border-outline-variant/10 rounded-xl">
            <span>이전 기록 불러오기</span>
            <ChevronRight className="w-4 h-4 rotate-90" />
          </button>
        </section>
      </main>

      {/* FAB */}
      <button className="fixed right-6 bottom-24 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center active:scale-95 transition-transform z-40">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}

function LogCard({ day, date, glowClass, metrics, active = false, opacity = "opacity-100" }: any) {
  return (
    <div className={cn("glass-card rounded-xl p-6 hover:bg-surface-container-high transition-all group cursor-pointer", glowClass, opacity)}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className={cn("text-xs font-bold uppercase tracking-tight mb-1", active ? "text-primary" : "text-outline")}>{day}</p>
          <h4 className="font-display font-bold text-lg">{date}</h4>
        </div>
        <ChevronRight className="w-5 h-5 text-outline-variant group-hover:text-primary transition-colors" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {metrics.map((m: any, i: number) => (
          <div key={i} className="flex flex-col">
            <span className="font-mono text-[10px] text-outline uppercase tracking-widest mb-1">{m.label}</span>
            <div className="flex items-baseline gap-1">
              <span className={cn("text-lg font-display font-black", m.color)}>{m.value}</span>
              {m.trend === 'up' && <TrendingUp className={cn("w-3 h-3", m.color)} />}
              {m.trend === 'down' && <TrendingDown className="w-3 h-3 text-red-400" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
