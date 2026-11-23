import React, { useState } from 'react';
import { MouseVisual } from './MouseVisual';
import { VolumeX, BatteryCharging, ArrowLeftRight, MonitorSmartphone, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { TabType } from '../types';

interface MainPageProps {
  onNavigateToFeatures: () => void;
  onNavigateToBrand: () => void;
}

export const MainPage: React.FC<MainPageProps> = ({ onNavigateToFeatures, onNavigateToBrand }) => {
  const [selectedColor, setSelectedColor] = useState<'black' | 'gray' | 'red'>('black');
  const [activeChannel, setActiveChannel] = useState<1 | 2>(1);

  return (
    // TODO: Replace with GitHub repository link/path
    <main className="w-full bg-[#FFFFFF] dark:bg-[#0E1012] text-black dark:text-white transition-colors py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAEBED] dark:bg-[#1C1F24] text-xs font-semibold text-black dark:text-[#D6F5F0] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            차세대 멀티 디바이스 사일런트 테크놀로지
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            로지텍 M590 Silent
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            두 대의 컴퓨터를 한 대처럼 자유롭게 오가는 Easy-Switch™와 소음 없는 클릭감.<br className="hidden sm:inline" />
            조용하지만 강력한 정밀함으로 프로페셔널한 데스크 환경을 완성합니다.
          </p>
        </div>

        {/* Center Main Mouse Presentation Card with Smooth Scale-up Effect */}
        <div className="relative max-w-4xl mx-auto bg-[#EAEBED] dark:bg-[#181B20] rounded-3xl p-8 sm:p-14 shadow-sm border border-neutral-300/40 dark:border-neutral-700/40 overflow-hidden group">
          {/* Subtle background decoration */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D6F5F0]/30 dark:bg-[#D6F5F0]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#D6F5F0]/20 dark:bg-[#D6F5F0]/5 rounded-full blur-2xl pointer-events-none" />

          {/* Interactive Channel Switching Badge */}
          <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                연결 채널 상태:
              </span>
              <button
                onClick={() => setActiveChannel((prev) => (prev === 1 ? 2 : 1))}
                className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-[#252A32] rounded-lg text-xs font-bold text-black dark:text-white shadow-xs hover:bg-[#D6F5F0] hover:text-black transition-all"
                title="클릭하여 채널 전환 테스트"
              >
                <span className={`w-2 h-2 rounded-full ${activeChannel === 1 ? 'bg-black dark:bg-[#D6F5F0]' : 'bg-neutral-400'}`} />
                <span>채널 {activeChannel} (PC {activeChannel})</span>
                <span className="text-[10px] text-neutral-500 underline ml-1">스위칭 전환</span>
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 mr-1 hidden sm:inline">컬러:</span>
              <button
                onClick={() => setSelectedColor('black')}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColor === 'black' ? 'border-black dark:border-white scale-110' : 'border-transparent'
                }`}
                style={{ backgroundColor: '#2D3035' }}
                aria-label="미드나잇 블랙"
              />
              <button
                onClick={() => setSelectedColor('gray')}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColor === 'gray' ? 'border-black dark:border-white scale-110' : 'border-transparent'
                }`}
                style={{ backgroundColor: '#8A919A' }}
                aria-label="미들 그레이"
              />
              <button
                onClick={() => setSelectedColor('red')}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColor === 'red' ? 'border-black dark:border-white scale-110' : 'border-transparent'
                }`}
                style={{ backgroundColor: '#B91C1C' }}
                aria-label="루비 레드"
              />
            </div>
          </div>

          {/* Centered Main Mouse Image with Smooth Scale-Up on Hover */}
          <div className="relative py-6 sm:py-10 flex flex-col items-center justify-center">
            {/* Main Product Image with Smooth Scale-Up on Hover */}
            {/* TODO: Replace with GitHub repository link/path */}
            <div className="relative transform transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer flex flex-col items-center">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/m-top-1.webp`}
                alt="로지텍 M590 Silent 마우스 상단 정면 이미지"
                className="w-64 sm:w-80 h-auto object-contain drop-shadow-2xl mx-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('main-mouse-vector-fallback');
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div id="main-mouse-vector-fallback" style={{ display: 'none' }}>
                <MouseVisual
                  color={selectedColor}
                  activeChannel={activeChannel}
                  className="mx-auto"
                />
              </div>
            </div>

            <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400 text-center">
              마우스 위에 커서를 올리면 부드러운 확대(Scale-up) 효과가 적용됩니다.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 relative z-10">
            <button
              onClick={onNavigateToFeatures}
              className="w-full sm:w-auto px-6 py-3.5 bg-black text-white dark:bg-white dark:text-black rounded-xl font-bold text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
            >
              <span>주요 하드웨어 기능 살펴보기</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateToBrand}
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-black dark:bg-[#252A32] dark:text-white border border-neutral-300 dark:border-neutral-700 rounded-xl font-bold text-sm hover:bg-[#D6F5F0] hover:text-black hover:border-transparent transition-colors flex items-center justify-center gap-2"
            >
              <span>브랜드 철학 &amp; FLOW 스토리</span>
            </button>
          </div>
        </div>

        {/* 4 Core Pillars Overview Section */}
        {/* TODO: Replace with GitHub repository link/path */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">
              더 조용하게, 더 많은 작업을 스마트하게
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              M590 Silent가 제공하는 4가지 혁신적인 생산성 솔루션을 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#EAEBED] dark:bg-[#181B20] p-6 rounded-2xl border border-neutral-300/30 dark:border-neutral-700/30">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#252A32] flex items-center justify-center mb-4 text-black dark:text-[#D6F5F0]">
                <VolumeX className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-black dark:text-white mb-2">
                90% 소음 감소 클릭
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Logitech SilentTouch 기술로 클릭감은 그대로 유지하면서 클릭 소음은 90% 이상 획기적으로 줄였습니다.
              </p>
            </div>

            <div className="bg-[#EAEBED] dark:bg-[#181B20] p-6 rounded-2xl border border-neutral-300/30 dark:border-neutral-700/30">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#252A32] flex items-center justify-center mb-4 text-black dark:text-[#D6F5F0]">
                <MonitorSmartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-black dark:text-white mb-2">
                Easy-Switch™ 2대 연결
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                버튼 하나로 노트북과 데스크톱, 혹은 태블릿 간의 연결을 1초 만에 즉시 전환할 수 있습니다.
              </p>
            </div>

            <div className="bg-[#EAEBED] dark:bg-[#181B20] p-6 rounded-2xl border border-neutral-300/30 dark:border-neutral-700/30">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#252A32] flex items-center justify-center mb-4 text-black dark:text-[#D6F5F0]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-black dark:text-white mb-2">
                Logitech FLOW™ 호환
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                서로 다른 두 대의 PC 화면 사이로 커서를 넘나들며 텍스트와 파일을 손쉽게 복사 및 붙여넣기합니다.
              </p>
            </div>

            <div className="bg-[#EAEBED] dark:bg-[#181B20] p-6 rounded-2xl border border-neutral-300/30 dark:border-neutral-700/30">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#252A32] flex items-center justify-center mb-4 text-black dark:text-[#D6F5F0]">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-black dark:text-white mb-2">
                최대 24개월 배터리
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                AA 배터리 1개로 자동 절전 모드와 On/Off 스위치를 통해 최대 2년간 배터리 걱정 없이 사용 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
