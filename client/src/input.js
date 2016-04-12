/*
  Debouncing inputs.
 */
import {Observable} from 'rxjs/Rx';

const input = document.getElementById('myinput');
const inputStream = Observable
    .fromEvent(input, 'input')
    .map(e => e.target.value)
    .debounceTime(150)
    .distinctUntilChanged();

export {inputStream}
