let btns = document.querySelectorAll(".btn");
let dis_para = document.querySelector(".dis-para");
let allClear = document.querySelector("#all-clear");
let btnOff = document.querySelector(".btn_OFF");
let modulo = document.querySelector("#modulo");

for (let btn of btns) {
  btn.disabled = true;
  btnOff.disabled = false;
  btnOff.addEventListener("dblclick", () => {
    btn.disabled = true;
    btnOff.classList.add("btn_OFF");
    btnOff.classList.remove("hide");
    btnOff.innerText = "OFF";
    btnOff.disabled = false;
  });
}

let enabledBtn = () => {
  for (let btn of btns) {
    btn.disabled = false;
    btnOff.classList.add("hide");
    btnOff.classList.remove("btn_OFF");
    btnOff.innerText = "ON";
    btnOff.disabled = false;
    dis_para.innerText = "";
  }
};

let Str = "";

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerText == "=") {
      Str = eval(Str);
      dis_para.innerText = Str;
    } else if (e.target.innerText == "D") {
      Str = Str.substring(0, Str.length - 1);
      dis_para.innerText = Str;
    } else {
      Str = Str + e.target.innerText;
      dis_para.innerText = Str;
    }
  });
});

allClear.addEventListener("click", () => {
  Str = "";
  dis_para.innerText = Str;
});

btnOff.addEventListener("click", enabledBtn);
