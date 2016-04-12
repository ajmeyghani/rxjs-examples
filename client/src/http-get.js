import axios from 'axios';
import {Observable} from 'rxjs/Rx';
/*
  Create two source streams
 */
const source1 = Observable.defer(() => (axios.get('/test')));
const source2 = Observable.defer(() => (axios.get('/test2')));

/*
  Combining the streams
 */
const httpExample = Observable.concat(source1, source2);

export {httpExample}
