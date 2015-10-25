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
    assert.deepEqual([13], [13], 'What happened here?');
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
});
