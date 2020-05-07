class Sound {
  sound;

  constructor(src) {
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');

    this.sound.style.display = 'none';

    document.body.appendChild(this.sound);
  }

  set loop(value) {
    this.sound.setAttribute('loop', value);
  }

  get loop() {
    return this.sound.getAttribute('loop');
  }

  play() {
    this.sound.pause();
    this.sound.currentTime = 0;
    this.sound.play();
  }

  pause() {
    this.sound.pause();
  }

  stop() {
    this.sound.pause();
  }
}
