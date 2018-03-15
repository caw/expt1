function playSound(soundFile) {
    const sound = new Howl({
        src: [soundFile]
    });
    sound.play();
}

function showPicture(picFile) {

}

export { playSound }