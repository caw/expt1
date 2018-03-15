function playSound(soundFile) {
    const sound = new Howl({
        src: [soundFile]
    });
    sound.play();
}

function showPicture(titleString, picFile) {
    console.log('showPicture');
    $("#exampleModal").find(".modal-title").text(titleString);
    const txt = `<img src=${picFile} class="img-fluid" alt="Responsive Image">`;
    const body = $("#exampleModal").find(".modal-body");
    console.log(txt);
    console.log(body);
    body.html(txt);
    $("#exampleModal").modal()
};

export { playSound, showPicture }