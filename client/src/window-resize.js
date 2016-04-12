import {Observable} from 'rxjs/Rx';

const windowResizeStream = Observable
         .fromEvent(window, 'resize')
         .debounceTime(250);

export {windowResizeStream}

