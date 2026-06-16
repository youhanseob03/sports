/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bell } from 'lucide-react';
import { motion } from 'motion/react';
import { Screen } from '../types';

interface HeaderProps {
  title: string;
  showProfileImg?: boolean;
}

export function Header({ title, showProfileImg = true }: HeaderProps) {
  return (
    <header className="w-full top-0 sticky z-50 bg-surface border-b border-outline-variant/10">
      <div className="flex items-center justify-between px-4 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          {showProfileImg && (
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
              <img 
                alt="사용자 프로필 사진" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiE_OxQ5PA0OSLoJoVGWMxQ0qrvtZufzmZgM9D72mzUkszIegTIJY1lKeQBVI8Tg3jeYMTxNJLS1SG0NPKPAjDq3yAY2LOsDABgLg0TzadLOl1Kp-IWPSaNFfG3Hkl2Brvscq3NrFfmgHHD2TcMZ8KmbwsFcUQWs2E2ev0uyKRkY5OdZj1iVYrtybs-F_qTvN_Olvm53UPXtzo967C8tBFWRvvba9jDBGKb3sVvKwJhICQKjMxFwqT1RD-UrcTPwCFl2HdlNJc0NA" 
              />
            </div>
          )}
          <h1 className="text-primary font-display text-2xl font-extrabold tracking-tight">{title}</h1>
        </div>
        <button className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95">
          <Bell className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
