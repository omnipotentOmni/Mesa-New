//---------------------------------- DELETE ME -------------------------------//
let doc = document.documentElement;

function changeTheme(el) {
  let theme = el.dataset.value;
  doc.classList = theme;
}

let fs = require('fs');
function changePage(el) {
  let page = el.dataset.value;
  console.log(page);
  let pageData = fs.readFileSync(page,'utf-8');
  console.log(pageData);
}
//---------------------------------- DELETE ME -------------------------------//