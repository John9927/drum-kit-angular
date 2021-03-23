import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  audio: string | any;
  key: string | any;
  constructor() { }

  ngOnInit() {
    this.playing()
  }
  playing() {
    window.addEventListener('keydown', (e) => {
    this.audio = (document.querySelector(`audio[data-key="${e.keyCode}"]`));
    this.key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!this.audio) return;
    this.audio.currentTime = 0;
    this.audio.play();
    this.key.classList.add('playing');

    setTimeout(()=>{
      this.key.classList.remove('playing');
    },200);
    });
  }
}
