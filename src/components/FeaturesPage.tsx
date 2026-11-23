import React, { useState } from 'react';
import {
  SlidersHorizontal,
  Zap,
  Power,
  RotateCw,
  Usb,
  ToggleLeft,
  ToggleRight,
  Sparkles,
  Layers,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  ZoomIn,
  Volume2,
  Calculator,
  RefreshCw,
  PlusSquare,
  Camera,
  Smile,
  Lock,
  Globe,
  FolderOpen,
  PlaySquare,
  Cpu
} from 'lucide-react';
import { MouseVisual } from './MouseVisual';
import { MappingOption } from '../types';

export const FeaturesPage: React.FC = () => {
  // Interactive state for hardware feature viewer
  const [selectedFeature, setSelectedFeature] = useState<'easySwitch' | 'sideButtons' | 'powerSwitch' | 'wheel' | 'unifying'>('easySwitch');
  const [activeChannel, setActiveChannel] = useState<1 | 2>(1);
  const [powerState, setPowerState] = useState<boolean>(true);

  // Interactive custom button mapping state
  const [button4Mapping, setButton4Mapping] = useState<string>('forward');
  const [button5Mapping, setButton5Mapping] = useState<string>('back');

  // Smart Actions Interactive Flow State
  const [smartTrigger, setSmartTrigger] = useState<string>('side_forward_click');
  const [smartActionApp, setSmartActionApp] = useState<string>('browser_and_notes');
  const [smartExecuted, setSmartExecuted] = useState<boolean>(false);

  // Available mapping options from specification
  const mappingOptions: MappingOption[] = [
    { id: 'forward', name: '앞으로 가기 (기본값)', category: 'default', description: '웹 브라우저 및 탐색기 다음 페이지로 이동' },
    { id: 'back', name: '뒤로 가기 (기본값)', category: 'default', description: '웹 브라우저 및 탐색기 이전 페이지로 이동' },
    { id: 'copy_paste', name: '복사 / 붙여넣기', category: 'recommended', description: '한 번의 클릭으로 클립보드 복사 및 즉시 붙여넣기' },
    { id: 'zoom', name: '화면 확대 / 축소', category: 'recommended', description: '문서 또는 웹 브라우저 디스플레이 줌 인/아웃' },
    { id: 'volume', name: '볼륨 조절 (Mute/Up)', category: 'recommended', description: '미디어 음소거 토글 및 볼륨 조절' },
    { id: 'calc', name: '계산기 실행', category: 'productivity', description: '시스템 기본 계산기 앱 즉시 호출' },
    { id: 'redo', name: '다시 실행 (Redo)', category: 'productivity', description: '취소했던 직전 작업(Ctrl+Y / Cmd+Shift+Z) 다시 실행' },
    { id: 'new_tab', name: '새 브라우저 탭 열기', category: 'productivity', description: '새 탭을 백그라운드 또는 전면에 즉시 생성' },
    { id: 'screenshot', name: '화면 캡처 도구', category: 'productivity', description: '영역 캡처 도구 실행 및 클립보드 복사' },
    { id: 'emoji', name: '이모티콘 팝업', category: 'productivity', description: '이모지 및 특수기호 선택창 호출' },
    { id: 'lock', name: '시스템 화면 잠금', category: 'system', description: '외출 시 컴퓨터를 즉시 보안 잠금 상태로 전환' },
    { id: 'lang_switch', name: '입력 언어 전환', category: 'system', description: '한/영 및 다국어 입력 언어 원클릭 전환' },
    { id: 'open_folder', name: '지정 폴더 / 파일 열기', category: 'system', description: '자주 사용하는 업무 폴더나 파일 바로 열기' },
    { id: 'media_play', name: '미디어 재생 / 일시정지', category: 'system', description: '음악 및 비디오 플레이어 제어' },
  ];

  const handleRunSmartAction = () => {
    setSmartExecuted(true);
    setTimeout(() => {
      setSmartExecuted(false);
    }, 2800);
  };

  return (
    // TODO: Replace with GitHub repository link/path
    <section className="w-full bg-[#FFFFFF] dark:bg-[#0E1012] text-black dark:text-white transition-colors py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAEBED] dark:bg-[#1C1F24] text-xs font-semibold text-black dark:text-[#D6F5F0] mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>하드웨어 정밀 설계 &amp; Logi Options+</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            로지텍 M590 핵심 기능 소개
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            정밀한 하드웨어 버튼부터 스마트 액션 자동화까지, 손끝에서 시작되는 압도적인 생산성.
          </p>
        </div>

        {/* 1. Hardware Features Interactive Showcase */}
        {/* TODO: Replace with GitHub repository link/path */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white">
              01. 제품 주요 스펙 및 하드웨어 기능
            </h3>
            <span className="text-xs font-medium text-neutral-500">
              상호작용 가능한 5대 하드웨어 설계
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Feature Selectors (Left 5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              {/* Feature 1: Easy-Switch */}
              <button
                onClick={() => setSelectedFeature('easySwitch')}
                className={`w-full text-left p-5 rounded-2xl transition-all border ${
                  selectedFeature === 'easySwitch'
                    ? 'bg-[#EAEBED] dark:bg-[#1E2228] border-black dark:border-[#D6F5F0] shadow-sm'
                    : 'bg-white dark:bg-[#141619] border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">기능 01</span>
                  {selectedFeature === 'easySwitch' && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-black text-[#D6F5F0] dark:bg-[#D6F5F0] dark:text-black rounded">
                      선택됨
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-black dark:text-white mt-1">
                  Easy-Switch™ 버튼 &amp; LED 표시등
                </h4>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  최대 2대 기기(PC, 맥, 태블릿)를 스위칭 가능. 상단 번호 표시등(1, 2) LED로 현재 연결된 채널을 즉시 확인할 수 있습니다.
                </p>
              </button>

              {/* Feature 2: Side Buttons */}
              <button
                onClick={() => setSelectedFeature('sideButtons')}
                className={`w-full text-left p-5 rounded-2xl transition-all border ${
                  selectedFeature === 'sideButtons'
                    ? 'bg-[#EAEBED] dark:bg-[#1E2228] border-black dark:border-[#D6F5F0] shadow-sm'
                    : 'bg-white dark:bg-[#141619] border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">기능 02</span>
                  {selectedFeature === 'sideButtons' && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-black text-[#D6F5F0] dark:bg-[#D6F5F0] dark:text-black rounded">
                      선택됨
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-black dark:text-white mt-1">
                  커스텀 측면 엄지 버튼 (엄지 듀얼 버튼)
                </h4>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  좌측 엄지 영역에 위치한 2개 버튼(앞으로/뒤로 가기). Logi Options+ 소프트웨어를 통해 복사/붙여넣기나 제스처로 재맵핑할 수 있습니다.
                </p>
              </button>

              {/* Feature 3: Power Switch */}
              <button
                onClick={() => setSelectedFeature('powerSwitch')}
                className={`w-full text-left p-5 rounded-2xl transition-all border ${
                  selectedFeature === 'powerSwitch'
                    ? 'bg-[#EAEBED] dark:bg-[#1E2228] border-black dark:border-[#D6F5F0] shadow-sm'
                    : 'bg-white dark:bg-[#141619] border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">기능 03</span>
                  {selectedFeature === 'powerSwitch' && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-black text-[#D6F5F0] dark:bg-[#D6F5F0] dark:text-black rounded">
                      선택됨
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-black dark:text-white mt-1">
                  하단 On/Off 전원 슬라이드 스위치
                </h4>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  제품 하단 슬라이드 스위치와 지능형 자동 절전 모드가 결합되어 불필요한 전력 소모를 방지하고 배터리 수명을 극대화합니다.
                </p>
              </button>

              {/* Feature 4: Tilt Wheel */}
              <button
                onClick={() => setSelectedFeature('wheel')}
                className={`w-full text-left p-5 rounded-2xl transition-all border ${
                  selectedFeature === 'wheel'
                    ? 'bg-[#EAEBED] dark:bg-[#1E2228] border-black dark:border-[#D6F5F0] shadow-sm'
                    : 'bg-white dark:bg-[#141619] border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">기능 04</span>
                  {selectedFeature === 'wheel' && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-black text-[#D6F5F0] dark:bg-[#D6F5F0] dark:text-black rounded">
                      선택됨
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-black dark:text-white mt-1">
                  초정밀 휠 &amp; 좌우 틸트(Tilt) 기능
                </h4>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  밀리미터 단위의 마이크로 정밀 스크롤링과 휠을 좌우로 기울여 스프레드시트나 웹페이지를 수평 스크롤하는 틸트 기능 지원.
                </p>
              </button>

              {/* Feature 5: Unifying Receiver */}
              <button
                onClick={() => setSelectedFeature('unifying')}
                className={`w-full text-left p-5 rounded-2xl transition-all border ${
                  selectedFeature === 'unifying'
                    ? 'bg-[#EAEBED] dark:bg-[#1E2228] border-black dark:border-[#D6F5F0] shadow-sm'
                    : 'bg-white dark:bg-[#141619] border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">기능 05</span>
                  {selectedFeature === 'unifying' && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-black text-[#D6F5F0] dark:bg-[#D6F5F0] dark:text-black rounded">
                      선택됨
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-black dark:text-white mt-1">
                  Unifying™ USB 초소형 무선 수신기
                </h4>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  USB 포트에 꽂아두는 2.4GHz 초소형 수신기. 하단 배터리 슬롯 내부에 안전하게 보관할 수 있으며 최대 6대의 호환 기기를 하나로 연결합니다.
                </p>
              </button>
            </div>

            {/* Interactive Hardware Visual Demonstration (Right 7 Cols) */}
            <div className="lg:col-span-7 bg-[#EAEBED] dark:bg-[#181B20] rounded-3xl p-6 sm:p-10 border border-neutral-300/40 dark:border-neutral-700/40 flex flex-col items-center justify-center min-h-[480px]">
              {/* Active feature badge */}
              <div className="w-full flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="text-xs font-bold text-black dark:text-white">
                    {selectedFeature === 'easySwitch' && 'Easy-Switch™ 실시간 시뮬레이터'}
                    {selectedFeature === 'sideButtons' && '엄지 커스텀 버튼 2구 시뮬레이터'}
                    {selectedFeature === 'powerSwitch' && '전원 On/Off 절전 스위치'}
                    {selectedFeature === 'wheel' && '초정밀 스크롤 & 틸트 휠'}
                    {selectedFeature === 'unifying' && 'Unifying 수신기 및 하단 슬롯'}
                  </span>
                </div>

                {/* Sub-interaction controls */}
                {selectedFeature === 'easySwitch' && (
                  <button
                    onClick={() => setActiveChannel((prev) => (prev === 1 ? 2 : 1))}
                    className="px-3 py-1 bg-black text-[#D6F5F0] dark:bg-[#D6F5F0] dark:text-black text-xs font-bold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    채널 {activeChannel} ➔ {activeChannel === 1 ? 2 : 1}번 스위칭
                  </button>
                )}
                {selectedFeature === 'powerSwitch' && (
                  <button
                    onClick={() => setPowerState(!powerState)}
                    className="flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-black text-black dark:text-white text-xs font-bold rounded-lg border border-neutral-300 dark:border-neutral-700"
                  >
                    <Power className={`w-3.5 h-3.5 ${powerState ? 'text-green-500' : 'text-neutral-400'}`} />
                    <span>전원: {powerState ? 'ON' : 'OFF'}</span>
                  </button>
                )}
              </div>

              {/* Hardware Visual & Gallery Angles */}
              <div className="relative py-4 flex flex-col items-center justify-center">
                {/* Dynamic Image based on active feature or selected angle */}
                {/* TODO: Replace with GitHub repository link/path */}
                <div className="relative w-64 sm:w-80 h-72 flex items-center justify-center">
                  {selectedFeature === 'sideButtons' ? (
                    <img
                      src="./assets/images/m-left-side.webp"
                      alt="로지텍 M590 측면 버튼 뷰"
                      className="max-h-64 w-auto object-contain drop-shadow-xl"
                    />
                  ) : selectedFeature === 'powerSwitch' || selectedFeature === 'unifying' ? (
                    <img
                      src="./assets/images/m-bottom.webp"
                      alt="로지텍 M590 하단 전원 및 수신기 슬롯 뷰"
                      className="max-h-64 w-auto object-contain drop-shadow-xl"
                    />
                  ) : (
                    <img
                      src="./assets/images/m-top-1.webp"
                      alt="로지텍 M590 상단 뷰"
                      className="max-h-64 w-auto object-contain drop-shadow-xl"
                    />
                  )}
                </div>

                {/* Angle Quick Switcher Thumbnails */}
                {/* TODO: Replace with GitHub repository link/path */}
                <div className="flex items-center gap-3 mt-4 pt-3 border-t border-black/10 dark:border-white/10">
                  <button
                    onClick={() => setSelectedFeature('easySwitch')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      selectedFeature !== 'sideButtons' && selectedFeature !== 'powerSwitch' && selectedFeature !== 'unifying'
                        ? 'bg-black text-white dark:bg-white dark:text-black border-transparent'
                        : 'bg-white dark:bg-[#121417] text-neutral-600 dark:text-neutral-400 border-neutral-300 dark:border-neutral-700'
                    }`}
                  >
                    <span>상단 뷰</span>
                  </button>
                  <button
                    onClick={() => setSelectedFeature('sideButtons')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      selectedFeature === 'sideButtons'
                        ? 'bg-black text-white dark:bg-white dark:text-black border-transparent'
                        : 'bg-white dark:bg-[#121417] text-neutral-600 dark:text-neutral-400 border-neutral-300 dark:border-neutral-700'
                    }`}
                  >
                    <span>측면 뷰</span>
                  </button>
                  <button
                    onClick={() => setSelectedFeature('powerSwitch')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      selectedFeature === 'powerSwitch' || selectedFeature === 'unifying'
                        ? 'bg-black text-white dark:bg-white dark:text-black border-transparent'
                        : 'bg-white dark:bg-[#121417] text-neutral-600 dark:text-neutral-400 border-neutral-300 dark:border-neutral-700'
                    }`}
                  >
                    <span>하단 뷰</span>
                  </button>
                </div>

                {/* Receiver visual badge when unifying selected */}
                {selectedFeature === 'unifying' && (
                  <div className="mt-4 p-4 bg-white dark:bg-[#121417] rounded-xl border border-neutral-300 dark:border-neutral-700 max-w-sm mx-auto flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D6F5F0] flex items-center justify-center text-black shrink-0">
                      <Usb className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-black dark:text-white">Logitech Unifying™ Receiver</p>
                      <p className="text-[11px] text-neutral-500">2.4GHz 무선 / 최대 10m 범위 / 배터리 슬롯 보관</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Custom Button Mapping Section (Logi Options+ Software) */}
        {/* TODO: Replace with GitHub repository link/path */}
        <div className="mb-24 bg-[#EAEBED] dark:bg-[#181B20] rounded-3xl p-8 sm:p-12 border border-neutral-300/40 dark:border-neutral-700/40">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-2.5 py-0.5 bg-black text-[#D6F5F0] dark:bg-[#D6F5F0] dark:text-black rounded">
                  Logi Options+
                </span>
                <span className="text-xs text-neutral-500">인터랙티브 소프트웨어 시뮬레이터</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white">
                02. 커스텀 기능 맵핑 (Button Customization)
              </h3>
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm">
              측면 2개 버튼에 원하는 명령을 직접 지정하고 가상 실행해보세요.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Button 4 & 5 Mapping Configurator (Left 5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Button 4 Selection */}
              <div className="bg-white dark:bg-[#121417] p-5 rounded-2xl border border-neutral-300 dark:border-neutral-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-black dark:text-white">측면 상단 버튼 (Button 4)</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 bg-[#D6F5F0] text-black font-semibold rounded">
                    현재: {mappingOptions.find((o) => o.id === button4Mapping)?.name.split(' ')[0]}
                  </span>
                </div>
                <label className="text-xs text-neutral-500 block mb-2">할당할 기능을 선택하세요:</label>
                <select
                  value={button4Mapping}
                  onChange={(e) => setButton4Mapping(e.target.value)}
                  className="w-full bg-[#EAEBED] dark:bg-[#1E2228] border border-neutral-300 dark:border-neutral-600 text-black dark:text-white text-xs font-medium rounded-xl p-3 outline-none focus:border-black dark:focus:border-[#D6F5F0]"
                >
                  <optgroup label="기본 설정">
                    {mappingOptions.filter((o) => o.category === 'default').map((opt) => (
                      <option key={`b4-${opt.id}`} value={opt.id}>{opt.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="권장 옵션">
                    {mappingOptions.filter((o) => o.category === 'recommended').map((opt) => (
                      <option key={`b4-${opt.id}`} value={opt.id}>{opt.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="생산성 &amp; 시스템">
                    {mappingOptions.filter((o) => o.category === 'productivity' || o.category === 'system').map((opt) => (
                      <option key={`b4-${opt.id}`} value={opt.id}>{opt.name}</option>
                    ))}
                  </optgroup>
                </select>
                <p className="mt-2 text-[11px] text-neutral-500">
                  {mappingOptions.find((o) => o.id === button4Mapping)?.description}
                </p>
              </div>

              {/* Button 5 Selection */}
              <div className="bg-white dark:bg-[#121417] p-5 rounded-2xl border border-neutral-300 dark:border-neutral-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-black dark:text-white">측면 하단 버튼 (Button 5)</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 bg-[#D6F5F0] text-black font-semibold rounded">
                    현재: {mappingOptions.find((o) => o.id === button5Mapping)?.name.split(' ')[0]}
                  </span>
                </div>
                <label className="text-xs text-neutral-500 block mb-2">할당할 기능을 선택하세요:</label>
                <select
                  value={button5Mapping}
                  onChange={(e) => setButton5Mapping(e.target.value)}
                  className="w-full bg-[#EAEBED] dark:bg-[#1E2228] border border-neutral-300 dark:border-neutral-600 text-black dark:text-white text-xs font-medium rounded-xl p-3 outline-none focus:border-black dark:focus:border-[#D6F5F0]"
                >
                  <optgroup label="기본 설정">
                    {mappingOptions.filter((o) => o.category === 'default').map((opt) => (
                      <option key={`b5-${opt.id}`} value={opt.id}>{opt.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="권장 옵션">
                    {mappingOptions.filter((o) => o.category === 'recommended').map((opt) => (
                      <option key={`b5-${opt.id}`} value={opt.id}>{opt.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="생산성 &amp; 시스템">
                    {mappingOptions.filter((o) => o.category === 'productivity' || o.category === 'system').map((opt) => (
                      <option key={`b5-${opt.id}`} value={opt.id}>{opt.name}</option>
                    ))}
                  </optgroup>
                </select>
                <p className="mt-2 text-[11px] text-neutral-500">
                  {mappingOptions.find((o) => o.id === button5Mapping)?.description}
                </p>
              </div>
            </div>

            {/* Grid of All Available Options (Right 7 Cols) */}
            <div className="lg:col-span-7 bg-white dark:bg-[#121417] p-6 rounded-2xl border border-neutral-300 dark:border-neutral-700">
              <h4 className="text-sm font-bold text-black dark:text-white mb-1">
                사용 가능한 공식 기능 라이브러리 (총 14종)
              </h4>
              <p className="text-xs text-neutral-500 mb-4">
                원하는 기능을 클릭하여 버튼 4 또는 버튼 5에 빠르게 장착할 수 있습니다.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
                {mappingOptions.map((opt) => {
                  const isMappedB4 = button4Mapping === opt.id;
                  const isMappedB5 = button5Mapping === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        if (!isMappedB4) setButton4Mapping(opt.id);
                        else setButton5Mapping(opt.id);
                      }}
                      className={`text-left p-3 rounded-xl border text-xs transition-all ${
                        isMappedB4 || isMappedB5
                          ? 'bg-[#D6F5F0] text-black border-black font-semibold'
                          : 'bg-neutral-50 dark:bg-[#1A1D23] border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold truncate">{opt.name.split(' ')[0]}</span>
                        {isMappedB4 && <span className="text-[10px] bg-black text-white px-1.5 rounded">B4</span>}
                        {isMappedB5 && <span className="text-[10px] bg-black text-white px-1.5 rounded">B5</span>}
                      </div>
                      <p className="text-[10px] opacity-75 line-clamp-2 leading-tight">
                        {opt.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Smart Actions (스마트 액션) 설정 가이드 & 인터랙티브 자동화 시뮬레이터 */}
        {/* TODO: Replace with GitHub repository link/path */}
        <div className="bg-[#EAEBED] dark:bg-[#181B20] rounded-3xl p-8 sm:p-12 border border-neutral-300/40 dark:border-neutral-700/40">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2.5 py-0.5 bg-black text-[#D6F5F0] dark:bg-[#D6F5F0] dark:text-black rounded">
                Smart Actions
              </span>
              <span className="text-xs text-neutral-500">원클릭 매크로 및 워크플로우 자동화</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black dark:text-white">
              03. Smart Actions 설정 가이드 &amp; 자동화 흐름
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              반복되는 여러 번의 키보드/마우스 입력을 하나의 액션으로 묶어주는 로지텍 스마트 액션 시스템입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Step 1: If (Trigger) Card */}
            <div className="bg-white dark:bg-[#121417] p-6 rounded-2xl border border-neutral-300 dark:border-neutral-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 mb-2">
                  <span className="w-5 h-5 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center text-[11px]">1</span>
                  <span>IF (트리거) 설정</span>
                </div>
                <h4 className="text-lg font-bold text-black dark:text-white mb-2">
                  조건 지정: 특정 액션 발생 시
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
                  버튼 클릭, 특정 제스처, 특정 프로그램 포커스 등 트리거 시작 조건을 설정합니다.
                </p>

                <div className="space-y-2">
                  <button
                    onClick={() => setSmartTrigger('side_forward_click')}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                      smartTrigger === 'side_forward_click'
                        ? 'bg-[#D6F5F0] text-black border-black font-bold'
                        : 'bg-neutral-50 dark:bg-[#1B1E24] text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    조건 A: 측면 상단 버튼 1회 클릭 시
                  </button>
                  <button
                    onClick={() => setSmartTrigger('wheel_tilt_right')}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                      smartTrigger === 'wheel_tilt_right'
                        ? 'bg-[#D6F5F0] text-black border-black font-bold'
                        : 'bg-neutral-50 dark:bg-[#1B1E24] text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    조건 B: 스크롤 휠 우측 틸트(기울임) 시
                  </button>
                  <button
                    onClick={() => setSmartTrigger('double_click_side')}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                      smartTrigger === 'double_click_side'
                        ? 'bg-[#D6F5F0] text-black border-black font-bold'
                        : 'bg-neutral-50 dark:bg-[#1B1E24] text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    조건 C: 측면 하단 버튼 더블 클릭 시
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-[11px] text-neutral-500">
                선택된 조건: <strong className="text-black dark:text-white">{smartTrigger === 'side_forward_click' ? '측면 상단 버튼 클릭' : smartTrigger === 'wheel_tilt_right' ? '휠 우측 틸트' : '측면 하단 더블 클릭'}</strong>
              </div>
            </div>

            {/* Step 2: Then (Action) Card */}
            <div className="bg-white dark:bg-[#121417] p-6 rounded-2xl border border-neutral-300 dark:border-neutral-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 mb-2">
                  <span className="w-5 h-5 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center text-[11px]">2</span>
                  <span>THEN (동작) 설정</span>
                </div>
                <h4 className="text-lg font-bold text-black dark:text-white mb-2">
                  동작 실행: 순차적 자동화 태스크
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
                  지정 조건 충족 시 애플리케이션 실행, 단축키 입력, 텍스트 자동 붙여넣기, 시스템 명령을 실행합니다.
                </p>

                <div className="space-y-2">
                  <button
                    onClick={() => setSmartActionApp('browser_and_notes')}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                      smartActionApp === 'browser_and_notes'
                        ? 'bg-[#D6F5F0] text-black border-black font-bold'
                        : 'bg-neutral-50 dark:bg-[#1B1E24] text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    동작 1: 화상회의 준비 (Zoom 실행 + 마이크 음소거 + 메모장 열기)
                  </button>
                  <button
                    onClick={() => setSmartActionApp('code_review')}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                      smartActionApp === 'code_review'
                        ? 'bg-[#D6F5F0] text-black border-black font-bold'
                        : 'bg-neutral-50 dark:bg-[#1B1E24] text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    동작 2: 개발 워크스페이스 (VS Code + 터미널 + 브라우저 동시 런칭)
                  </button>
                  <button
                    onClick={() => setSmartActionApp('clean_desktop')}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                      smartActionApp === 'clean_desktop'
                        ? 'bg-[#D6F5F0] text-black border-black font-bold'
                        : 'bg-neutral-50 dark:bg-[#1B1E24] text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    동작 3: 보안 빠른 잠금 (모든 창 최소화 + 시스템 즉시 잠금 실행)
                  </button>
                </div>
              </div>

              {/* Execution Simulator Button */}
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={handleRunSmartAction}
                  className="w-full py-3 bg-black text-white dark:bg-[#D6F5F0] dark:text-black font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>스마트 액션 시뮬레이션 테스트 실행</span>
                </button>

                {smartExecuted && (
                  <div className="mt-3 p-3 rounded-xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>스마트 액션 파이프라인이 성공적으로 실행되었습니다!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
