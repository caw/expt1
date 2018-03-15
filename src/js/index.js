import { Person, adder, mult } from "./person";
import { playSound } from "./utilities";

//import jQuery from 'jQuery'; ** THIS IS BLACK MAGIC 
import { Howl, Howler } from 'howler';



$(document).ready(function ($) {
    let person = new Person("Ram", "Kulkarni");
    let t = adder(1, 1).toString();
    $("#nameSpan").text(t);
    console.log(mult(5, 5));

    $("#soundTest").click(function () {
        playSound("sound.mp3")
    });

    $('#modalTest').click(function () {
        // dynamically changing the title
        $("#exampleModal").find('.modal-title').text('Foo and Bar');
        // and change the body to this picture
        const txt = `<img src="horseshoe.jpg" class="img-fluid" alt="Responsive image">`
        console.log(txt);
        const body = $("#exampleModal").find('.modal-body');
        console.log(body);
        body.html(txt);
        $("#exampleModal").modal();
    });

})