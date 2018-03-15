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
    console.log(txt);
    console.log(body);
    body.html(txt);
    $("#imgDisplayModal").modal()
};

export { playSound, showPicture }