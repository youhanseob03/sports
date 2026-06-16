/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Edit2, Star, ShieldCheck, User, Target, Watch, Lock, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { Screen } from '../types';
import { Header } from '../components/Header';
import { cn } from '../lib/utils';

export function Profile() {
  return (
    <div className="min-h-screen pb-24">
      <Header title="프로필" showProfileImg={false} />
      
      <main className="max-w-7xl mx-auto px-4 mt-8 space-y-6">
        {/* Profile Header */}
        <section className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="relative">
            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary-glow to-secondary">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-surface">
                <img 
                  alt="Alex profile large" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpdTud_DE3SLWHBeZQDa_ZzugyK5biZDxzXwlZxCteDMMNxTc_BHsl8uUh1qDKgjA6W_Y_8HLEN1v9aUGUNHE7T0hmRxlFLDvIV7gNitrvwYE0IWYIp-QWWJimv5kgGP-tR27g8y2B3UTlZWuC5TyIM-gq08Ux4cL26Oi3n2vJUk2AfUj18OisN_vrlEomOvxhJeFOZxdTZ1mM4SsxYPsHsIgogcgpI2VBwmNy13ahA8TdKj0R8J6Eg8t_-0r6HXy5Ehxlv7ya0uA" 
                />
              </div>
            </div>
            <button className="absolute bottom-1 right-1 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center border-2 border-surface active:scale-90 transition-transform">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl font-display font-extrabold">Alex</h2>
            <p className="font-mono text-[10px] text-outline tracking-widest uppercase">ID: VIT-8829-XL</p>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center space-y-1 border-t-2 border-primary/30">
            <Star className="w-5 h-5 text-primary fill-current" />
            <span className="font-mono text-[10px] text-outline uppercase">가입일</span>
            <span className="font-display font-bold text-lg text-on-surface">2023년 10월</span>
          </div>
          <div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center space-y-1 border-t-2 border-secondary/30">
            <ShieldCheck className="w-5 h-5 text-secondary fill-current" />
            <span className="font-mono text-[10px] text-outline uppercase">등급: 프리미엄</span>
            <span className="font-display font-bold text-lg text-on-surface">Premium</span>
          </div>
        </div>

        {/* Settings Groups */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-mono text-[10px] text-outline uppercase px-2">계정 설정</h3>
            <div className="glass-card rounded-2xl overflow-hidden divide-y divide-outline-variant/10">
              <SettingsItem icon={User} label="개인 정보" color="text-primary" />
              <SettingsItem icon={Target} label="건강 목표" color="text-secondary" />
              <SettingsItem icon={Watch} label="연결된 기기" color="text-primary-glow" badge="2개 활성" />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-mono text-[10px] text-outline uppercase px-2">환경 설정 및 지원</h3>
            <div className="glass-card rounded-2xl overflow-hidden divide-y divide-outline-variant/10">
              <SettingsItem icon={Lock} label="개인정보 보호" />
              <SettingsItem icon={HelpCircle} label="도움말" />
            </div>
          </div>
        </section>

        {/* Logout */}
        <section className="pt-8">
          <button className="w-full py-4 rounded-2xl border border-error/30 text-red-400 font-display font-bold hover:bg-red-500/5 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            <LogOut className="w-5 h-5" />
            로그아웃
          </button>
          <p className="text-center mt-8 font-mono text-[10px] text-outline-variant uppercase tracking-widest">
            Vitals App v4.2.1-stable
          </p>
        </section>
      </main>
    </div>
  );
}

function SettingsItem({ 
  icon: Icon, 
  label, 
  color = "text-outline", 
  badge 
}: { 
  icon: any, 
  label: string, 
  color?: string,
  badge?: string 
}) {
  return (
    <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-high transition-colors active:bg-surface-container-highest">
      <div className="flex items-center gap-4">
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", color.split('-')[1] ? `${color.replace('text-', 'bg-')}/10` : 'bg-surface-container-highest')}>
          <Icon className={cn("w-5 h-5", color)} />
        </div>
        <span className="text-lg font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {badge && (
          <span className="bg-primary/20 text-primary-glow px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight">
            {badge}
          </span>
        )}
        <ChevronRight className="w-5 h-5 text-outline-variant" />
      </div>
    </button>
  );
}
