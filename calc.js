function insert(num) {
  document.form.textview.value = document.form.textview.value + num
}

function equal() {
  let exp = document.form.textview.value;
 
  if(exp){
    document.form.textview.value = eval(exp)
  }
}


function clean() {
  document.form.textview.value = "";
}

function back() {
  let exp = document.form.textview.value;
  
  document.form.textview.value = exp.substring(0, exp.length-1);
}

function squarefunc() {
  let docexp = document.form.textview.value;
  
  if(docexp) {
    document.form.textview.value = Math.sqrt(docexp);
  }
}