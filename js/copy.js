$(function () {
  //   if (window.innerWidth <= 768) {
  let slickInterval = setInterval(() => {
    if (typeof jQuery(".trending-homepage-section .carousel-wrapper").slick === "function") {
      clearInterval(slickInterval)
      console.log(`.carousel-wrapper`)

      setTimeout(() => {
        let slider = $(".trending-homepage-section .carousel-wrapper").slick({
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: false,
          infinite: false,
          centerMode: true,
          //                     variableWidth: false,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                centerMode: true,
                adaptiveHeight: true,
                slidesToScroll: 1,
              },
            },
          ],
        })
      }, 20)
    }
  }, 10)
  //   }
})

//
// (*) Задача на рекурсию
// Здесь мы с вами рассмотрим одну из классических задач на рекурсию, которую дают на собеседованиях. Звучит она очень просто:
// Напишите функцию, которая вычисляет факториал.
// Задание простое, но нужно понимать что такое факториал вообще. Факториал  – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Отсюда мы можем понять, что функция должна принимать 1 аргумент, который будет являться числом. Будет неплохо, если вы на собеседовании сразу напишите проверку на приходящее значение :) Поэтому, если в нашу функцию приходит дробное число или не число  - возвращается строка с любым сообщением на ваше усмотрение. Если 0 и меньше - возвращается число 1.
// Сам же факториал с примерами выглядит вот так:

// n! = n * (n - 1) * (n - 2) * ...*1 - это общая формула

// Примеры значений для разных n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// То есть, вызов нашей функции factorial(5) возвращает число 120

// factorial(4) => 24

function factorial(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    return "Ошибка, проверьте данные"
  }
  if (n >= 1) {
    return n * factorial(n - 1)
  } else {
    return 1
  }
}

fuctorial(5)
//
// Место для первой задачи
function sayHello(name) {
  return `Привет, ${name}!`
}

// Место для второй задачи
function returnNeighboringNumbers(i) {
  return [i - 1, i, i + 1]
}

// Место для третьей задачи
function getMathResult(o, a) {
  if (typeof a !== "number" || a <= 0) {
    return
  }
  let str = ""

  for (let i = 1; i <= o; i++) {
    if (i === o) {
      str += `${a * i}`
    } else {
      str += `${a * i}---`
    }
  }

  return str
}
