window.onload = function () {
  //AOS
  AOS.init({
    // once:true
  });
  // typing 효과
  const content = "안녕하세요:) \n  서비스 기획자  \n 강동휘 입니다.";
  const text = document.querySelector(".text");
  let i = 0;

  function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i > content.length) {
      text.textContent = "";
      i = 0;
    }
  }
  setInterval(typing, 150);
  // 위로가기
  let gotop = $("#top");
  gotop.click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      160
    );
  });

  // chart.js
  const ctx = document.getElementById("chart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "#소통능력",
        "#창의성",
        "#도전정신",
        "#열정과 적극정",
        "#실무역량",
      ],
      datasets: [
        {
          label: "possibility",
          data: [90, 95, 90, 80, 80],
          backgroundColor: ["rgba(0, 0, 0, 0.3)"],
          borderColor: ["rgba(0, 0, 0, 1)"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          beginAtZero: true,
        },
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 100,
        stepSize: 5,
        maxTicksLimit: 10,
        display: false,
      },
    },
  });
};

// progress Bar
$(document).ready(function () {
  let bar1 = new ProgressBar.Circle(circle1, {
    strokeWidth: 6,
    easing: "easeInOut",
    duration: 1400,
    color: "#e44d26",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: null,
  });
  let bar2 = new ProgressBar.Circle(circle2, {
    strokeWidth: 6,
    easing: "easeInOut",
    duration: 1400,
    color: "#1f62ae",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: null,
  });
  let bar3 = new ProgressBar.Circle(circle3, {
    strokeWidth: 6,
    easing: "easeInOut",
    duration: 1400,
    color: "#f0db4f",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: null,
  });
  let bar4 = new ProgressBar.Circle(circle4, {
    strokeWidth: 6,
    easing: "easeInOut",
    duration: 1400,
    color: "#d04424",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: null,
  });
  let bar5 = new ProgressBar.Circle(circle5, {
    strokeWidth: 6,
    easing: "easeInOut",
    duration: 1400,
    color: "#207245",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: null,
  });
  let bar6 = new ProgressBar.Circle(circle6, {
    strokeWidth: 6,
    easing: "easeInOut",
    duration: 1400,
    color: "#f24e1e",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: null,
  });
  let bar7 = new ProgressBar.Circle(circle7, {
    strokeWidth: 6,
    easing: "easeInOut",
    duration: 1400,
    color: "#ac50c3",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: null,
  });
  let bar8 = new ProgressBar.Circle(circle8, {
    strokeWidth: 6,
    easing: "easeInOut",
    duration: 1400,
    color: "#4fc7ec",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: null,
  });
  let bar9 = new ProgressBar.Circle(circle9, {
    strokeWidth: 6,
    easing: "easeInOut",
    duration: 1400,
    color: "#f57c2c",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: null,
  });
  let bar10 = new ProgressBar.Circle(circle10, {
    strokeWidth: 6,
    easing: "easeInOut",
    duration: 1400,
    color: "#2b2b2b",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: null,
  });

  bar1.animate(0.9); // Number from 0.0 to 1.0
  bar2.animate(0.85); // Number from 0.0 to 1.0
  bar3.animate(0.8); // Number from 0.0 to 1.0
  bar4.animate(0.7); // Number from 0.0 to 1.0
  bar5.animate(0.7); // Number from 0.0 to 1.0
  bar6.animate(0.8); // Number from 0.0 to 1.0
  bar7.animate(0.6); // Number from 0.0 to 1.0
  bar8.animate(0.9); // Number from 0.0 to 1.0
  bar9.animate(0.7); // Number from 0.0 to 1.0
  bar10.animate(0.5); // Number from 0.0 to 1.0

  // swiper
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // 메뉴클릭 이동
  let gnb_a = $(".gnb a");

  $(gnb_a).click(function (event) {
    event.preventDefault();
    let hash = $(this).attr("href");
    let pos = $(hash).offset().top - 50;
    $("html, body").animate(
      {
        scrollTop: pos,
      },
      1000
    );
  });
});
