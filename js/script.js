const refs = {
  volumToggle: document.querySelector(".main-player--volum-off"),
  volumIcon: document.querySelector(".main-player__volume"),
  video: document.querySelector(".main-player__video"),
  modalWrapper: document.querySelector(".modal-wr"),
  modalCross: document.querySelector(".modal-close"),
  main: document.querySelector(".main"),
  stat: document.querySelectorAll(".num"),
}

refs.volumToggle.addEventListener("click", volumOn);

function volumOn() {
  refs.volumIcon.classList.add("disable");
  refs.volumToggle.classList.remove("main-player--volum-off");
  refs.video.muted = false;
};

refs.modalWrapper.addEventListener("click", closeModal);
refs.modalCross.addEventListener("click", closeModal);

function closeModal(e) {
  if (e.target === e.currentTarget) {
    refs.modalWrapper.classList.add("disable");
    refs.modalWrapper.classList.add("disable-animation");
  }
}

refs.main.addEventListener("mouseout", openModal);

function openModal(e) {
  if (e.relatedTarget === null) {
    refs.modalWrapper.classList.remove("disable");
    setTimeout(openModalAnimation, 500);

    function openModalAnimation() {
      refs.modalWrapper.classList.remove("disable-animation")
    }
  }
}

// change stats
let watcher = 124;
let plase = 20;
const plaseAlwaseOpen = 5;
const maxWatcher = 160;

function timer() {
  if (plase >= plaseAlwaseOpen) {
    refs.stat[1].innerHTML = plase;
    plase--;
  }
  if (watcher <= maxWatcher) {
    refs.stat[0].innerHTML = watcher;
    watcher++;
  }
  setTimeout(timer, 10000)
}

timer();