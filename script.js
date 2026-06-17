const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", function () {
    item.classList.toggle("active");
  });
});
// =========================
// Scroll Fade Animation
// スクロールしたらふわっと表示
// =========================

// アニメーションをつけたい要素をまとめて指定
const fadeTargets = document.querySelectorAll(
  ".section-title, .worry-card, .ba-card, .recommend-item, .service-card, .middle-cta-inner, .reason-card, .price-row, .flow-card, .voice-card, .faq-item, .access-box, .reserve-inner"
);

// それぞれの要素に fade-up クラスをつける
fadeTargets.forEach(function (target, index) {
  target.classList.add("fade-up");

  // 4つごとに少しだけ時間差をつける
  const delayNumber = (index % 4) + 1;
  target.classList.add("fade-delay-" + delayNumber);
});

// 画面に入ったら show クラスをつける
const fadeObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -60px 0px"
  }
);

// 監視スタート
fadeTargets.forEach(function (target) {
  fadeObserver.observe(target);
});