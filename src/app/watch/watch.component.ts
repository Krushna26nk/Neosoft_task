import { Component } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent {

  mili: any = '0' + 0;
  min : any = '0' + 0;
  seconds: any = '0' + 0;

  isStart = false;
  interval : any;

  constructor(){}

  OnStartStopwatch(){
    if(!this.isStart){
      this.isStart = true;

    this.interval = setInterval(() => {
        this.mili++;
        this.mili = this.mili < 10 ? '0'+this.mili : this.mili

        if(this.mili === 100){
          this.seconds++;
          this.seconds = this.seconds < 10 ? '0'+this.seconds : this.seconds
          this.mili = '0'+ 0;
        }
        if(this.seconds === 60){
          this.min++;
          this.min = this.min < 10 ? '0'+this.min : this.min
          this.seconds = '0'+ 0;
        }

      },10)
    }else{
      this.OnStopStopwatch();
    }
  }

  OnStopStopwatch(){
    clearInterval(this.interval);
    this.isStart = false;
  }

  OnResetStopwatch(){
    this.mili = '0' + 0;
  this.min = '0' + 0;
  this.seconds = '0' + 0;
  }

}
