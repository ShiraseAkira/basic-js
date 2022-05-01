const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);

  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  if (options.addition !== undefined) {
    options.addition = String(options.addition);
  }
  options.addition = options.addition || '';
  options.additionRepeatTimes = options.additionRepeatTimes || (options.addition ? 1 : 0);
  options.additionSeparator = options.additionSeparator || '|';

  const addition = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes).slice(0, -options.additionSeparator.length);

  return (str + addition + options.separator).repeat(options.repeatTimes).slice(0, -options.separator.length);
}

module.exports = {
  repeater
};
