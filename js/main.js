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
let $form_email = $('#email');
const $form_subject = $('#subject');
const $form_message = $('#message');
const $form_btn = $('.btn-submit');

//Carousel Variables
const $carousel_Projects = $('.container-interests-headers');

//The Regex is from a website: https://www.abstractapi.com/guides/email-validation/email-address-pattern-validation
//Once I have got to the RegEx part of the course I will break down what each part means.
const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const isValidTelNo = /((?:|00)[17](?: |-)?|(?:|00)[1-9]\d{0,2}(?: |-)?|(?:|00)1-\d{3}(?: |-)?)?(0\d|([0-9]{3})|[1-9]{0,3})(?:((?: |-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |-)[0-9]{3}(?: |-)[0-9]{4})|([0-9]{7}))/;
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
            $form_TelNo.attr('placeholder', '');
            $form_country.children('option#UK').addClass('active');
            console.log($form_country.children('.active').val());
        }
        else if($form_country.val() === 'IT'){
            $form_TelNo.attr('placeholder', '');
            $form_country.children('option#IT').addClass('active');
            console.log($form_country.children('.active').val());
        }
        else{
            return undefined;
        }
    //}
});

$form_btn.on('click', function(event){
    let $error = $('.invalid');
    let emailTest = isValidEmail.test($form_email.val());
    let telNoTest = isValidTelNo.test($form_TelNo.val());
    if(!(emailTest) || !(telNoTest)){
        $('.invalid').css({
            'display': 'flex'
        });
        if(!(emailTest)){
            $form_email.css({
                "border": "1px solid red"
            });
            if($('#error-email').length < 1){
                $error.append('<span id="error-email" class="fa-solid fa-triangle-exclamation"><p>Error: Invalid Email Address</p></span>');
            }
            else{
                console.log('error already exists');
            }
        }
        else{
            $form_email.css({
                "border": "1px solid black"
            });
            $('.error-email').remove();
        }
        if(!(telNoTest)){
            $form_TelNo.css({
                "border": "1px solid red"
            });
            if($('#error-telNo').length < 1){
                $error.append('<span id="error-telNo" class="fa-solid fa-triangle-exclamation"><p>Error: Invalid Telephone Number</p></span>');
            }
            else{
                console.log('TelNo Error already exists');
            }
        }
        else{
            $form_TelNo.css({
                "border": "1px solid black"
            });
            $('.error-telNo').remove();
        }
        //alert('Not Valid');
        event.preventDefault();
    }
    else{
        return true;
    }
})

//------------------INTERESTS CAROUSEL---------------------//
$(document).ready(function(){
    $('.container-interests-headers').slick({
        arrows:             false,
        dots:               true,
        autoplay:           true,
        draggable:          false,
    });
});

//------------------INTERESTS MODAL---------------------//
const $interests_dnd = $('.interests-dnd');
const $interests_modal_dnd = $('#modal-dnd');
const $interests_programming = $('.interests-programming');
const $interests_modal_programming = $('#modal-programming');
const $interests_gaming = $('.interests-gaming');
const $interests_modal_gaming= $('#modal-gaming');
const $interests_reading = $('.interests-reading');
const $interests_modal_reading= $('#modal-reading');
const $modal_close = $('.modal-close');

$interests_dnd.on('click', function(){
    $interests_modal_dnd.css('display', 'flex');
})
$interests_programming.on('click', function(){
    $interests_modal_programming.css('display', 'flex');
})
$interests_gaming.on('click', function(){
    $interests_modal_gaming.css('display', 'flex');
})
$interests_reading.on('click', function(){
    $interests_modal_reading.css('display', 'flex');
})
$modal_close.on('click', function(){
    $interests_modal_dnd.css('display', 'none');
    $interests_modal_programming.css('display', 'none');
    $interests_modal_gaming.css('display', 'none');
    $interests_modal_reading.css('display', 'none');
})

