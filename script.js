const btn = document.querySelector(".btn");

let ripple;

if (btn) {
  btn.addEventListener("mouseenter", (e) => {
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.target.getBoundingClientRect());
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;

    ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    btn.prepend(ripple);
  });

  btn.addEventListener("mouseleave", (e) => {
    btn.removeChild(ripple);
  });
}
