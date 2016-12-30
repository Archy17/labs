import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { incrementAsync } from './sagas';

describe('Sagas', () => {
  describe('incrementAsync Saga Test', () => {
    const gen = incrementAsync();
    // console.log(JSON.stringify(gen.next(), null, 2));

    it('should CALL delay(1000)', () => {
      expect(gen.next().value).toEqual(call(delay, 1000));

      // gen.next() structure
      // {
      //   "value": {
      //     "@@redux-saga/IO": true,
      //     "CALL": {
      //       "context": null,
      //       "args": [
      //         1000
      //       ]
      //     }
      //   },
      //   "done": false
      // }
    });

    it('should dispatch an INCREMENT action', () => {
      expect(gen.next().value).toEqual(put({ type: 'INCREMENT' }));

      // gen.next() structure
      // {
      //   "value": {
      //     "@@redux-saga/IO": true,
      //     "PUT": {
      //       "channel": null,
      //       "action": {
      //         "type": "INCREMENT"
      //       }
      //     }
      //   },
      //   "done": false
      // }
    });

    it('should be done', () => {
      expect(gen.next()).toEqual({ done: true, value: undefined });

      // gen.next() structure
      // {
      //   "done": true,
      // }
    });
  });
});
