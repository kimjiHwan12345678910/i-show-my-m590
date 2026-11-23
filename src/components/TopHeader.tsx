import React from 'react';
import { Sun, Moon, ChevronDown, ChevronUp } from 'lucide-react';
import { LogitechLogo } from './LogitechLogo';
import { ThemeMode } from '../types';

interface TopHeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  theme,
  onToggleTheme,
  isDrawerOpen,
  onToggleDrawer,
}) => {
  return (
    // TODO: Replace with GitHub repository link/path
    <header className="w-full bg-[#D6F5F0] text-black border-b border-black/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logitech Logo */}
        <div className="flex items-center gap-3">
          {/* TODO: Replace with GitHub repository link/path */}
          <img
            src={`${import.meta.env.BASE_URL}assets/images/logo.webp`}
            alt="Logitech Logo"
            className="h-6 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('logi-vector-fallback');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div id="logi-vector-fallback" style={{ display: 'none' }}>
            <LogitechLogo className="h-6" isDark={false} />
          </div>
          <span className="hidden sm:inline-block text-xs font-semibold px-2 py-0.5 bg-black/10 rounded text-black">
            공식 제품 쇼케이스
          </span>
        </div>

        {/* Center / Right controls */}
        <div className="flex items-center gap-3">
          {/* Quick Drawer trigger */}
          <button
            onClick={onToggleDrawer}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-black/5 hover:bg-black/10 text-black rounded-lg transition-colors"
            title="상단 제품 스펙 &amp; 소프트웨어 서랍"
          >
            <span>상단 사양 서랍</span>
            {isDrawerOpen ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Button_T: Light / Dark mode switcher */}
          <button
            id="Button_T"
            onClick={onToggleTheme}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-black text-white hover:bg-black/80 transition-colors shadow-xs"
            aria-label="테마 전환 버튼"
          >
            {theme === 'light' ? (
              <>
                <Moon className="w-3.5 h-3.5" />
                <span>다크 모드</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5" />
                <span>라이트 모드</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
