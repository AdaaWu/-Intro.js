document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        // 激活按鈕燈號
        document.querySelectorAll('.button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // 計算目標樓層位置
        const floor = this.getAttribute('data-floor');
        const targetPosition = 500 - (floor - 1) * 200; // 假設每層高度 200px

        // 電梯移動動畫
        anime({
            targets: '#elevator',
            top: targetPosition,
            easing: 'easeInOutQuad',
            duration: 1000
        });
    });
});
