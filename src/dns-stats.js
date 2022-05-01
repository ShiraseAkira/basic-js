const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for(const domain of domains) {
    const domainArr = domain.split('.').map(elem => '.' + elem).reverse();

    let subDomain = '';
    for(const domain of domainArr) {
      subDomain = subDomain + domain;
      result[subDomain] = result[subDomain] ? result[subDomain] + 1 : 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
