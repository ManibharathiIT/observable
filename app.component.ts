import { ajax } from 'rxjs/ajax';
import { map, catchError, of,from,fromEvent, timer, combineLatest, merge, interval } from 'rxjs';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable';

  constructor(){
    
    // const firstTimer=interval(1000);
    // const secondTimer=interval(3000);
    // const combine=merge(firstTimer,secondTimer);
    // combine.subscribe(value=>console.log(value))
// const div = document.createElement('div');
// div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
// document.body.appendChild(div);

// note optional configuration parameter which will be passed to addEventListener
// const clicksInDocument = fromEvent(document, 'click', { capture: true });
// const clicksInDiv = fromEvent(div, 'click');

// clicksInDocument.subscribe(() => console.log('document'));
// clicksInDiv.subscribe(() => console.log('div'));

// By default events bubble UP in DOM tree, so normally
// when we would click on div in document
// "div" would be logged first and then "document".
// Since we specified optional `capture` option, document
// will catch event when it goes DOWN DOM tree, so console
// will log "document" and then "div".
    
  
    
  }
}
