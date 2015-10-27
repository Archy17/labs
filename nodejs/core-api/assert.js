'use strict';

const assert = require('assert');

describe('#Assert Core Module', function() {
  xit('Should fail', function() {
    assert.fail(13, 13, '13 is indeed equal to 13');
  });

  it('Should tests if value is truthy - assert()', function() {
    let value = 'Node.js is awesome';
    assert(value, 'We have a problem');
  });

  it('Should tests if value is truthy - assert.ok()', function() {
    let value = 'Mastering Node.js';
    assert.ok(value, 'You need more practice');
  });

  it('Should tests with the equal comparison operator ( == ) - assert.equal()', function() {
    assert.equal(13, '13', 'wat?!')
  });

  it('Should tests with the not equal comparison operator ( != ) - assert.notEqual()', function() {
    assert.notEqual(13, 31, 'wat?');
    assert.notEqual({ hey: 'Eric' }, { hey: 'Eric' });
  });

  it('Should tests for deep equality - assert.deepEqual()', function() {
    assert.deepEqual({ hey: 'Eric' }, { hey: 'Eric' }, 'Objects are not deep equal');
    assert.deepEqual('13', 13, 'Strings are equal to numbers1!11!');
    assert.deepEqual([13, '12345'], ['13', 12345], 'What happened here?');
  });

  it('Should tests for deep inequality - assert.notDeepEqual()', function() {
    assert.notDeepEqual([13], [13, 31], 'What happened here?');
  });

  it('Should tests for strict equality ( === ) - assert.strictEqual', function() {
    assert.strictEqual(13, 8 + 5, 'Math genius');
  });

  it('Should tests for strict inequality ( !== ) - assert.notStrictEqual()', function() {
    assert.notStrictEqual({ hey: 'Eric' }, { hey: 'Eric' }, 'Objects are not strict equal');
  });

  it('Should tests for deep equality - primitives values are compared with strict equality operator - assert.deepStrictEqual()', function() {
    assert.deepStrictEqual([13, 12345], [13, 12345], 'Internal server error');
  });

  it('Should tests for deep inequality - primitives values are compared with strict inequality operator - assert.notDeepStrictEqual()', function() {
    assert.notDeepStrictEqual([13, '12345'], ['13', 12345], 'Internal server error');
  });

  it('Should thrown an error - assert.throws()', function() {
    assert.throws(function() {
      throw new Error('Wrong value');
    }, Error, 'Something bad ocurred');
    
    assert.throws(function() {
      throw new Error('Wrong again...');
    }, /again/, 'Something bad ocurred');

    assert.throws(function() {
      throw new Error('Wrong value');
    }, function(err) {
      if ((err instanceof Error) && /value/.test(err)) {
        return true;
      }
    }, 'Something bad ocurred');
  });

  it('Should not thrown an error from another type - assert.doesNotThrow()', function() {
    // will throw TypeError
    // assert.doesNotThrow(function() {
    //   throw new TypeError('Wrong value');
    // }, SyntaxError, 'Weird...');
  });

  it('Should throws value if value is truthy', function() {
    // useful when testing the error argument in callbacks
    // assert.ifError('Some value');   
    // Error: the string "Some value" was thrown, throw an Error :)
  });
});
