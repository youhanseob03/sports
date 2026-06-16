/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Moon, TrendingUp, Play, BarChart2 } from 'lucide-react';
import { Screen } from '../types';
import { Header } from '../components/Header';
import { cn } from '../lib/utils';

export function Sleep() {
  return (
    <div className="min-h-screen pb-24">
      <Header title="수면" />
      
      <main className="max-w-7xl mx-auto px-4 pt-6 pb-24 space-y-6">
        {/* Score & Duration */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Score Circle */}
          <div className="glass-card rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent opacity-50"></div>
            <div className="relative w-48 h-48 mb-6">
              <svg className="w-full h-full -rotate-90">
                <circle cx="96" cy="96" r="88" className="fill-none stroke-secondary/10" strokeWidth="8" />
                <motion.circle 
                  cx="96" cy="96" r="88" 
                  className="fill-none stroke-secondary" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 8px rgba(218, 185, 255, 0.4))" }}
                  initial={{ strokeDasharray: "552.92", strokeDashoffset: "552.92" }}
                  animate={{ strokeDashoffset: "82.93" }} // 85%
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl font-display font-extrabold text-secondary">85</span>
                <span className="font-mono text-[10px] text-outline uppercase tracking-widest">수면 점수</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-display font-bold mb-1">탁월한 회복</h3>
              <p className="text-sm text-outline">평균보다 수면 품질이 12% 향상되었습니다.</p>
            </div>
          </div>

          {/* duration info */}
          <div className="glass-card rounded-xl p-8 flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/40 to-transparent opacity-50"></div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-2">수면 시간</h3>
                <p className="text-4xl font-display font-extrabold">7시간 20분</p>
              </div>
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Moon className="w-6 h-6 text-secondary fill-current" />
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface-container-high/40 rounded-lg">
                <p className="font-mono text-[10px] text-outline uppercase mb-1">취침</p>
                <p className="text-lg font-bold">오후 11:15</p>
              </div>
              <div className="p-4 bg-surface-container-high/40 rounded-lg">
                <p className="font-mono text-[10px] text-outline uppercase mb-1">기상</p>
                <p className="text-lg font-bold">오전 06:35</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stages Chart */}
        <section className="glass-card rounded-xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-display font-bold text-lg">수면 단계</h3>
            <span className="font-mono text-[10px] text-outline uppercase">상세 타임라인</span>
          </div>
          
          <div className="h-48 flex items-end gap-1 mb-8">
            {[12, 32, 24, 48, 28, 36, 52, 40, 20, 44, 32, 16].map((h, i) => {
              const colors = ["bg-secondary/20", "bg-secondary/60", "bg-secondary/40", "bg-secondary"];
              const color = colors[i % 4];
              return (
                <motion.div 
                  key={i} 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className={cn("flex-1 rounded-t-sm", color)} 
                />
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
             <StageLegend color="bg-secondary/20" label="깨어있음" value="5%" />
             <StageLegend color="bg-secondary/60" label="렘" value="22%" />
             <StageLegend color="bg-secondary/40" label="얕은 수면" value="48%" />
             <StageLegend color="bg-secondary" label="깊은 수면" value="25%" />
          </div>
        </section>

        {/* Consistency */}
        <section className="glass-card rounded-xl p-6">
          <h3 className="font-display font-bold text-lg mb-6">주간 규칙성</h3>
          <div className="flex items-end justify-between h-40 gap-3 px-2">
            {['월', '화', '수', '목', '금', '토', '일'].map((day, i) => {
              const h = [70, 85, 92, 65, 75, 80, 60][i];
              const isMatch = i === 2; // Wednesday
              return (
                <div key={day} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-surface-container-highest rounded-t-xl h-full relative">
                    <motion.div 
                      className={cn("absolute bottom-0 w-full rounded-t-xl", isMatch ? "bg-secondary/60" : "bg-surface-container-highest opacity-50")}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                    >
                      {isMatch && <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-secondary">8시간</span>}
                    </motion.div>
                  </div>
                  <span className={cn("text-[10px] font-mono", isMatch ? "text-secondary font-bold" : "text-outline")}>{day}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-outline-variant/10 pt-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-secondary" />
              <span className="text-sm">규칙성 4% 상승</span>
            </div>
            <button className="text-secondary font-bold hover:underline">인사이트</button>
          </div>
        </section>

        {/* Atmosphere */}
        <section className="glass-card rounded-xl h-48 overflow-hidden relative group cursor-pointer transition-all hover:scale-[1.01]">
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
            <div className="space-y-1">
              <h4 className="text-lg font-display font-bold">수면 사운드스케이프</h4>
              <p className="text-xs text-outline tracking-tight">깊은 수면을 위한 액티브 사운드스케이프</p>
            </div>
            <button className="w-12 h-12 rounded-full bg-secondary text-surface flex items-center justify-center glow-purple active:scale-90 transition-transform">
              <Play className="fill-current w-5 h-5 ml-1" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

function StageLegend({ color, label, value }: { color: string, label: string, value: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={cn("w-3 h-3 rounded-full", color)} />
      <span className="font-mono text-[10px] text-outline">{label} ({value})</span>
    </div>
  );
}
