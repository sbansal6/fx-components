var Sanitizer = (function () {
    function Sanitizer() {
    }
    /**
     * Apply sanitization rules on all attributes
     * @param attributes
     * @param santizeRules
     * @param options
     * @returns {any}
     */
    Sanitizer.sanitize = function (attributes, santizeRules, options) {
        for (var attr in santizeRules) {
            for (var santizerName in santizeRules[attr]) {
                var fn = this.sanitizors[santizerName];
                attributes[attr] = fn(attributes[attr], {});
            }
        }
        return attributes;
    };
    /**
     * Extend sanitizors object
     * @param key
     * @param fb
     */
    Sanitizer.extend = function (key, fn) {
        this.sanitizors[key] = fn;
    };
    /**
     * Out of box sanitizors
     * @type {{ltrim: (function(any, any): any), rtrim: (function(any, any): any), trim: (function(any, any): any), replaceCarriageReturn: (function(any, any=): any), replaceNewLine: (function(any, any=): any), whitelist: (function(any, any): any), blacklist: (function(any, any): any)}}
     */
    Sanitizer.sanitizors = {
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
    return Sanitizer;
})();
exports.Sanitizer = Sanitizer;
//# sourceMappingURL=Sanitize.js.map