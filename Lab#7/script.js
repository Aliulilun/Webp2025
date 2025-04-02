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
  
  // 頁面載入時先加上 0~2 個亂數字元
  window.onload = () => {
    container.textContent = getRandomChars(0, 2);
    container.focus();
  };
  
  window.addEventListener("keyup", function(e) {
    console.log(e.key);
  
    const currentText = container.textContent;
    if (currentText.length > 0 && e.key === currentText[0]) {
      // 如果按的字是第一個，移除它
      container.textContent = currentText.slice(1);
    }
  
    add_new_chars();
  });
  
  function add_new_chars() {
    const newText = getRandomChars(1, 3); // 每次加入 1~3 個亂數字元
    container.textContent += newText;
  }
  