/**
 * 로지텍 M590 Silent 랜딩 페이지 바닐라 자바스크립트
 * GitHub Pages 및 정적 브라우저 환경 완벽 호환
 */

// Global App State
const state = {
  currentTab: 'main',
  theme: 'light',
  isDrawerOpen: false,
  activeChannel: 1,
  activeAngle: 'top',
  viewerMode: '2d',
  isModelInitialized: false,
  targetButton: 'b4',
  b4Mapping: 'forward',
  b5Mapping: 'back',
  smartTrigger: 'side_forward',
  smartAction: 'meeting_prep',
};

// Available Button Mapping Options (14종)
const mappingLibrary = [
  { id: 'forward', name: '앞으로 가기 (기본값)', desc: '웹 브라우저 및 탐색기 다음 페이지로 이동' },
  { id: 'back', name: '뒤로 가기 (기본값)', desc: '웹 브라우저 및 탐색기 이전 페이지로 이동' },
  { id: 'copy_paste', name: '복사 / 붙여넣기', desc: '원클릭 클립보드 복사 및 즉시 붙여넣기' },
  { id: 'zoom', name: '화면 확대 / 축소', desc: '문서 또는 웹 브라우저 디스플레이 줌' },
  { id: 'volume', name: '볼륨 음소거 / 조절', desc: '미디어 음소거 토글 및 시스템 볼륨 조절' },
  { id: 'calc', name: '계산기 실행', desc: '시스템 기본 계산기 앱 즉시 실행' },
  { id: 'redo', name: '다시 실행 (Redo)', desc: '취소했던 직전 작업 다시 실행' },
  { id: 'new_tab', name: '새 브라우저 탭 열기', desc: '새 인터넷 브라우저 탭 생성' },
  { id: 'screenshot', name: '화면 캡처 도구', desc: '영역 캡처 도구 호출 및 클립보드 복사' },
  { id: 'emoji', name: '이모티콘 팝업', desc: '이모지 및 특수기호 입력창 호출' },
  { id: 'lock', name: '시스템 화면 잠금', desc: '외출 시 컴퓨터 즉시 보안 잠금' },
  { id: 'lang_switch', name: '입력 언어 전환', desc: '한/영 및 다국어 입력 언어 전환' },
  { id: 'open_folder', name: '지정 폴더 열기', desc: '자주 사용하는 업무 폴더 바로 열기' },
  { id: 'media_play', name: '미디어 재생/일시정지', desc: '음악 및 비디오 플레이어 원클릭 제어' },
];

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initDrawer();
  initImageErrorHandlers();
  initMainInteractions();
  initFeaturesInteractions();
  init360Viewer();
  fetchBrandContent();
});

/**
 * 테마 초기화 및 라이트/다크 모드 전환 (Button_T)
 */
function initTheme() {
  const themeBtn = document.getElementById('Button_T');
  const savedTheme = localStorage.getItem('logi_theme') || 'light';
  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const nextTheme = state.theme === 'light' ? 'dark' : 'light';
      applyTheme(nextTheme);
    });
  }
}

function applyTheme(theme) {
  state.theme = theme;
  if (theme === 'dark') {
    document.body.classList.add('dark', 'dark-mode');
  } else {
    document.body.classList.remove('dark', 'dark-mode');
  }
  localStorage.setItem('logi_theme', theme);

  const themeBtn = document.getElementById('Button_T');
  if (themeBtn) {
    themeBtn.textContent = theme === 'light' ? '다크 모드' : '라이트 모드';
  }
}

/**
 * 탭 네비게이션 제어 (Button_1, Button_2, Button_3)
 */
function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const tabTarget = btn.getAttribute('data-tab');
      if (tabTarget) switchTab(tabTarget);
    });
  });

  // Footer navigation mirrors
  document.querySelectorAll('[data-nav-target]').forEach((el) => {
    el.addEventListener('click', () => {
      const target = el.getAttribute('data-nav-target');
      if (target) {
        switchTab(target);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

function switchTab(tabName) {
  state.currentTab = tabName;

  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    if (btn.getAttribute('data-tab') === tabName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update tab views
  document.querySelectorAll('.tab-view').forEach((view) => {
    if (view.id === `tab-${tabName}`) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * 상단 스펙 & 안내 팝업 서랍 (Cubic Bezier 1s Animation)
 */
function initDrawer() {
  const drawer = document.getElementById('top-drawer');
  const toggleBtn = document.getElementById('drawer-toggle-btn');
  const closeBtn = document.getElementById('drawer-close-btn');

  function toggleDrawer() {
    state.isDrawerOpen = !state.isDrawerOpen;
    if (drawer) {
      if (state.isDrawerOpen) {
        drawer.classList.add('open');
        if (toggleBtn) toggleBtn.textContent = '서랍 닫기 ✕';
      } else {
        drawer.classList.remove('open');
        if (toggleBtn) toggleBtn.textContent = '상단 사양 서랍 ▼';
      }
    }
  }

  if (toggleBtn) toggleBtn.addEventListener('click', toggleDrawer);
  if (closeBtn) closeBtn.addEventListener('click', toggleDrawer);
}

/**
 * 이미지 로드 에러 처리 커스텀 핸들러 (Themed Fallback Box)
 * 만약 이미지 경로가 손상되었거나 브라우저에서 로드되지 않을 경우 스타일링된 박스로 대체
 */
function initImageErrorHandlers() {
  const images = document.querySelectorAll('img[data-fallback]');
  images.forEach((img) => {
    img.addEventListener('error', () => {
      handleImageError(img);
    });
  });
}

function handleImageError(img) {
  const title = img.getAttribute('alt') || '이미지 에셋';
  const src = img.getAttribute('src') || '';

  const fallbackBox = document.createElement('div');
  fallbackBox.className = 'themed-image-fallback';

  const iconEl = document.createElement('div');
  iconEl.className = 'fallback-icon';
  iconEl.textContent = '🖱️';

  const titleEl = document.createElement('div');
  titleEl.className = 'fallback-title';
  titleEl.textContent = title;

  const pathEl = document.createElement('div');
  pathEl.className = 'fallback-path';
  pathEl.textContent = src;

  fallbackBox.append(iconEl, titleEl, pathEl);

  if (img.parentElement) {
    img.style.display = 'none';
    img.parentElement.appendChild(fallbackBox);
  }
}

/**
 * 메인 페이지 인터랙션 (Easy-Switch 채널 토글)
 */
function initMainInteractions() {
  // Easy-Switch channel toggle
  const channelBtn = document.getElementById('main-channel-switcher');
  const channelText = document.getElementById('main-channel-text');
  const heroImage = document.getElementById('main-hero-image');

  if (channelBtn) {
    channelBtn.addEventListener('click', () => {
      state.activeChannel = state.activeChannel === 1 ? 2 : 1;
      if (channelText) {
        channelText.textContent = `연결 채널: PC ${state.activeChannel}`;
      }
      if (heroImage) {
        heroImage.src =
          state.activeChannel === 1
            ? './assets/images/m-top-1.webp'
            : './assets/images/m-top-2.webp';
        heroImage.alt = `로지텍 M590 Silent 마우스 정면 상단 뷰 (연결 채널 ${state.activeChannel})`;
      }
    });
  }
}

/**
 * 360° 뷰어 모드 전환 (2D 이미지 버전 / 3D 모델링 버전) 및 Lazy Loading
 */
let modelViewerScriptPromise = null;

function hasWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

function loadModelViewerScript() {
  if (customElements.get('model-viewer')) {
    return Promise.resolve();
  }
  if (modelViewerScriptPromise) {
    return modelViewerScriptPromise;
  }

  modelViewerScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js';
    script.crossOrigin = 'anonymous';
    script.referrerPolicy = 'no-referrer';
    script.onload = () => {
      customElements.whenDefined('model-viewer').then(resolve).catch(reject);
    };
    script.onerror = () => {
      modelViewerScriptPromise = null;
      reject(new Error('Failed to load model-viewer script'));
    };
    document.head.appendChild(script);
  });

  return modelViewerScriptPromise;
}

function init360Viewer() {
  const modeBtns = document.querySelectorAll('.viewer-mode-btn');
  const panel2d = document.getElementById('viewer-2d-panel');
  const model3dPanel = document.getElementById('viewer-3d-panel');
  const loadingState = document.getElementById('model-loading-state');
  const errorState = document.getElementById('model-error-state');
  const mountEl = document.getElementById('model-viewer-mount');

  function showModelError() {
    if (loadingState) loadingState.hidden = true;
    if (mountEl) mountEl.hidden = true;
    if (errorState) errorState.hidden = false;
  }

  function initModelViewerLazy() {
    if (state.isModelInitialized) return;
    state.isModelInitialized = true;

    if (loadingState) loadingState.hidden = false;
    if (errorState) errorState.hidden = true;
    if (mountEl) mountEl.hidden = false;

    if (!hasWebGLSupport()) {
      showModelError();
      return;
    }

    loadModelViewerScript()
      .then(() => {
        if (!mountEl) {
          showModelError();
          return;
        }

        const viewer = document.createElement('model-viewer');
        viewer.id = 'm590-model-viewer';
        viewer.setAttribute('src', './assets/models/m590.glb');
        viewer.setAttribute('alt', '로지텍 M590 Silent 3D 모델');
        viewer.setAttribute('camera-controls', '');
        viewer.setAttribute('auto-rotate', '');
        viewer.setAttribute('shadow-intensity', '1');
        viewer.setAttribute('touch-action', 'pan-y');
        viewer.setAttribute('interaction-prompt', 'auto');
        viewer.setAttribute('min-camera-orbit', 'auto auto 65%');
        viewer.setAttribute('max-camera-orbit', 'auto auto 180%');

        viewer.addEventListener('load', () => {
          if (loadingState) loadingState.hidden = true;
        });

        viewer.addEventListener('error', () => {
          showModelError();
        });

        mountEl.appendChild(viewer);
      })
      .catch(() => {
        showModelError();
      });
  }

  modeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-viewer-mode') || '2d';
      state.viewerMode = mode;

      modeBtns.forEach((b) => {
        const isActive = b.getAttribute('data-viewer-mode') === mode;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      if (mode === '3d') {
        if (panel2d) panel2d.hidden = true;
        if (model3dPanel) model3dPanel.hidden = false;
        initModelViewerLazy();
      } else {
        if (model3dPanel) model3dPanel.hidden = true;
        if (panel2d) panel2d.hidden = false;
      }
    });
  });
}

/**
 * 기능 소개 페이지 인터랙션 (하드웨어 앵글, 맵핑, 스마트 액션)
 */
function initFeaturesInteractions() {
  const angleImage = document.getElementById('hardware-angle-image');
  const angleBtns = document.querySelectorAll('.angle-btn');

  // Angle switcher (상단 뷰, 측면 뷰, 하단 뷰)
  angleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      angleBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const angle = btn.getAttribute('data-angle');
      state.activeAngle = angle;

      if (angleImage) {
        if (angle === 'top') {
          angleImage.src = './assets/images/m-top-1.webp';
          angleImage.alt = '로지텍 M590 상단 뷰';
        } else if (angle === 'side') {
          angleImage.src = './assets/images/m-left-side.webp';
          angleImage.alt = '로지텍 M590 측면 뷰';
        } else if (angle === 'bottom') {
          angleImage.src = './assets/images/m-bottom.webp';
          angleImage.alt = '로지텍 M590 하단 뷰';
        }
      }
    });
  });

  // Feature Select Buttons (선택 토글 및 연동된 앵글 전환)
  const featureBtns = document.querySelectorAll('.feature-select-btn');
  featureBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const wasActive = btn.classList.contains('active');
      featureBtns.forEach((b) => b.classList.remove('active'));

      if (!wasActive) {
        btn.classList.add('active');
        const featureId = btn.getAttribute('data-feature');
        if (featureId === 'sideButtons') {
          triggerAngle('side');
        } else if (featureId === 'powerSwitch' || featureId === 'unifying') {
          triggerAngle('bottom');
        } else {
          triggerAngle('top');
        }
      }
    });
  });

  function triggerAngle(angleName) {
    const targetBtn = document.querySelector(`.angle-btn[data-angle="${angleName}"]`);
    if (targetBtn) targetBtn.click();
  }

  // Populate Custom Button Mapping Library Chips & Setup Controls
  const libraryContainer = document.getElementById('mapping-library-grid');
  const b4Select = document.getElementById('b4-select');
  const b5Select = document.getElementById('b5-select');
  const customMappingInput = document.getElementById('customMappingInput');
  const previewArea = document.getElementById('previewArea');
  const targetBtns = document.querySelectorAll('.target-btn');
  const targetNameEl = document.getElementById('mapping-target-name');

  // Target Button (Button 4 / Button 5) Toggle Listeners
  targetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      targetBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target') || 'b4';
      state.targetButton = targetId;

      if (targetNameEl) {
        targetNameEl.textContent = targetId === 'b4' ? 'Button 4 (상단)' : 'Button 5 (하단)';
      }

      // Sync customMappingInput and previewArea with current target's mapping
      const currentSelectedVal = targetId === 'b4' 
        ? (b4Select ? b4Select.value : state.b4Mapping)
        : (b5Select ? b5Select.value : state.b5Mapping);
      const activeItem = mappingLibrary.find((m) => m.id === currentSelectedVal);
      if (activeItem) {
        if (customMappingInput) customMappingInput.value = activeItem.name;
        if (previewArea) previewArea.textContent = activeItem.desc;
        highlightActiveChip(activeItem.id);
      }
    });
  });

  // Central mapping selection function called when any mapping option button is clicked
  function applyMappingOption(item) {
    if (!item) return;
    const optionText = item.name;

    // Dynamically update customMappingInput and previewArea as required
    if (customMappingInput) {
      customMappingInput.value = optionText;
    }
    if (previewArea) {
      previewArea.textContent = item.desc || optionText;
    }

    // Apply to active target button (Button 4 or Button 5)
    if (state.targetButton === 'b4') {
      state.b4Mapping = item.id;
      if (b4Select) b4Select.value = item.id;
    } else {
      state.b5Mapping = item.id;
      if (b5Select) b5Select.value = item.id;
    }

    highlightActiveChip(item.id);
    updateMappingDisplay();
  }

  function highlightActiveChip(activeId) {
    document.querySelectorAll('.mapping-item-chip').forEach((chip) => {
      if (chip.getAttribute('data-id') === activeId) {
        chip.classList.add('selected');
      } else {
        chip.classList.remove('selected');
      }
    });
  }

  // Populate 14 available mapping option buttons
  if (libraryContainer) {
    libraryContainer.replaceChildren();
    mappingLibrary.forEach((item) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'mapping-item-chip';
      chip.setAttribute('data-id', item.id);

      const nameEl = document.createElement('strong');
      nameEl.textContent = item.name;

      const descEl = document.createElement('div');
      descEl.className = 'chip-desc';
      descEl.textContent = item.desc;

      chip.append(nameEl, descEl);

      // Click event listener dynamically populates selected action into preview/input box
      chip.addEventListener('click', () => {
        applyMappingOption(item);
      });
      libraryContainer.appendChild(chip);
    });
  }

  // Recommended Quick Option Buttons (e.g. Copy/Paste, Calculator, Screen Capture)
  const quickOptionBtns = document.querySelectorAll('.quick-option-btn');
  quickOptionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mappingId = btn.getAttribute('data-mapping-id');
      const foundItem = mappingLibrary.find((m) => m.id === mappingId);
      if (foundItem) {
        applyMappingOption(foundItem);
      }
    });
  });

  // Dropdown change listeners
  if (b4Select) {
    b4Select.addEventListener('change', () => {
      const item = mappingLibrary.find((m) => m.id === b4Select.value);
      if (item && state.targetButton === 'b4') {
        if (customMappingInput) customMappingInput.value = item.name;
        if (previewArea) previewArea.textContent = item.desc || item.name;
        highlightActiveChip(item.id);
      }
      updateMappingDisplay();
    });
  }

  if (b5Select) {
    b5Select.addEventListener('change', () => {
      const item = mappingLibrary.find((m) => m.id === b5Select.value);
      if (item && state.targetButton === 'b5') {
        if (customMappingInput) customMappingInput.value = item.name;
        if (previewArea) previewArea.textContent = item.desc || item.name;
        highlightActiveChip(item.id);
      }
      updateMappingDisplay();
    });
  }

  function updateMappingDisplay() {
    const b4Val = b4Select ? b4Select.value : 'forward';
    const b5Val = b5Select ? b5Select.value : 'back';
    const b4Badge = document.getElementById('b4-badge');
    const b5Badge = document.getElementById('b5-badge');

    const b4Item = mappingLibrary.find((m) => m.id === b4Val);
    const b5Item = mappingLibrary.find((m) => m.id === b5Val);

    if (b4Badge && b4Item) b4Badge.textContent = b4Item.name.split(' ')[0];
    if (b5Badge && b5Item) b5Badge.textContent = b5Item.name.split(' ')[0];
  }

  // Initial highlight for default selection
  highlightActiveChip('forward');

  // Smart Actions Execution Simulator
  const runSmartBtn = document.getElementById('run-smart-action-btn');
  const smartFeedback = document.getElementById('smart-action-feedback');

  if (runSmartBtn) {
    runSmartBtn.addEventListener('click', () => {
      if (smartFeedback) {
        smartFeedback.style.display = 'block';
        smartFeedback.textContent = '스마트 액션 파이프라인 실행 중... (앱 실행 및 단축키 입력 완료 ✓)';
        setTimeout(() => {
          smartFeedback.style.display = 'none';
        }, 3000);
      }
    });
  }
}

/**
 * 브랜드 정보 비동기 로딩 (fetch ./assets/data/content.json)
 * data.brand.title 및 data.brand.description 동적 렌더링
 */
function fetchBrandContent() {
  const brandTitleEl = document.getElementById('brand-dynamic-title');
  const brandDescEl = document.getElementById('brand-dynamic-description');

  fetch('./assets/data/content.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data && data.brand && typeof data.brand === 'object') {
        if (brandTitleEl && typeof data.brand.title === 'string' && data.brand.title.trim()) {
          brandTitleEl.textContent = data.brand.title;
        }
        if (brandDescEl && typeof data.brand.description === 'string' && data.brand.description.trim()) {
          brandDescEl.textContent = data.brand.description;
        }
      }
    })
    .catch((error) => {
      console.warn('content.json 로딩 오류 (기본 텍스트 유지):', error);
      // Fallback content already present in HTML
    });
}
