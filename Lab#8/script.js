function getRandomChars(min, max) {
  const length = Math.floor(Math.random() * (max - min + 1)) + min;
  let result = '';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += letters[Math.floor(Math.random() * letters.length)];
  }
  return result;
}

const container = document.getElementById('container');
let wrongCount = 0; // 新增：連續錯誤次數

// 頁面載入時先加上 0~2 個亂數字元
window.onload = () => {
  container.textContent = getRandomChars(0, 2);
  container.focus();
};

window.addEventListener("keyup", function(e) {
  console.log(e.key);

  const currentText = container.textContent;
  if (currentText.length > 0) {
      if (e.key === currentText[0]) {
          // 按對了：刪掉第一個字母
          container.textContent = currentText.slice(1);
          wrongCount = 0; // 打對了就重置錯誤次數
      } else {
          // 按錯了
          wrongCount++;
          if (wrongCount >= 3) {
              // 連錯三次，額外增加6個亂數字串
              for (let i = 0; i < 6; i++) {
                  container.textContent += getRandomChars(1, 3);
              }
              wrongCount = 0; // 加完後重置錯誤次數
          }
      }
  }

  add_new_chars(); // 不管對錯都加正常亂數
});

function add_new_chars() {
  const newText = getRandomChars(1, 3); // 每次加入 1~3 個亂數字元
  container.textContent += newText;
}
