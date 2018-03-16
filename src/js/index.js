import { Person, adder, mult } from "./person";
import { playSound, showPicture, loginUser } from "./utilities";

//import jQuery from 'jQuery'; ** THIS IS BLACK MAGIC 
import { Howl, Howler } from 'howler';

$(document).ready(function ($) {
    loginUser();
    /*  startSim();
     logResults();
     signOff(); */
})


const startSim = function () {

    console.log('startSim')
}

const logResults = function () {
    alert('log results');
}

const signOff = function () {
    alert('signOff');
}


/* $(document).ready(function ($) {
    let person = new Person("Ram", "Kulkarni");
    let t = adder(1, 1).toString();
    $("#nameSpan").text(t);
    console.log(mult(5, 5));

    $("#soundTest").click(function () {
        playSound("sound.mp3")
    });

    $('#modalTest').click(function () {
        //showPicture("ECG", "normalECG.jpg");
        showPicture("ECG", "fastAFVoltageAndStrain.jpg")
    });



}) */