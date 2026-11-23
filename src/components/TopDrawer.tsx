import React from 'react';
import { Sparkles, Download, Layers, ShieldCheck, X } from 'lucide-react';

interface TopDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TopDrawer: React.FC<TopDrawerProps> = ({ isOpen, onClose }) => {
  return (
    // TODO: Replace with GitHub repository link/path
    <div
      className={`overflow-hidden transition-drawer bg-[#D6F5F0] text-black border-b border-black/10 dark:border-white/10 ${
        isOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
      }`}
      style={{
        transitionDuration: '1000ms',
        transitionTimingFunction: 'cubic-bezier(0.1, 0.1, 0.09, 1.01)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black rounded">
                공식 소프트웨어 &amp; 지원
              </span>
              <span className="text-xs font-medium text-black/70">
                Logitech Options+ 최신 업데이트 사용 가능
              </span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-black">
              M590 / M585 멀티 디바이스 사일런트 마우스 퀵 가이드
            </h3>
            <p className="mt-1 text-sm text-black/80 max-w-2xl">
              Easy-Switch™ 듀얼 페어링, Flow 크로스 컴퓨터 제어, Smart Actions 매크로 기능을 갖춘 무선 무소음 마우스입니다.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/10 transition-colors text-black"
            aria-label="서랍 닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/80 dark:bg-black/30 p-4 rounded-xl border border-black/10 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-black text-white shrink-0">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-black/60">소프트웨어 다운로드</p>
              <p className="text-sm font-bold text-black">Logi Options+ 1.68</p>
              <p className="text-xs text-black/70">Windows &amp; macOS 지원</p>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-black/30 p-4 rounded-xl border border-black/10 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-black text-white shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-black/60">스마트 멀티 디바이스</p>
              <p className="text-sm font-bold text-black">Logitech Flow™ 호환</p>
              <p className="text-xs text-black/70">커서 이동 및 텍스트/파일 복사</p>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-black/30 p-4 rounded-xl border border-black/10 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-black text-white shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-black/60">품질 보증 &amp; 배터리</p>
              <p className="text-sm font-bold text-black">최대 24개월 배터리 수명</p>
              <p className="text-xs text-black/70">1년 제한 하드웨어 보증</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
