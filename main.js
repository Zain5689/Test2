let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let click = document.querySelector("#click");

let p = document.querySelector("#demo");

click.onclick = function () {
  let div = btn1.innerHTML;
  //   console.log(div);
  p.innerHTML = div;
  document.body.appendChild(p);
};
