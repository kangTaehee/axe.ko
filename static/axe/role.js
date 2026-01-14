const role = {
	"WAIA001": {
		description: "1.적절한 대체 텍스트 제공",
		checks: ["area-alt", "image-alt", "input-image-alt", "object-alt", "role-img-alt", "svg-img-alt", "aria-command-name", "aria-tooltip-name", "aria-toggle-field-name", "aria-treeitem-name", "button-name", "image-redundant-alt", "input-button-name", "aria-label", "button-has-visible-text", "has-alt", "has-visible-text", "non-empty-alt"]
	},
	"WAIA002": {
		description: "2.자막 제공",
		checks: ["audio-caption", "video-caption"]
	},
	"WAIA003": {
		description: "3.표의 구성",
		checks: ["definition-list", "dlitem", "scope-attr-valid", "table-duplicate-name", "table-fake-caption", "td-has-header", "td-headers-attr", "th-has-data-cells", "empty-table-header", "caption-faked", "html5-scope", "same-caption-summary", "scope-value", "td-has-header", "td-headers-attr", "th-has-data-cells"]
	},
	"WAIA004": {
		description: "4.콘텐츠의 선형 구조",
		checks: ["focus-order-semantics"]
	},
	"WAIA005": {
		description: "5.명확한 지시 사항 제공",
		checks: ["label-content-name-mismatch", "label-title-only"]
	},
	"WAIA006": {
		description: "6.색에 무관한 콘텐츠 인식",
		checks: ["link-in-text-block"]
	},
	"WAIA007": {
		description: "7.자동 재생 금지",
		checks: ["no-autoplay-audio"]
	},
	"WAIA008": {
		description: "8.텍스트 콘텐츠의 명도 대비",
		checks: ["color-contrast"]
	},
	"WAIA009": {
		description: "9.콘텐츠 간의 구분",
		checks: ["contentinfo", "important-letter-spacing", "important-line-height", "important-word-spacing", "letter-spacing", "line-height", "word-spacing"]
	},
	"WAIA010": {
		description: "10.키보드 사용 보장",
		checks: ["aria-hidden-focus", "keyboard-navigation"]
	},
	"WAIA011": {
		description: "11.초점 이동과 표시",
		checks: ["frame-focusable-content"]
	},
	"WAIA012": {
		description: "12.조작 가능",
		checks: ["scrollable-region-focusable", "nested-interactive", "is-on-screen"]
	},
	"WAIA013": {
		description: "13.문자 단축키",
		checks: []
	},
	"WAIA014": {
		description: "14.응답시간 조절",
		checks: ["meta-refresh", "meta-refresh-no-exceptions"]
	},
	"WAIA015": {
		description: "15.정지 기능 제공",
		checks: ["pause-stop-hide"]
	},
	"WAIA016": {
		description: "16.깜빡임과 번쩍임 사용 제한",
		checks: []
	},
	"WAIA017": {
		description: "17.반복 영역 건너뛰기",
		checks: ["bypass", "skip-link"]
	},
	"WAIA018": {
		description: "18.제목 제공",
		checks: ["document-title", "heading-order", "empty-heading", "p-as-heading", "unique-frame-title", "doc-has-title"]
	},
	"WAIA019": {
		description: "19.적절한 링크 텍스트",
		checks: ["identical-links-same-purpose", "link-name"]
	},
	"WAIA020": {
		description: "20.고정된 참조 위치 정보",
		checks: ["landmark-main-is-top-level"]
	},
	"WAIA021": {
		description: "21.단일 포인터 입력 지원",
		checks: []
	},
	"WAIA022": {
		description: "22.포인터 입력 취소",
		checks: ["pointer-cancel"]
	},
	"WAIA023": {
		description: "23.레이블과 네임",
		checks: []
	},
	"WAIA024": {
		description: "24.동작 기반 작동",
		checks: []
	},
	"WAIA025": {
		description: "25.기본 언어 표시",
		checks: ["html-has-lang", "html-lang-valid", "valid-lang", "html-xml-lang-mismatch"]
	},
	"WAIA026": {
		description: "26.사용자 요구에 따른 실행",
		checks: []
	},
	"WAIA027": {
		description: "27.찾기 쉬운 도움 정보",
		checks: ["frame-title", "frame-title-unique"]
	},
	"WAIA028": {
		description: "28.오류 정정",
		checks: ["autocomplete-valid"]
	},
	"WAIA029": {
		description: "29.레이블 제공",
		checks: ["label", "form-field-multiple-labels", "aria-input-field-name", "aria-metre-name", "aria-progressbar-name", "label-content-name-mismatch", "label-title-only", "aria-labelledby", "non-empty-title"]
	},
	"WAIA030": {
		description: "30.접근 가능한 인증",
		checks: []
	},
	"WAIA031": {
		description: "31.반복 입력 정보",
		checks: []
	},
	"WAIA032": {
		description: "32.마크업 오류 방지",
		checks: ["duplicate-id-aria", "duplicate-id-active", "duplicate-id", "duplicate-id-aria"]
	},
	"WAIA033": {
		description: "33.웹 애플리케이션 접근성 준수",
		checks: ["frame-tested", "aria-allowed-attr"]
	},
	"WAIAE01": {
		description: "기타 ARIA 관련",
		checks: ["aria-allowed-role", "aria-prohibited-attr", "aria-required-attr", "aria-conditional-attr", "aria-deprecated-role", "aria-dialog-name", "aria-hidden-body", "aria-meter-name", "aria-required-children", "aria-required-parent", "aria-roledescription", "aria-roles", "aria-text", "aria-valid-attr-value", "aria-valid-attr"]
	},
	"WAIAE02": {
		description: "기타 시맨틱 관련",
		checks: ["list", "listitem", "definition-list", "dlitem", "hidden-content", "landmark-banner-is-top-level", "landmark-complementary-is-top-level", "landmark-contentinfo-is-top-level", "landmark-main-is-top-level", "landmark-no-duplicate-banner", "landmark-no-duplicate-contentinfo", "landmark-no-duplicate-main", "landmark-one-main", "landmark-unique", "marquee", "blink", "region", "exists", "presentational-role", "role-none", "role-presentation", "svg-non-empty-title"]
	},
	"WAIAE03": {
		description: "기타 스타일 및 구조 관련",
		checks: ["css-orientation-lock", "p-as-heading", "avoid-inline-spacing"]
	},
	"WAIAE04": {
		description: "기타 프레임 관련",
		checks: ["hidden-content"]
	}
}
const report = {};
function checkVideoCaption(item) {
	for (const key in role) {
		if (role[key].checks.includes(item)) { return key }
	}
	return null
}