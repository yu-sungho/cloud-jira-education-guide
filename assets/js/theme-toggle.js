// 테마 토글 + 사이드바 항상펼침 (외부 파일 — 인라인 스크립트 차단 환경에서도 동작)
(function () {
  function themeLink() {
    return document.querySelector('link[rel="stylesheet"]');
  }
  function isDark() {
    var l = themeLink();
    var h = l ? l.getAttribute("href") : "";
    return !/just-the-docs-light\.css/.test(h);
  }
  function setTheme(t) {
    var l = themeLink();
    if (l) {
      var h = l.getAttribute("href");
      l.setAttribute(
        "href",
        h.replace(/just-the-docs-[a-z]+\.css/, "just-the-docs-" + t + ".css"),
      );
    }
    try {
      localStorage.setItem("jtd-color-scheme", t);
    } catch (e) {}
    var label = t === "dark" ? "☀️ 라이트 모드" : "🌙 다크 모드";
    var btns = document.querySelectorAll(".jtd-theme-toggle");
    for (var i = 0; i < btns.length; i++) btns[i].textContent = label;
  }
  function expandAllNav() {
    var nav = document.getElementById("site-nav");
    if (!nav) return;
    var items = nav.querySelectorAll("li.nav-list-item");
    for (var i = 0; i < items.length; i++) items[i].classList.add("active");
    var exp = nav.querySelectorAll(".nav-list-expander");
    for (var j = 0; j < exp.length; j++)
      exp[j].setAttribute("aria-expanded", "true");
  }
  function init() {
    setTheme(localStorage.getItem("jtd-color-scheme") || "dark");

    var btns = document.querySelectorAll(".jtd-theme-toggle");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        setTheme(isDark() ? "light" : "dark");
      });
    }

    expandAllNav();
    setTimeout(expandAllNav, 100);

    var nav = document.getElementById("site-nav");
    if (nav) {
      nav.addEventListener("click", function () {
        setTimeout(expandAllNav, 0);
      });
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
