//https://github.com/chriso/validator.js/blob/master/validator.js

module.exports =  {
  /**
   * trim characters from the left-side of the input.
   * @param str
   * @param options
   * @returns {any}
   */
  ltrim: function (str, options) {
    var pattern = options.chars ? new RegExp('^[' + options.chars + ']+', 'g') : /^\s+/g;
    return str.replace(pattern, '');
  },
  /**
   * trim characters from the right-side of the input.
   * @param str
   * @param options
   * @returns {any}
   */
  rtrim: function (str, options) {
    var pattern = options.chars ? new RegExp('[' + options.chars + ']+$', 'g') : /\s+$/g;
    return str.replace(pattern, '');
  },
  /**
   * trim characters (whitespace by default) from both sides of the input.
   * @param str
   * @param options
   * @returns {any}
   */
  trim: function (str, options) {
    var pattern = options.chars ? new RegExp('^[' + options.chars + ']+|[' + options.chars + ']+$', 'g') : /^\s+|\s+$/g;
    return str.replace(pattern, '');
  },
  /**
   * Replace carriage return by chars (empty space by default)
   * @param value
   * @param options
   * @returns {any}
   */
  replaceCarriageReturn: function (value, options) {
    return value.replace(/[\r]/g, options.chars ? options.chars : '');
  },
  /**
   * Replace new line char by chars (empty space by default)
   * @param value
   * @param options
   * @returns {any}
   */
  replaceNewLine: function (value, options) {
    return value.replace(/[\n]/g, options.chars ? options.chars : '');
  },
  /**
   * emove characters that do not appear in the whitelist.
   * The characters are used in a RegExp and so you will need to escape some chars, e.g. whitelist(input, '\\[\\]').
   * @param str
   * @param options
   * @returns {any}
   */
  whitelist: function (str, options) {
    return str.replace(new RegExp('[^' + options.chars + ']+', 'g'), '');
  },
  /**
   * remove characters that appear in the blacklist.
   * The characters are used in a RegExp and so you will need to escape some chars, e.g. blacklist(input, '\\[\\]')
   * @param str
   * @param options
   * @returns {any}
   */
  blacklist: function (str, options) {
    return str.replace(new RegExp('[' + options.chars + ']+', 'g'), '');
  }
};