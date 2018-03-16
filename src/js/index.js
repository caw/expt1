import { Person, adder, mult } from "./person";
import { playSound, showPicture, loginUser, loadSim } from "./utilities";
import { normalSim, postOpConfusion } from "./simData"

import { Howl, Howler } from 'howler';

$(document).ready(function ($) {
    // login the user and load the correct sim
    let simNumber = loginUser();
    $("#userLoginModal").on('hidden.bs.modal', function (e) {
        if (simNumber > 0) {
            loadSim(simNumber)
            startSim();
            logResults();
            signOff();
        } else {
            console.log('not recognised');
        }
    });
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