'use strict';

$(function() {

var obj = [
    {name: 'Тест по программированию'},
    {
     ask: '1. Вопрос №1',
     answer: ['Неправильный вариант ответа', 'Неправильный вариант ответа', 'Правильный вариант ответа'],
     trueAnswer: 2
   },
   {
     ask: '2. Вопрос №2',
     answer: ['Правильный вариант ответа', 'Неправильный вариант ответа', 'Неправильный вариант ответа'],
     trueAnswer: 0
   },
   {
     ask: '3. Вопрос №3',
     answer: ['Неправильный вариант ответа', 'Правильный вариант ответа', 'Неправильный вариант ответа'],
     trueAnswer: 1
   },
  {button: 'Проверить мои результаты'}
];

localStorage.setItem('question', JSON.stringify(obj));

var template = $('#form').html();
var content = tmpl(template, objWrapper);
$('form').append(content);

$('body').prepend('<div class="modalWindow"></div>');
$('body').prepend('<div class="wrapper"> </div>');
$('.modalWindow').append('<p class="result"></p>');
$('.modalWindow').append('<p class="closed">закрыть</p>');

$('.closed').click(function() {
  $('.wrapper').css('display', 'none');
  $('.modalWindow').css('display', 'none');
  $('.result').css('display', 'none');
  $('.closed').css('display', 'none');
});

});

var test = localStorage.getItem('question');
var question = JSON.parse(test);
var objWrapper = {data: question};
var result = true;

function checkIt(number, j) {
  var theGroup = document.questions[number];
  for (var i = 0; i < questions.length; i++) {
    if (theGroup[i].checked) {
      if(i !== objWrapper.data[j].trueAnswer){
        result = false;
      }
      theGroup[i].checked = false;
      break;
    }
  }
};

function modalWindow(result) {
  $('.wrapper').css('display', 'block');
  $('.modalWindow').css('display', 'block');
  $('.result').css('display', 'block');
  if(result == true) {
    $('.result').text('Тест пройден успешно!');
  } else {
    $('.result').text('Тест не пройден!');
  }
  $('.closed').css('display', 'block');
}

function numberQuestion() {
  result = true;
  var number = '';
  for(var j = 1; j < objWrapper.data.length-1; j++) {
    number = 'question' + j;
    checkIt(number, j);
  }
  modalWindow(result);
}

$('.closed').click(function() {
  $('.wrapper').css('display', 'none');
  $('.modalWindow').css('display', 'none');
  $('.result').css('display', 'none');
  $('.closed').css('display', 'none');
});
