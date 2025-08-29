document.addEventListener('DOMContentLoaded', function() {
    // Typed.js를 사용한 한글 타이핑 효과
    const typed = new Typed('#typed-text', {
        strings: ['모두의 눈높이에서, 함께 만들어가는 내일의 이야기!'],
        typeSpeed: 60,
        backSpeed: 0,
        loop: false,
        showCursor: true,
        cursorChar: '|',
        onComplete: function(self) {
            // 타이핑 완료 후 커서를 투명하게 처리
            setTimeout(() => {
                self.cursor.style.opacity = '0';
                // 애니메이션이 끝난 후 제거
                setTimeout(() => {
                    self.cursor.style.display = 'none';
                }, 500);
            }, 1000);
        }
    });
    
    // 서브 텍스트와 버튼 동시에 나타나기 (바로 시작)
    setTimeout(() => {
        document.querySelector('.sub-title').style.opacity = '1';
    }, 300);
    
    setTimeout(() => {
        document.querySelector('.sub-text').style.opacity = '1';
    }, 600);
    
    // 버튼 나타나기
    setTimeout(() => {
        document.querySelectorAll('.experience-btn').forEach((btn, index) => {
            setTimeout(() => {
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 900);
    
    // 버튼 클릭 이벤트
    document.querySelector('.teacher-btn').addEventListener('click', function() {
        window.open('https://he75.aidt.me/demos?id=W9z60U3s9NI&user_type=teacher', '_blank');
    });
    
    document.querySelector('.student-btn').addEventListener('click', function() {
        window.open('https://he75.aidt.me/demos?id=W9z60U3s9NI&user_type=student', '_blank');
    });
});