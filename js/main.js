//------------------VARIABLES---------------------//
//text effect variables
const $heroTitle = $('#myName');
const $heroText = $('#myDescription');
const $heroBtmText = $('.hero-bottom-text');
const hero_Title_str = 'Hello, I am Jozef Jenkins';
const hero_Text_str = "I'm a web developer"
const speed = 50;
let i = 0;

//Hamburger Menu Variables
const $isActive = $('.isActive');

//Form Variables
const $form_fName = $('#fname');
const $form_lName = $('#lname');
const $form_email = $('#email');
const $form_subject = $('#subject');
const $form_message = $('#message');
const $form_btn = $('.btn-submit');
//The Regex is from a website: https://www.abstractapi.com/guides/email-validation/email-address-pattern-validation
//Once I have got to the RegEx part of the course I will break down what each part means.
const isValidEmail = ()=>  /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/.test($form_email.val());

//------------------FUNCTIONS---------------------//
/** Type-Writer Effect using arrays
* Splits a string into an array and appends each character to a specified class or id.
*
* @param {jQuery selector} name - the class or id of an element
*
* @param {string} text - The string that you want to appear in the element
*
* @example
*
* splitStr($(#myName), 'Jozef Jenkins'); //appends the string to the specified class or id, letter by letter.
*/
const splitStr = (name, text)=>{
    let hero_arr = text.split('');
    setTimeout(function() {
        if (i < hero_arr.length){
            setTimeout(splitStr(name, text), speed);
            name.append(hero_arr[i]);
            i++;
        }
        return name;
    }, speed); 
}

//This example is from w3Schools and as such I would like to create my own.
//!!Update!! - I have created my own function that uses arrays instead of char selection.
// function typeWriter() {
//     if (i < hero_Text_str.length) {
//         document.getElementById("myName").innerHTML += hero_Text_str.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
//   }


//------------------EVENTS & HANDLERS---------------------//
$isActive.on('click', function(event){
    $isActive.children().addClass('__active');
    $('.__active').children('ul li a').addClass('__dropped');
})

$('.header, footer, .middle').on('click', function(event){
    $('.__active').children('ul li a').removeClass('__dropped');
    $isActive.children().removeClass('__active');
})

//------------------TEXT EFFECT---------------------//
splitStr($heroTitle, hero_Title_str);

$heroText.hide();
$heroBtmText.hide();

setTimeout(function(){
    $heroText.fadeIn(3000);
    $heroBtmText.fadeIn(3000);
}, 3000);

//------------------FORM VALIDATION---------------------//
// element selection test
// $form_btn.hide();
// $form_email.hide();
// $form_fName.hide();
// $form_lName.hide();
// $form_message.hide();
// $form_subject.hide();
$form_btn.on('click', function(){
    if(!isValidEmail()){
        alert('Not Valid');
    }
    else{
        alert('valid');
    }
})
