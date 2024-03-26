const ID = 'userIdentity';
const PASSWORD = 'pass';

function onSignInButtonClickHandler (event) {
    const id = document.getElementById ('id').value;
    const password = document.getElementById ('password').value;

    if (id === ID && password === PASSWORD) {
            alert ('로그인 성공!');
    } else {
        const signInMessageElement = document.getElementById('sign-in-message');
        signInMessageElement.textContent = '로그인 정보가 일치하지 않습니다.';
    }
}

function onSignUpLinkClickHandler (event) {
    window.location.href = 'https://google.com';
}

const signUpLinkElement = document.getElementById('sign-up-link');
signUpLinkElement.addEventListener('click', onSignUpLinkClickHandler);

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
