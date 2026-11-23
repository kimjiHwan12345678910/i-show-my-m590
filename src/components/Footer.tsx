import React from 'react';
import { LogitechLogo } from './LogitechLogo';

interface FooterProps {
  onSelectTab: (tab: 'main' | 'features' | 'brand') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    // TODO: Replace with GitHub repository link/path
    <footer className="w-full bg-[#EAEBED] dark:bg-[#0B0C0E] text-black dark:text-neutral-400 border-t border-neutral-300 dark:border-neutral-800 transition-colors py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-black/10 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            {/* TODO: Replace with GitHub repository link/path */}
            <img
              src="./assets/images/logo.webp"
              alt="Logitech Logo"
              className="h-5 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('footer-logi-vector');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div id="footer-logi-vector" style={{ display: 'none' }}>
              <LogitechLogo className="h-5" isDark={false} />
            </div>
            <span className="text-xs text-neutral-500 font-medium">| 본 사이트는 학생 연구 및 과제 제출용 비공식 페이지입니다. (Google AI Studio 사용 · 비상업용 목적 사이트)</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-neutral-600 dark:text-neutral-300">
            <button onClick={() => onSelectTab('main')} className="hover:text-black dark:hover:text-white transition-colors">
              메인 제품
            </button>
            <button onClick={() => onSelectTab('features')} className="hover:text-black dark:hover:text-white transition-colors">
              기능 상세
            </button>
            <button onClick={() => onSelectTab('brand')} className="hover:text-black dark:hover:text-white transition-colors">
              브랜드 소개
            </button>
            <span className="text-neutral-400">·</span>
            <span className="text-neutral-500">Logi Options+ 소프트웨어</span>
            <span className="text-neutral-500">고객지원센터</span>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Logitech. 판권 소유. Logitech, Logi 및 Logitech 로고는 Logitech Europe S.A.의 상표 또는 등록 상표입니다.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>개인정보 처리방침</span>
            <span>이용약관</span>
            <span>쿠키 설정</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
