//------------------VARIABLES---------------------//
//text effect variables
const $heroTitle = $('#myName');
const $heroText = $('#myDescription');
const hero_Title_str = 'Hello, I am Jozef Jenkins';
const hero_Text_str = "I'm a web developer"
const speed = 100;
let i = 0;

//Hamburger Menu Variables
const $isActive = $('.isActive');


//Functions
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


jQuery(function() {
    splitStr($heroTitle, hero_Title_str);
    //splitStr($heroText, hero_Text_str);
    $heroText.hide();
    $heroText.fadeIn(4000);
})

$isActive.on('click', function(event){
    $isActive.children().addClass('__active');
    $('.__active').children('ul li a').addClass('__dropped');
})

$('.header, footer, .middle').on('click', function(event){
    $('.__active').children('ul li a').removeClass('__dropped');
    $isActive.children().removeClass('__active');
})