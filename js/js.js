document.addEventListener("DOMContentLoaded", function () {
  const menuSec = document.querySelector(".menu_sec");
  const rightArrow = document.querySelector(".right_arrow");
  const leftArrow = document.querySelector(".left_arrow");
  const border = document.querySelector(".border");
  const cards = document.querySelectorAll(".menu_sec .card");
  let currentIndex = 0;
  let cardWidth = cards[0].offsetWidth; // Lấy chiều rộng của mỗi card

  const updateBorderPosition = () => {
    const currentCard = cards[currentIndex];
    const leftPosition =
      currentCard.offsetLeft +
      currentCard.offsetWidth / 2 -
      border.offsetWidth / 2;
    border.style.left = `${leftPosition}px`;
  };

  const scrollToCard = (index) => {
    const currentCard = cards[index];
    currentCard.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    updateBorderPosition();
  };

  const calculateCardWidth = () => {
    cardWidth = cards[0].offsetWidth; // Cập nhật lại chiều rộng của card khi thay đổi kích thước màn hình
  };

  // Sự kiện khi thay đổi kích thước màn hình
  window.addEventListener("resize", calculateCardWidth);

  rightArrow.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      scrollToCard(currentIndex);
    }
  });

  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      scrollToCard(currentIndex);
    }
  });

  // Khởi tạo vị trí border ban đầu
  updateBorderPosition();
});

let videos = document.getElementsByTagName("video")[0];
let plays = document.getElementsByClassName("play")[0];
let pauses = document.getElementsByClassName("pause")[0];
let screens = document.getElementsByClassName("screen")[0];
// nhấn nút play để xem video
plays.addEventListener("click", () => {
  videos.play();
  plays.style.display = "none";
  screens.style.display = "none";
  pauses.style.display = "flex";
});
// nhấn nút pause để ngừng xem
pauses.addEventListener("click", () => {
  videos.pause();
  plays.style.display = "flex";
  screens.style.display = "flex";
  pauses.style.display = "none";
});
videos.addEventListener("ended", () => {
  plays.style.display = "flex";
  screens.style.display = "flex";
  pauses.style.display = "none";
});

const dataload = () => {
  const sec_title = document.getElementById("sec_title");
  const h6_dot = document.getElementsByTagName("h6");
  const campaign_img = document.getElementById("campaign_img");

  //dùng setTimeout để thay chuyển động in và chuyển động tự động
  setTimeout(() => {
    sec_title.innerHTML = " BARGAIN <br /> BUCKET MENU <br />  CAMPAIGN";
    campaign_img.src = "./img/kfc_main1.png";
    h6_dot[1].classList.add("header_dots_main");
    h6_dot[2].classList.remove("header_dots_main");
    h6_dot[3].classList.remove("header_dots_main");
    h6_dot[4].classList.remove("header_dots_main");
    h6_dot[5].classList.remove("header_dots_main");
  }, 0000);
  setTimeout(() => {
    // innerHTML thay đổi nội dung HTML bên trong phần tử sec_title
    sec_title.innerHTML = " BARGAIN <br /> Pizza MENU <br />  CAMPAIGN";
    campaign_img.src = "./img/snapedit_1720858506637.png";
    h6_dot[1].classList.remove("header_dots_main");
    h6_dot[2].classList.add("header_dots_main");
    h6_dot[3].classList.remove("header_dots_main");
    h6_dot[4].classList.remove("header_dots_main");
    h6_dot[5].classList.remove("header_dots_main");
  }, 3000);
  setTimeout(() => {
    sec_title.innerHTML = " BARGAIN <br /> BURGEAR MENU <br />  CAMPAIGN";
    campaign_img.src = "./img/kfc_main22.png";
    h6_dot[1].classList.remove("header_dots_main");
    h6_dot[2].classList.remove("header_dots_main");
    h6_dot[3].classList.add("header_dots_main");
    h6_dot[4].classList.remove("header_dots_main");
    h6_dot[5].classList.remove("header_dots_main");
  }, 6000);
  setTimeout(() => {
    sec_title.innerHTML = " BARGAIN <br /> Spaghetti MENU <br />  CAMPAIGN";
    campaign_img.src = "./img/kfc_main4.png";
    h6_dot[1].classList.remove("header_dots_main");
    h6_dot[2].classList.remove("header_dots_main");
    h6_dot[3].classList.remove("header_dots_main");
    h6_dot[4].classList.add("header_dots_main");
    h6_dot[5].classList.remove("header_dots_main");
  }, 9000);
  setTimeout(() => {
    sec_title.innerHTML = " BARGAIN <br /> FRIES MENU <br />  CAMPAIGN";
    campaign_img.src = "./img/kfc_main55.png";
    h6_dot[1].classList.remove("header_dots_main");
    h6_dot[2].classList.remove("header_dots_main");
    h6_dot[3].classList.remove("header_dots_main");
    h6_dot[4].classList.remove("header_dots_main");
    h6_dot[5].classList.add("header_dots_main");
  }, 12000);
};

setInterval(dataload, 15000);
dataload();

// trượt ra vào menu
const menu_icon = document.getElementById("menu_icon");
const nav_ul_list = document.getElementById("nav_ul_list");
menu_icon.addEventListener("click", () => {
  menu_icon.classList.toggle("humburger");
  nav_ul_list.classList.toggle("menu_ul_list_java");
});

// Lấy phần modal
var modal = document.getElementById("myModal");
// Lấy phần button mở modal
var btn = document.getElementById("openModalBtn");
// Lấy phần <span> đóng modal
var span = document.getElementsByClassName("close")[0];
// Khi người dùng click button, mở modal
btn.onclick = function () {
  modal.style.display = "block";
};
// Khi người dùng click vào <span> (x), đóng modal
span.onclick = function () {
  modal.style.display = "none";
};
// Khi người dùng click bất cứ đâu bên ngoài modal, đóng modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Trượt đăng ký dăng nhập
document.addEventListener("DOMContentLoaded", () => {
  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");
  const modalContent = document.querySelector(".modal-content");

  showRegister.addEventListener("click", (e) => {
    e.preventDefault();
    modalContent.classList.add("show-register");
  });

  showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    modalContent.classList.remove("show-register");
  });
});

// animation menu card
function animateCard(card) {
  card.classList.toggle("active");
}
