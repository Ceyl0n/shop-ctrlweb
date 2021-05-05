import Vue from 'vue';
/**
 * Вывод форматированной валюты
 * @param   Number  value
 * @return  String
 */
Vue.filter('currency', (value, decimals) => {
  value = parseFloat(value);

  if (!isFinite(value) || (!value && value !== 0)) return '';

  decimals = decimals ? decimals : 2;

  let stringified = Math.abs(value).toFixed(decimals);
  let _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
  let i = _int.length % 3;
  let head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ' ' : '') : '';
  let _float = decimals ? stringified.slice(-1 - decimals) : '';
  _float = _float.replace(/0*$/, '');
  if (_float === '.') _float = '';

  let sign = value < 0 ? '-' : '';

  return sign + head + _int.slice(i).replace(/(\d{3})(?=\d)/g, '$1 ') + _float;
});
