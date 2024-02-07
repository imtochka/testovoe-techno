let wrapperFixed = document.querySelector(".buy-panel-wrapper");

document.querySelector(".read-less-btn").addEventListener("click", (event) => {
  let button = document.getElementById("text-btn");

  console.log(button.innerHTML);
  if (button.innerHTML == "Read less") {
    document.getElementById("hidden-lines").classList.add("three-lines-hidden");
    document.getElementById("text-btn").innerText = "Read more";
  } else {
    document
      .getElementById("hidden-lines")
      .classList.remove("three-lines-hidden");
    document.getElementById("text-btn").innerText = "Read less";
  }
}); //// скрывает открываем футер на 3 строки.

document.querySelector("buy-panel");
let score = 0;

document.getElementById("cross").addEventListener("click", () => {
  if (score == 0) {
    score = 1;

    wrapperFixed.animate([{}, { left: "-1100px" }], {
      duration: 800,
      iterations: 1,
      easing: "cubic-bezier(0.9, 0, 0.2, 1)", // начинается медленно, под конец ускоряется
    }).onfinish = function () {
      (wrapperFixed.style.display = "none"), (score = 0);
      wrapperFixed.style.left = "0";
    };
  }
}); // Уход фиксед блока анимация.

document.querySelector(".btn-buy").addEventListener("click", () => {
  if (score == 0) {
    score = 1;
    wrapperFixed.style.left = "1100px";

    wrapperFixed.animate([{}, { left: "50%" }], {
      duration: 800,
      iterations: 1,
      easing: "cubic-bezier(0.8,0,.10,1)", // начинается быстро ,под конец замедляется
    }).onfinish = function () {
      (wrapperFixed.style.display = "block"), (score = 0);
      wrapperFixed.style.left = "50%";
    };
  }

  wrapperFixed.style.display = "block";
});

////// Таймер
function countdown() {
  let targetDate = new Date();
  targetDate.setHours(24, 0, 0); // Устанавливаем часы, минуты и секунды

  let countdownTimer = setInterval(function () {
    let distance = targetDate.getTime() - Date.now();

    let timeRemaining = new Date(distance);

    // Форматируем оставшееся время в виде "HH:mm:ss"
    let formattedTime = timeRemaining.toISOString().substr(11, 8);

    // Обновляем содержимое блока с обратным отсчетом
    document.getElementById("timer").textContent = formattedTime;

    if (distance < 0) {
      targetDate.setHours(24, 0, 0);
    }
  }, 1000); // Обновление каждую секунду
}

countdown(); // Запуск обратного отсчета

//// Слайдер

let sliderArray = [
  "img/slider-1.png",
  "img/slider-2.png",
  "img/slider-3.png",
  "img/slider-4.png",
];
sliderArray.unshift(sliderArray.pop());
function addImagesToSlider() {
  let slider = document.querySelector(".slider"); // Находим слайдер по классу

  for (let i = 0; i < 3; i++) {
    let image = document.createElement("img"); // Создаем элемент img

    let slideIndex = i; // Вычисляем индекс изображения в массиве

    image.src = sliderArray[slideIndex]; // Устанавливаем src из массива ссылок

    let slideClass = `slide${i}`;
    image.classList.add(slideClass); // Добавляем класс для соответствующего слайда

    slider.appendChild(image); // Добавляем изображение в слайдер
  }
}
addImagesToSlider();

let touchStartX;
let touchEndX;
let clientWidth;

document.querySelector(".slider").addEventListener(
  "touchstart",
  (e) => {
    clientWidth = e.currentTarget.clientWidth;
    console.log(clientWidth);
    touchStartX = e.touches[0].clientX;
  },
  { passive: true }
);

document.querySelector(".slider").addEventListener(
  "touchend",
  (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe(clientWidth);
  },
  { passive: true }
);
let i = 0;
function handleSwipe(clientWidth) {
  let swipeDistance = touchEndX - touchStartX;

  console.log(swipeDistance);
  if (swipeDistance < 0 && i == 0) {
    i = 1;
    document
      .querySelector(".slide1")
      .animate([{ transform: "translateX(-" + clientWidth + "px)" }], {
        duration: 500,
        iterations: 1,
        easing: "cubic-bezier(0.8,0,.10,1)", // начинается быстро ,под конец замедляется
      }).onfinish = function () {
      let firstSlide = sliderArray.shift();
      sliderArray.push(firstSlide);
      console.log(document.querySelector(".slide1"));
      i = 0;
      lineScore = lineScore + baseLineScore;
      if (lineScore == 100) {
        lineScore -= 100;
      }
    };
    /////СВАЙП ЦЕНТРАЛЬНОГО ВЛЕВо
    ///////////////////
    /////СВАЙП ПРАВОГО ВЛЕВО
    document
      .querySelector(".slide2")
      .animate([{ transform: "translateX(-" + clientWidth + "px)" }], {
        duration: 500,
        iterations: 1,
        easing: "cubic-bezier(0.8,0,.10,1)", // начинается быстро ,под конец замедляется
      }).onfinish = function () {
      let firstSlide = sliderArray.shift();
      sliderArray.push(firstSlide);

      console.log(document.querySelector(".slide1"));

      let firstElement = sliderArray.shift(); // Удаляем и сохраняем первый элемент массива
      sliderArray.push(firstElement); // Добавляем сохраненный первый элемент в конец массива
      console.log(sliderArray); // Выводим измененный массив
    }.onfinish = function () {
      rebuild();
    };
  } else if (swipeDistance > 0 && i == 0) {
    i = 1;
    document
      .querySelector(".slide1")
      .animate([{ transform: "translateX(" + clientWidth + "px)" }], {
        duration: 500,
        iterations: 1,
        easing: "cubic-bezier(0.8,0,.10,1)", // начинается быстро ,под конец замедляется
      }).onfinish = function () {
      console.log(document.querySelector(".slide1"));
      i = 0;
      lineScore -= baseLineScore;
      if (lineScore < 0) {
        lineScore = 100 - baseLineScore;
      }
    };
    /////Свайп центрального вправо
    ///////////////////
    /////Cвайп левого вправо
    document
      .querySelector(".slide0")
      .animate([{ transform: "translateX(" + clientWidth + "px)" }], {
        duration: 500,
        iterations: 1,
        easing: "cubic-bezier(0.8,0,.10,1)", // начинается быстро ,под конец замедляется
      }).onfinish = function () {
      let lastSlide = sliderArray.pop();
      sliderArray.unshift(lastSlide);

      rebuild();
      console.log(sliderArray);
    };
  }
}

function rebuild() {
  document.querySelector(".slide0").src = sliderArray[0];
  document.querySelector(".slide1").src = sliderArray[1];
  document.querySelector(".slide2").src = sliderArray[2];

  line.style.left = lineScore + "%";

  console.log(lineScore);
}
///////////// Серая линия под слайдером
let line = document.querySelector(".line-swipe-btn");
let arraySize = sliderArray.length;
let baseLineScore = 100 / arraySize;
let lineScore = 0;
line.style.width = baseLineScore + "%";

//////////// Скролл до футера, чтоб не создавать ссылку <a>
const footer = document.querySelector("#my-footer");
const scrollToFooter = document.querySelector("#scroll-to-footer");

document
  .querySelector(".header-star-score")
  .addEventListener("click", function () {
    footer.scrollIntoView({ behavior: "smooth" });
  });

//////////// закрываю бургер
document.getElementById("burger-cross").onclick = function () {
  document.querySelector(".burger-block").style.display = "none";
};

document.querySelector(".header-top-svg").onclick = function () {
  document.querySelector(".burger-block").style.display = "block";
};

document.querySelector(".shipping-heading").onclick = function () {
  let dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
  document.querySelector(".arrow-shipping").classList.toggle("rotate");
};
