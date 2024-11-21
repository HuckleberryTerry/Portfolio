const $heroTitle = $('#myName');
const $heroText = $('#myDescription');
const hero_Title_str = 'Hello, I am Jozef Jenkins';
const hero_Text_str = "I'm a web developer"
const speed = 100;
let i = 0;

const splitStr = (name, text)=>{
    let hero_arr = text.split('');
    setTimeout(function() {
        if (i < hero_arr.length){
            setTimeout(splitStr(name, text), speed);
            name.append(hero_arr[i]);
            i++;
        }
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
    // splitStr($heroText, hero_Text_str);
    $heroText.hide();
    $heroText.fadeIn(3000);
})