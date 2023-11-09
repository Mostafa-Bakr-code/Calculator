'usestrict';

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

const percentage = document.querySelector('.percentage');
const neg = document.querySelector('.neg');
const ac = document.querySelector('.ac');
const del = document.querySelector('.del');
const dot = document.querySelector('.dot');
const divide = document.querySelector('.divide');
const add = document.querySelector('.add');
const sub = document.querySelector('.sub');
const equal = document.querySelector('.equal');

const display = document.querySelector('.display');
const display_take_Num = document.querySelector('.take-num');
const display_Result = document.querySelector('.result');

const btn_Container = document.querySelector('.buttons-container');

// display

display_take_Num.textContent = '0';

// takeNum variables
let take_Num = [];
let hasdot = false;
let hasnum = false;

let all_Num = [];
let result;

let addition = false;
let substraction = false;
let mulitiplication = false;
let division = false;

const active_Button_Color = function () {
  if (addition === true) {
    add.classList.toggle('active-button');
  }
};

// takenum
btn_Container.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    display_Result.classList.add('hidden');
    display_take_Num.classList.remove('hidden');
    if (event.target.classList.contains('num')) {
      if (take_Num.length < 9) {
        take_Num.push(event.target.textContent);
        // hasnum to make sure a number doesnt start with a dot .34 for example because if it did any other dots wont be accepted
        hasnum = true;

        display_take_Num.textContent = take_Num.join('');
      }
    }

    if (event.target.classList.contains('dot')) {
      if (take_Num.length < 9) {
        if (hasdot === false && hasnum === true) {
          take_Num.push(event.target.textContent);

          hasdot = true;
          display_take_Num.textContent = take_Num.join('');
        }
      }
    }
  }
});

add.addEventListener('click', function () {
  addition = true;
  substraction = false;
  mulitiplication = false;
  division = false;
  active_Button_Color();
  //   push the firstnum to the allnum array
  all_Num.push(+take_Num.join(''));

  //   return all values to original state to start taking the second number
  take_Num = [];
  hasdot = false;
  hasnum = false;

  if (all_Num.length === 2) {
    result = all_Num[0] + all_Num[1];
    console.log(result);
    display_Result.textContent = result;
    display_Result.classList.remove('hidden');
    display_take_Num.classList.add('hidden');
    all_Num = [];
    all_Num.push(result);
    addition = false;
  }
});
