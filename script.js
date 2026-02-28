// ========================================================
// スクロールしたら要素を表示させるアニメーション
// ========================================================

// ① 監視したい要素（アニメーションさせたい要素）をすべて取得
// 今回は共通見出しと、新設したユーティリティクラスを対象にします
const targets = document.querySelectorAll('.c-section-title, .u-fade-up');

// ② APIの設定（オプション）
const options = {
    root: null,       // ビューポート（ブラウザの表示領域）を基準にする
    rootMargin: '0px 0px -10% 0px',
    threshold: 0,
};

// ③ 要素が画面に入ったときに実行される処理（コールバック関数）
const callback = (entries, observer) => {
    entries.forEach(entry => {
        // もし要素が条件（10%見えた）を満たした場合
        if (entry.isIntersecting) {
            // 対象の要素に 'is-animated' クラスを付与してアニメーションを実行
            entry.target.classList.add('is-animated');

            // 一度アニメーションしたら、その要素の監視を解除する（何度もフワフワさせないため）
            observer.unobserve(entry.target);
        }
    });
};

// ④ Intersection Observer のインスタンスを作成（設定と処理を合体）
const observer = new IntersectionObserver(callback, options);

// ⑤ 取得したすべての対象要素に対して、監視をスタート！
targets.forEach(target => {
    observer.observe(target);
});

// ========================================================
// スクロールしたらページトップボタンを表示させるアニメーション
// ========================================================
// ページトップボタンの要素を取得
const toTopButton = document.querySelector('.c-to-top');

// スクロールイベントを監視
window.addEventListener('scroll', () => {
    // 現在のスクロール量を取得
    const scrollY = window.scrollY;

    // スクロール量が300px以上かどうかで条件分岐
    if (scrollY >= 300) {
        // 300px以上なら .u-fade-in を付与
        toTopButton.classList.add('is-show');
    } else {
        // 300px未満なら .u-fade-in を外す
        toTopButton.classList.remove('is-show');
    }
});

