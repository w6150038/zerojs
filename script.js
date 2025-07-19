/* 載入 header.html 和 footer.html 開始 */
  document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;
      });

    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      });
  });
/* 載入 header.html 和 footer.html 結束 */

/* 控制 navbar 與 body 的 padding-top 程式開始 */
  function adjustBodyPadding() {
    const navbar = document.querySelector(".navbar");
    const navHeight = navbar.offsetHeight;
    document.body.style.paddingTop = navHeight + "px";
  }

  window.addEventListener("load", () => {
    setTimeout(adjustBodyPadding, 100);
  });
  window.addEventListener("resize", adjustBodyPadding);
/* 控制 navbar 與 body 的 padding-top 程式結束 */

/* <pre> 靠左對齊程式開始 */
document.querySelectorAll('pre code').forEach(block => {
  const lines = block.innerText.split('\n');

  // 找出最小縮排（忽略空行）
  const indent = lines
    .filter(line => line.trim()) // 排除空白行
    .reduce((min, line) => {
      const match = line.match(/^(\s*)/);
      const spaceCount = match ? match[1].length : 0;
      return Math.min(min, spaceCount);
    }, Infinity);

  // 把每行的縮排去掉
  const trimmed = lines.map(line => line.slice(indent)).join('\n');
  block.textContent = trimmed;
});
/* <pre> 靠左對齊程式結束 */