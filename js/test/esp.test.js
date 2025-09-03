import test from 'node:test';
import assert from 'node:assert';
import { DNI } from '../src/nationalid/esp/dni.js';
import { NationalID } from '../src/nationalid/ESP.js';

test('valid DNI numbers', () => {
  assert.strictEqual(DNI.validate('12345678Z'), true);
  assert.strictEqual(DNI.validate('10469226V'), true);
});

test('invalid DNI numbers', () => {
  assert.strictEqual(DNI.validate('1234567A'), false);
  assert.strictEqual(DNI.validate('12345678A'), false);
});

test('alias NationalID behaves like DNI', () => {
  assert.strictEqual(NationalID.validate('12345678Z'), true);
  assert.strictEqual(NationalID.validate('12345678A'), false);

test('invalid DNI numbers', () => {
  assert.strictEqual(validate('1234567A'), false);
  assert.strictEqual(validate('12345678A'), false);
});
