function kakaoLinkClickHandler (event) {
    window.location.href = 'https://developers.kakao.com/';
}

const kakaoLinkElement = document.getElementById('kakao-link');
kakaoLinkElement.addEventListener('click', kakaoLinkClickHandler);

function naverLinkClickHandler (event) {
    window.location.href = 'https://developers.naver.com/';
}

const naverLinkElement = document.getElementById('naver-link');
naverLinkElement.addEventListener('click', naverLinkClickHandler);