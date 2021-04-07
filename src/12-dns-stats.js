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
  const dot = '.';
  const assembled = [];
  const result = {};
  domains.forEach((oldAddress) => {
    const address = oldAddress.split('.').reverse();
    address.forEach((part, index) => {
      const previousPart = assembled[index - 1]
        ? dot + assembled[index - 1]
        : '';
      const completePart = part + previousPart;
      if (!assembled.includes(completePart)) {
        assembled.push(completePart);
      }
    });
  });
  assembled.forEach((domainsPart) => {
    let counter = 0;
    domains.forEach((domain) => {
      if (domain.includes(domainsPart)) {
        counter++;
      }
    });
    const entry = domainsPart.split('.').reverse();
    let modifiedEntry = '';
    entry.forEach((part) => {
      modifiedEntry += dot + part;
    });
    result[modifiedEntry] = counter;
  });
  return result;
}

module.exports = getDNSStats;
