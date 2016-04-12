import {helloStream} from 'hello';
import {httpExample} from 'http-get';
import {windowResizeStream} from 'window-resize';
import {inputStream} from 'input';

/*
  Nothing special here, just print some
  dummy text on the page.
 */
const intro = document.getElementById('intro');
helloStream.subscribe(
  (text) => {
    intro.textContent = text;
  }
);

/*
  Example showing how a promise
  can be turned into a stream.
  It also demonstrates how you can
  combine multiple responses and
  pull from the combined stream.
 */
httpExample.subscribe(
  r =>  {console.log(r.data)},
  ()  => {console.log('err happened')},
  ()  => { console.log('done')}
);


/*
  Example showing how you can debounce events
  with Observable.debounce.time
 */
windowResizeStream.subscribe(() => {
  console.log('done resizing');
});


/*
  Debounced input stream
 */
inputStream.subscribe(input => {
  console.log(input);
});
