"use strict";

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/compile.js */
		var compile = function compile(isop, compute, stack, tokens) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {

				for (var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var token = _step.value;

					if (isop(token)) operator(compute, stack, token);else operand(stack, token);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator["return"]) {
						_iterator["return"]();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return stack.pop();
		};

		exports.compile = compile;

		/* js/src/operand.js */

		var operand = function operand(stack, token) {

			stack.push(token);
		};

		exports.operand = operand;

		/* js/src/operator.js */

		/**
   * assert stack.length >= 2
   */

		var operator = function operator(compute, stack, token) {

			var b = stack.pop();
			var a = stack.pop();
			stack.push(compute(token, a, b));
		};

		exports.operator = operator;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-rpn", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["rpn"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-rpn");
})();