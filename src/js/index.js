import { Person, adder, mult } from "./person";

import jQuery from 'jQuery';
import { Howl, Howler } from 'howler';



jQuery(document).ready(function ($) {
    const sound = new Howl({
        src: ['sound.mp3']
    });
    let person = new Person("Ram", "Kulkarni");
    let t = adder(1, 1).toString();
    $("#nameSpan").text(t);
    console.log(mult(5, 5));

    $("#soundTest").click(function () {
        sound.play();
    });
})