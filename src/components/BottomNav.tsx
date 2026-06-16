/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Home, Dumbbell, Moon, History, User } from 'lucide-react';
import { Screen } from '../types';
import { cn } from '../lib/utils';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'dashboard', label: '홈', icon: Home },
    { id: 'activity', label: '활동', icon: Dumbbell },
    { id: 'sleep', label: '수면', icon: Moon },
    { id: 'log', label: '기록', icon: History },
    { id: 'profile', label: '프로필', icon: User },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 pb-safe px-4 bg-surface-container-low/80 backdrop-blur-xl border-t border-outline-variant/10">
      {navItems.map((item) => {
        const isActive = currentScreen === item.id;
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate(item.id as Screen);
            }}
            className={cn(
              "flex flex-col items-center justify-center px-5 py-1 transition-all duration-150 active:scale-90",
              isActive 
                ? "bg-secondary-container text-on-secondary-container rounded-full" 
                : "text-on-surface-variant hover:text-primary"
            )}
          >
            <Icon 
              className={cn("w-6 h-6 mb-1", isActive && "fill-current")} 
            />
            <span className="font-mono text-[10px] uppercase tracking-wider">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
