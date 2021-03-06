let userID = 0;

function playSound(soundFile) {
    const sound = new Howl({
        src: [soundFile]
    });
    sound.play();
}

function showPicture(titleString, picFile) {
    console.log('showPicture', picFile);
    $("#imgDisplayModal").find(".modal-title").text(titleString);
    const txt = `<img src=${picFile} class="img-fluid" alt="Responsive Image">`;
    const body = $("#imgDisplayModal").find(".modal-body");
    body.html(txt);
    $("#imgDisplayModal").modal()
};

function loginUser() {
    $("#target").submit(function (event) {
        userID = $("#userID").val();
        $("#userLoginModal").modal('hide');
        console.log(userID);
    });
    $("#userLoginModal").modal();
    return 1;
};

function loadSim(simNumber) {
    console.log(simNumber);
};

export { playSound, showPicture, loginUser, loadSim }