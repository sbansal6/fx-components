///<reference path='ISourceComponent.ts'/>
var fx;
(function (fx) {
    var core;
    (function (core) {
        var component;
        (function (component) {
            var TextFileSource = (function () {
                function TextFileSource() {
                }
                TextFileSource.prototype.singleClickEvent = function () { };
                TextFileSource.prototype.doubleClickEvent = function () { };
                return TextFileSource;
            })();
            component.TextFileSource = TextFileSource;
        })(component = core.component || (core.component = {}));
    })(core = fx.core || (fx.core = {}));
})(fx || (fx = {}));
//# sourceMappingURL=TextFileSource.js.map