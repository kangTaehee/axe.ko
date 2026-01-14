// javascript: 
async function loadAccessibilityChecker() {
	const gistRawUrl = 'https://kangtaehee.github.io/axe.ko/axe.ko.min.js';
	try {
		const response = await fetch(gistRawUrl);
		if (!response.ok) throw new Error('네트워크 응답에 문제가 있습니다.');
		const code = await response.text();
		const script = document.createElement('script');
		script.textContent = code;
		document.head.appendChild(script);
		console.log('접근성 점검 코드가 성공적으로 로드되었습니다.');

	} catch (error) {
		console.error('스크립트 로드 중 오류 발생:', error);

	}
} loadAccessibilityChecker();
