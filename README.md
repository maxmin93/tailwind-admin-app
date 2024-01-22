# tailwind-admin-app

Tailwind 무료 템플릿을 구해서 svelte 및 melt-ui 등으로 UI 기능을 구성하는 연습을 합니다. 첫번째로 TailAdmin 이라는 템플릿으로 클론 프로젝트를 진행합니다.

<img src="/static/images/07-admin-dashboard-desktop.png" alt="admin-dashboard-mobile" width="80%" />

## 0. 개요

Admin 템플릿 : [tailadmin](https://taildashboards.com/get/tailadmin) (무료)

- [x] 런타임, 컴파일러

  - Bun 1.0.21
  - typescript 5.0.0

- [x] 웹프레임워크 및 개발도구

  - Vite 5.0.3 + SvelteKit 2.0.0
  - prettier 3.1.1
  - [prettier-plugin-svelte](https://www.npmjs.com/package/prettier-plugin-svelte) 3.1.2

- [x] CSS 유틸리티

  - TailwindCSS 3.3.6 + postcss 8.4.32 (forms + typography)
  - [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss) 0.5.9
  - [vite-plugin-tailwind-purgecss](https://www.npmjs.com/package/vite-plugin-tailwind-purgecss) 0.1.4
  - [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) 2.1.0
  - [tailwind-variants](https://www.tailwind-variants.org/docs/introduction) 0.1.20

- [x] UI 컴포넌트

  - fonts : D2Coding, Noto Sans/Serif KR, Noto Color Emoji
  - [lucide-svelte](https://www.npmjs.com/package/lucide-svelte) 0.295.0
  - [cmdk-sv](https://www.npmjs.com/package/cmdk-sv) 0.0.12
  - [mode-watcher](https://www.npmjs.com/package/mode-watcher) 0.1.2
  - [svelte-sonner](https://www.npmjs.com/package/svelte-sonner) 0.3.11

- [x] 개발 유틸리티

  - [faker-js](https://www.npmjs.com/package/@faker-js/faker) 8.3.1
  - [svelte-headless-table](https://www.npmjs.com/package/svelte-headless-table) 0.18.1
  - [svelte-legos](https://www.npmjs.com/package/svelte-legos) 0.2.2
  - [svelte-persisted-store](https://www.npmjs.com/package/svelte-persisted-store) 0.9.0
  - [svelte-wrap-balancer](https://www.npmjs.com/package/svelte-wrap-balancer) 0.0.4
  - [sveltekit-superforms](https://www.npmjs.com/package/sveltekit-superforms) 1.13.2
  - [zod](https://www.npmjs.com/package/zod) 3.22.4

## 1. 프로젝트 생성

### [SvelteKit](https://kit.svelte.dev/) 프로젝트 생성

```bash
bun create svelte@latest tailwind-admin-app
  # - Skeleton project
  # - Typescript
  # - Prettier

cd tailwind-admin-app
bun install

bun run dev
```

### [Tailwind CSS with SvelteKit 설정](https://tailwindcss.com/docs/guides/sveltekit)

1. tailwind, postcss 설치 (typography, forms)
2. melt-ui 및 개발 유틸리티, plugins, icons 설치
3. `.prettierrc` 설정 : tailwind 플러그인
4. `vite.config.ts` 설정 : purgeCss (highlight.js 클래스 제거 방지)
5. `svelte.config.js` 설정 : melt-ui 전처리기
6. `tailwind.config.js` 설정 : Noto 폰트, plugins
7. `app.html` : D2Coding 폰트, lang 설정
8. `app.pcss` : tailwind 테마 설정
9. `+layout.svelte` : 전역 css 연결
10. `+page.svelte` : 데모 코드를 넣어 tailwind 작동 확인

### DB & ORM 설정 (bun:sqlite)

bun:sqlite 을 내장한 bun 런타임을 실행하기 위해 `--bun` 옵션을 사용한다.

## 2. Tailwind 템플릿을 Svelte 프로젝트로 바꾸기

<img src="/2024/01/07-admin-dashboard-mobile.png" alt="admin-dashboard-mobile" width="50%" />

### 작업 절차

1. sveltekit + tailwind 프로젝트 생성
2. layout 과 page 분리
3. layout : header 와 footer 분리
4. lib : icon 등을 분리하여 assets 에 저장
5. layout 으로부터 컴포넌트들을 분리 - depth 1부터 최대 3까지
6. parent 와 child 컴포넌트 간의 state 또는 handler 처리 (store & context)
7. transition 등을 svelte 기능으로 대체
8. bg 및 text 색상 변수를 tailwind 설정 변수로 대체 (ex: primary, info 등)
9. 최신 유틸리티 라이브러리로 대체 가능한 기능을 선별하고 대체

### 디렉토리 구조

- `.env` : 외부 변수
- `.prettierrc` : 플러그인
- `svelte.config.js` : 전처리기
- `tailwind.config.js` : 플러그인, 테마 설정
- [src]
  - `app.html`
  - `app.pcss` : tailwind 변수값, 사용자 클래스
  - [lib]
    - [assets] : 정적인 컴포넌트
      - [icons] : svg 또는 이미지
    - [components]
      - [admin] : 특정 페이지에 종속적인 컴포넌트
        - header
          - left-section
          - right-section
          - dropdown-menu
          - mobile-nav
        - footer
          - copyright
      - [ui] : 다른 곳에서도 사용할 수 있는 컴포넌트
        - mode-toggle
        - card
    - [stores] : 여러 컴포넌트에 걸쳐서 상태를 처리하는 모듈
    - [config] : 메타 데이터, 설정 데이터
    - [types] : 사용자 타입 정의
  - [routes]
    - `+layout.svelte`
      - header
      - main
      - footer
    - `+page.svelte`
      - contents

#### 예시 : header

- 가독성과 유지보수 편의성을 위해 블럭 단위로 컴포넌트를 분할
- 일단 해당 디렉토리에서 하위 컴포넌트 파일들을 나누고, 나중에 `$lib` 로 이동

```html
<script>
	import { ModeToggle } from '$lib/components/ui';
	import { dropdownOpen, mobileNavOpen } from './open-handlers';
	import { setContext } from 'svelte';
	setContext('dropdownOpen', dropdownOpen);
	setContext('mobileNavOpen', mobileNavOpen);

	import HeaderLeftSection from './header-left-section.svelte';
	import HeaderMobileNavButton from './header-mobile-nav-button.svelte';
	import HeaderMobileNavMenu from './header-mobile-nav-menu.svelte';
	import HeaderUserDropdown from './header-user-dropdown.svelte';
	import HeaderRightToolbar from './header-right-toolbar.svelte';
</script>

<header id="page-header" class="z-1 flex flex-none items-center">
	<div class="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
		<div class="flex justify-between border-b-2 border-slate-200/50 py-6">
			<HeaderLeftSection />

			<!-- Right Section -->
			<div class="flex items-center gap-1 lg:gap-5">
				<HeaderRightToolbar />
				<HeaderUserDropdown />
				<ModeToggle />
				<HeaderMobileNavButton />
			</div>
			<!-- END Right Section -->
		</div>

		{#if $mobileNavOpen}
		<HeaderMobileNavMenu />
		{/if}
	</div>
</header>
```

### 색상 테마 변경

daisyUI 의 light, dark 테마 색상으로 변경

1. daisyUI 의 light, dark 색상 변수 찾기
2. tailwind 설정의 색상 변수와 daisyUI 색상 변수 매핑
   1. rgb, hsl 변수를 모두 oklch 로 변경
3. app.pcss 의 색상 변수에 daisyUI 색상값 적용
   1. rgb, hsl 색상값을 모두 oklch 색상값으로 변경
4. 컴포넌트 svelte 파일에서 `bg-{색상}`, `text-{색상}` 들을 모두 교체
   1. bg-background, text-foreground

> 참고 : [OKLCH Color Picker & Converter](https://oklch.com/)

#### 참고 : [daisyUI 테마](https://github.com/saadeghi/daisyui/blob/master/src/theming/themes.js)

```css
:root,
[data-theme] {
	background-color: theme(colors.base-100); /* background */
	color: theme(colors.base-content); /* foreground */
}
```

> CSS 속성 : [var 함수](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)

- `var(--my-var, red)` : --my-var 가 정의되지 않았을 경우 red로 표시됨

## 3. 코딩

### Icon 컴포넌트 (SVG)

- `aria-hidden` : (스크린 리더에서) 불필요한 요소를 숨기는 역활
- twMerge 를 이용해 사용자 class 와 병합하여 적용
- `<FlagIcon />` 사용시 정적 맵핑
  - 동적 맵핑 필요시엔 `<svelte:component this={컴포넌트} />` 활용

### handler 모듈 (drilling)

- 오픈 상태를 여러 컴포넌트에서 제어해야 하는 경우
  - 모바일 화면에서 nav 메뉴 오픈 상태를 여기저기서 제어
  - dropdown 메뉴의 오픈 상태에 따라 하위 컴포넌트에서 출력
- 제어 동작을 사전에 정의 : open, close, toggle
  - 참고 : [Using stores with context](https://kit.svelte.dev/docs/state-management#using-stores-with-context)

### 조건부 class 적용

value 값에 따라 적용되는 색상을 `tailwind-variants` 으로 설정하여 적용한다.

> `{#if}..{/if}` 에 의한 html 중복 없이 간단하게 처리할 수 있다.

### `svelte-headless-table` 사용해 보기

shadcn-svelte 의 [Data Table](https://www.shadcn-svelte.com/docs/components/data-table) 에서는 해볼만하게 나왔는데, [svelte-headless-table](https://svelte-headless-table.bryanmylee.com/docs/getting-started/quick-start) 만으로 적용해 보려니깐 무척 지저분하게 보인다. 일단 컬럼 순서와, 정렬, 컬럼 숨기기 plugin 기능을 추가하여 적용해 보았다.

> 컬럼 단위 정렬은 [Svelte Legos](https://sveltelegos.com/guides/actions/sortableTableAction) 에도 있다.

<img src="/static/images/07-admin-dashboard-headless-table.png" alt="admin-dashboard-headless-table" width="60%" />

## 9. Review

- tailwind 의 색상 변수를 사용하니 편하다. 뭔가 좀 만져볼 수 있다는 자신감이 생겼다.
- faker 는 nanoid 를 포함하고, random 값 생성 기능이 쓸모가 많다.
- 조건부 스타일 적용시 tailwind-variants 가 유용하다.
- 테마 색상이 이쁜 tailwind 프레임워크들을 뜯어서 사용해보는 것도 좋겠다.

### tailwind 참고사항

- [font-feature-settings](https://story.pxd.co.kr/1717) : 오픈타입 글꼴의 고급 설정 [(values)](https://css-tricks.com/almanac/properties/f/font-feature-settings/#aa-values)
  - [Noto OpenType](https://fonts.google.com/knowledge/using_type/implementing_open_type_features_on_the_web#the-basics) : liga (standard ligatures)
  - 예시 `font-feature-settings: 'rlig' 1, 'calt' 1;`

### tailwind 색상 테마 솔루션

> 참고 : [tailwind-dynamic-color-theme-solution](https://medium.com/@elvann.abendroth/tailwind-dynamic-color-theme-solution-4351d0495c7f)

- Solution 1. Using a Theme File

  - `tailwind.config.js` 에서 변수와 연결되는 색상 함수를 정의
  - `theme.js` 에서 색상 함수를 제공 (json 파일 등에서 읽어올 수도 있음)

- Solution 2. Using CSS Variables
  - `tailwind.config.js` 에서 변수를 정의하고
  - `global.css` 에서 변수값(색상)을 설정

### [CSS 색상 함수 `oklch` 로 전환하는 이유](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)

공식을 정의하고 몇가지 색상을 선택하면 전체 디자인 시스템 팔레트가 자동으로 생성됩니다.

> `oklch`(L C H) or `oklch`(L C H / a)

- L 밝기 : lightness (0 ~ 100%) 검은색이냐 흰색이냐
- C 채도 : chroma (0.0 ~ 1.0) 원색이냐 탁한색이냐
- H 색조 : hue angle (0 ~ 360) 빨주노초파남보
- a 투명도 : opacity (0.0 ~ 1.0, 0 ~ 100%)

```css
.bw {
	color: oklch(0% 0 0); /* black */
	color: oklch(100% 0 0); /* white */
	color: oklch(100% 0.2 100); /* also white, any hue with 100% L is white */
	color: oklch(50% 0 0); /* gray */
}
.colors {
	color: oklch(80% 0.12 100); /* yellow */
	color: oklch(60% 0.12 100); /* much darker yellow */
	color: oklch(80% 0.05 100); /* quite grayish yellow */
	color: oklch(80% 0.12 225); /* blue, with the same perceived lightness */
}
.opacity {
	color: oklch(80% 0.12 100 / 50%); /* transparent yellow */
}
```

<img src="https://evilmartians.com/static/1ba334bc155f6d4652884281b72aa948/a0c8c/oklch-axes.webp" alt="oklch-axes" width="80%" />

> oklch 와 hsl 비교

- [hsl](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl)( H S L / A) : H (색조), S (채도), L (밝기), A (투명도)
  - oklch 는 (sRGB 모니터보다) 더 넓은 범위의 P3 색상에 사용할 수 있습니다.
- hsl() 와 달리 oklch 는 색상 수정 및 팔레트 생성에 더 좋습니다.
  - HSL 처럼 작동하지만 HSL 보다 밝기를 더 잘 인코딩합니다.
  - 색상에 따라 L 값이 다르기 때문에 hsl 형식은 a11y 에 적합하지 않습니다.
  - RGB, hex 및 색상(display-p3)은 색상 수정에 편리하지 않습니다. 왜냐하면 대부분의 인간에게는 빨간색, 파란색 및 녹색의 양을 변경하여 직관적으로 색상을 설정하는 것이 어렵기 때문입니다.

> oklch 와 lch 차이

- lch 의 색상 변화 버그를 해결하기 위해 OKLCH 공간을 만들었습니다.
  - LCH 에는 한 가지 고통스러운 버그가 있습니다. 채도의 예상치 못한 색조 변화와 파란색의 밝기 변경( 270및 색조 값 사이 330)입니다.
- 그 외에도 색역 보정 등이 향상 되었습니다.

<img src="https://evilmartians.com/static/34e8eeed150629f41555c92b01f36644/p3.png" alt="p3 vs sRGB" width="80%" />

> CSS 색상 변환 (rgb 를 oklch 로 바꾸기)

```css
:root {
	--origin: #ff000;
	--error: oklch(60% 0.16 30);
}
.foo {
	color: oklch(from var(--origin) l c h);
}
.message.is-error {
	/* The same color but with different opacity */
	background: oklch(from var(--error) l c h / 60%);
	/* 10% darker */
	border-color: oklch(from var(--error) calc(l - 10%) c h);
}
.message.is-success {
	/* Another hue (green) with the same lightness and saturation */
	background: oklch(from var(--error) l c 140);
}
```

&nbsp; <br />
&nbsp; <br />

> **끝!**
