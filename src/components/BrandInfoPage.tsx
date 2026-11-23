import React, { useState, useEffect } from 'react';
import { Layers, Globe, Shield, Sparkles, Check, ArrowRight, Laptop, Monitor, MousePointer } from 'lucide-react';
import { LogitechLogo } from './LogitechLogo';

export const BrandInfoPage: React.FC = () => {
  const [brandData, setBrandData] = useState<{ title: string; description: string }>({
    title: '로지텍(Logitech)의 브랜드 철학',
    description:
      '1981년 스위스 로잔에서 설립된 로지텍은 기술을 통해 사람들이 매일 창작하고 일하며 즐기는 방식을 혁신해왔습니다. 우리의 목표는 단순한 주변기기 제작을 넘어, 사용자가 자신이 사랑하는 일에 온전히 몰입할 수 있도록 돕는 가장 직관적이고 인체공학적인 도구를 제공하는 것입니다.',
  });

  useEffect(() => {
    // Lightweight fetch script to load content.json
    fetch('./assets/data/content.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load content.json');
        return res.json();
      })
      .then((data) => {
        if (data?.brand?.title && data?.brand?.description) {
          setBrandData({
            title: data.brand.title,
            description: data.brand.description,
          });
        }
      })
      .catch((err) => {
        console.warn('content.json load fallback:', err);
      });
  }, []);

  return (
    // TODO: Replace with GitHub repository link/path
    <section className="w-full bg-[#FFFFFF] dark:bg-[#0E1012] text-black dark:text-white transition-colors py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header Tag */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAEBED] dark:bg-[#1C1F24] text-xs font-semibold text-black dark:text-[#D6F5F0] mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>로지텍 공식 브랜드 스토리</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight break-keep">
            사람과 디지털 세계를 연결하는<br />디자인 혁신
          </h2>
        </div>

        {/* Brand Info Main 2-Column Layout: Left (Intro Text) & Right (Brand Image) */}
        {/* TODO: Replace with GitHub repository link/path */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Area: Brand Introduction Text */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white mb-3">
                {brandData.title}
              </h3>
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line">
                {brandData.description}
              </p>
            </div>

            {/* Innovative User Experience Pillars */}
            <div className="space-y-4 pt-2">
              <h4 className="text-lg font-bold text-black dark:text-white">
                로지텍이 정의하는 3대 혁신적 사용자 경험
              </h4>

              {/* Pillar 1: Logitech Options+ */}
              <div className="bg-[#EAEBED] dark:bg-[#181B20] p-5 rounded-2xl border border-neutral-300/40 dark:border-neutral-700/40">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-black text-[#D6F5F0] dark:bg-[#D6F5F0] dark:text-black flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h5 className="font-bold text-sm text-black dark:text-white">
                    Logitech Options+ (개인 맞춤형 최적화)
                  </h5>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pl-11">
                  모든 마우스 버튼과 제스처를 사용자의 작업 스타일에 맞춰 정밀하게 재정의합니다. 각 애플리케이션(Excel, Photoshop, Chrome 등)마다 다른 단축 설정을 자동 활성화할 수 있습니다.
                </p>
              </div>

              {/* Pillar 2: Logitech FLOW */}
              <div className="bg-[#EAEBED] dark:bg-[#181B20] p-5 rounded-2xl border border-neutral-300/40 dark:border-neutral-700/40">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-black text-[#D6F5F0] dark:bg-[#D6F5F0] dark:text-black flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h5 className="font-bold text-sm text-black dark:text-white">
                    Logitech FLOW™ (경계 없는 멀티 컴퓨터 제어)
                  </h5>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pl-11">
                  한 대의 마우스로 Windows와 Mac 등 서로 다른 운영체제의 컴퓨터 화면을 자유롭게 넘나듭니다. 커서 이동만으로 텍스트, 이미지, 문서를 손쉽게 복사하고 붙여넣는 혁신적 크로스 플랫폼 경험을 선사합니다.
                </p>
              </div>

              {/* Pillar 3: Smart Actions */}
              <div className="bg-[#EAEBED] dark:bg-[#181B20] p-5 rounded-2xl border border-neutral-300/40 dark:border-neutral-700/40">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-black text-[#D6F5F0] dark:bg-[#D6F5F0] dark:text-black flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h5 className="font-bold text-sm text-black dark:text-white">
                    Smart Actions (지능형 원클릭 자동화 매크로)
                  </h5>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pl-11">
                  매일 반복되는 일상적인 업무 흐름을 버튼 한 번으로 실행하는 자동화 기능입니다. 여러 단계의 소프트웨어 실행과 단축키 입력을 단 1초 만에 완료하여 업무 몰입도를 극대화합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Right Area: Brand & Workspace Setup Image Layout */}
          {/* TODO: Replace with GitHub repository link/path */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#EAEBED] dark:bg-[#181B20] rounded-3xl p-6 sm:p-10 border border-neutral-300/40 dark:border-neutral-700/40 overflow-hidden">
              {/* Decorative brand gradient */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#D6F5F0]/30 dark:bg-[#D6F5F0]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Visual Demonstration: Logitech FLOW dual-screen desk setup */}
              <div className="relative z-10 bg-white dark:bg-[#121417] rounded-2xl p-6 border border-neutral-300 dark:border-neutral-700 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    <span className="text-xs font-bold text-black dark:text-white">
                      Logitech FLOW™ 인터랙티브 데스크탑 워크스페이스
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500">
                    Dual Device Active
                  </span>
                </div>

                {/* Dual Screens Schematic */}
                <div className="grid grid-cols-2 gap-4 my-4">
                  {/* Screen 1: Windows Workstation */}
                  <div className="bg-neutral-100 dark:bg-[#1B1E24] p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 text-center relative group">
                    <div className="h-20 bg-neutral-200 dark:bg-[#252A32] rounded-lg mb-2 flex items-center justify-center">
                      <Monitor className="w-8 h-8 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <p className="text-xs font-bold text-black dark:text-white">PC 1 (데스크톱)</p>
                    <p className="text-[10px] text-neutral-500">Windows 11 Pro</p>
                    <div className="mt-2 text-[10px] font-mono bg-white dark:bg-black/40 py-1 rounded text-neutral-700 dark:text-neutral-300">
                      보고서_최종본.pdf
                    </div>
                  </div>

                  {/* Screen 2: MacBook Laptop */}
                  <div className="bg-neutral-100 dark:bg-[#1B1E24] p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 text-center relative group">
                    <div className="h-20 bg-neutral-200 dark:bg-[#252A32] rounded-lg mb-2 flex items-center justify-center">
                      <Laptop className="w-8 h-8 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <p className="text-xs font-bold text-black dark:text-white">PC 2 (노트북)</p>
                    <p className="text-[10px] text-neutral-500">macOS Sonoma</p>
                    <div className="mt-2 text-[10px] font-mono bg-[#D6F5F0] text-black py-1 rounded font-bold">
                      붙여넣기 완료 ✓
                    </div>
                  </div>
                </div>

                {/* Motion Bridge Between Screens */}
                <div className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                  <span>화면 간 자유로운 커서 &amp; 파일 실시간 이동</span>
                  <ArrowRight className="w-4 h-4 text-black dark:text-[#D6F5F0]" />
                </div>
              </div>

              {/* Brand Asset Image Placement */}
              {/* TODO: Replace with GitHub repository link/path */}
              <div className="mt-6 flex flex-col items-center justify-center">
                {/* TODO: Replace with GitHub repository link/path */}
                <img
                  src="./assets/images/brand-description.webp"
                  alt="로지텍 브랜드 워크스페이스 대표 이미지"
                  className="w-full h-auto max-h-56 object-cover rounded-2xl border border-neutral-300 dark:border-neutral-700 shadow-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('brand-image-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div
                  id="brand-image-fallback"
                  className="w-full h-32 bg-white/70 dark:bg-black/40 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 flex flex-col items-center justify-center text-center p-4"
                  style={{ display: 'none' }}
                >
                  <span className="text-xs font-bold text-black dark:text-white">
                    로지텍 브랜드 셋업 이미지 플레이스홀더 영역
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono mt-1">
                    [브랜드 사진 에셋 슬롯: brand-description.webp]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Swiss Heritage & Sustainability Banner */}
        {/* TODO: Replace with GitHub repository link/path */}
        <div className="bg-[#EAEBED] dark:bg-[#181B20] rounded-3xl p-8 sm:p-12 border border-neutral-300/40 dark:border-neutral-700/40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">정밀 엔지니어링</span>
              <h4 className="text-lg font-bold text-black dark:text-white">스위스 정밀 기술</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                40년 이상 축적된 센서 기술과 기구학적 설계로 어떤 표면에서도 부드럽고 정확한 트래킹을 제공합니다.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">환경과 미래</span>
              <h4 className="text-lg font-bold text-black dark:text-white">지속 가능성 디자인</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                재활용 플라스틱(PCR)을 적극 도입하고 제품 전 과정의 탄소 발자국을 투명하게 공개하고 상쇄합니다.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">글로벌 신뢰</span>
              <h4 className="text-lg font-bold text-black dark:text-white">전 세계 사용자 검증</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                수억 명의 크리에이터, 엔지니어, 비즈니스 전문가들이 매일 신뢰하며 사용하는 글로벌 No.1 입력장치 브랜드입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
