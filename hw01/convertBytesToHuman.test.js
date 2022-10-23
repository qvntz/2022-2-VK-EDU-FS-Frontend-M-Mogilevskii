/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman.js';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('1000')).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0.5)).toBe('0.50B')
  expect(convertBytesToHuman(0)).toBe('0B')
  expect(convertBytesToHuman(1024)).toBe('1.00KB')
  expect(convertBytesToHuman(0.25)).toBe('0.25B')
  expect(convertBytesToHuman(9007199254740991)).toBe('8.00PB')
  expect(convertBytesToHuman(123123123)).toBe('117.42MB')
  expect(convertBytesToHuman(5)).toBe('5.00B')
  expect(convertBytesToHuman(0xff)).toBe('255.00B')
});
