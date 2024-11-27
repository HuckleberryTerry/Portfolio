//------------------VARIABLES---------------------//
//text effect variables
const $heroTitle = $('#myName');
const $heroText = $('#myDescription');
const $heroBtmText = $('.hero-bottom-text');
const hero_Title_str = 'Hello, I am Jozef Jenkins';
const hero_Text_str = "I'm a web developer"
const speed = 50;
let spliterator = 0;

//Hamburger Menu Variables
const $isActive = $('.isActive');

//Form Variables
const $form_fName = $('#fname');
const $form_lName = $('#lname');
const $form_country = $('#country');
const $form_TelNo = $('#telNo');
const $form_email = $('#email');
const $form_subject = $('#subject');
const $form_message = $('#message');
const $form_btn = $('.btn-submit');

//Carousel Variables
const $carousel_Projects = $('.container-interests-headers');

//The Regex is from a website: https://www.abstractapi.com/guides/email-validation/email-address-pattern-validation
//Once I have got to the RegEx part of the course I will break down what each part means.
const isValidEmail = ()=>  isValidTelNo = ()=> /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/.test($form_TelNo.val());
let isValidTelNo;
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
        if (spliterator < hero_arr.length){
            setTimeout(splitStr(name, text), speed);
            name.append(hero_arr[spliterator]);
            spliterator++;
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
}, 3000);

//------------------FORM VALIDATION---------------------//
// element selection test
// $form_btn.hide();
// $form_email.hide();
// $form_fName.hide();
// $form_lName.hide();
// $form_message.hide();
// $form_subject.hide();
let $form_country_options = $form_country.children();
$form_country.on('click', function(){
    //console.log($form_county_options);
    //for(let i=0; i<$form_country_options.length; i++){
        $form_country.children().removeClass('active');
        if($form_country.val() === 'UK'){
            $form_TelNo.attr('placeholder', '+44 1234 567890');
            $form_country.children('option#UK').addClass('active');
            console.log($form_country.children('.active').val());
        }
        else if($form_country.val() === 'US'){
            $form_TelNo.attr('placeholder', '(123) 123-1234');
            console.log(isValidTelNo());
            $form_country.children('option#US').addClass('active');
            console.log($form_country.children('.active').val());
        }
        else if($form_country.val() === 'IT'){
            $form_TelNo.attr('placeholder', '+39 123 4567891');
            $form_country.children('option#IT').addClass('active');
            console.log($form_country.children('.active').val());
        }
        else{
            return undefined;
        }
    //}
});

$form_btn.on('click', function(event){
    if(!isValidEmail() || !isValidTelNo()){
        alert('Not Valid');
        event.preventDefault();
    }
    else{
        alert('valid');
    }
})

//------------------INTERESTS CAROUSEL---------------------//
$(document).ready(function(){
    $('.container-interests-headers').slick({
        arrows:             false,
        dots:               true,
        slidesToShow:       3,
        
    });
});