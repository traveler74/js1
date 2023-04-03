let fromnumber = document.getElementById('input1')
let tonumber   = document.getElementById('input2')
let but1       = document.getElementById('but1')
let presult    = document.getElementById('presult')
let result     = document.getElementById('result-container')
let reset      = document.getElementById('reset')

let text       = ' '
let random     =  0

function randomnumberfunc() {
  let first  = fromnumber.value
  let second = tonumber.value
  if (!first.trim() && !second.trim()) {                      // проверка на пустую строку (или с пробелами)
    text = 'Введите ОБА числа!';                              // вывод ошибки
    presult.innerHTML    = text;
    result.style.opacity = '100%'                             // возврат видимости для вывода ошибки
  }
    else if (isNaN(first)) {                                  // проверка содержания первой строки на число
      text = 'Проверьте первое число!'                        // вывод ошибки
      presult.innerHTML    = text;
      result.style.opacity = '100%'
    }
      else if (isNaN(second)) {                               // проверка содержания второй строки на число
        text = 'Проверьте второе число!';
        presult.innerHTML    = text;                          // вывод ошибки
        result.style.opacity = '100%'
      }
        else if (Number (first) > Number (second)) {          // проверка порядка возрастания чисел
          text = 'Второе число должно быть больше первого!';
          presult.innerHTML    = text;                        // вывод ошибки
          result.style.opacity = '100%'
        }
          else if (Number (first) === Number (second)) {      // проверка на одинаковые числа
            text = 'Введите разные числа!';                   // вывод ошибки
            presult.innerHTML    = text;
            result.style.opacity = '100%'
          }
    // получить псевдослучайное число от (min-0.5) до (max+0.5) при правильном вводе чисел и округлить его
            else {
              random = Math.round (Number(first) - 0.5 + Math.random() * (Number(second) - Number(first) + 1));
              presult.innerHTML    = 'Ваше случайное число: ' + random;
              result.style.opacity = '100%'
            }
}

function resetfunc() {
  result.style.opacity = '0';
  fromnumber.value     =  '';
  tonumber.value       =  ''
}

but1.onclick  = randomnumberfunc
reset.onclick = resetfunc

