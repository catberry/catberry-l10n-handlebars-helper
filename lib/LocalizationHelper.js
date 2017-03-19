'use strict';

class LocalizationHelper {

	/**
	 * Creates new instance of localization helper.
	 * @param {ServiceLocator} locator Locator to resolve dependencies.
	 */
	constructor(locator) {
		this._localizationProvider = locator.resolve('localizationProvider');
	}

	/**
	 * Gets handlebars helper for localization.
	 * @returns {Function} Handlebars helper function.
	 */
	getHandlebarsHelper() {

		/* eslint no-invalid-this:0 */
		return function(...args) {
			let key = null;
			let locale = null;
			let count = null;
			const options = args.pop();

			args.every(arg => {
				if (!key && typeof (arg) === 'string') {
					key = arg;
					return true;
				}
				if (!locale && typeof (arg) === 'string') {
					locale = arg;
					return true;
				}
				if (!count && typeof (arg) === 'number') {
					count = arg;
					return true;
				}
				return false;
			});

			if (!key) {
				return '';
			}

			if (!locale) {
				locale = options.data.root.locale;
			}

			let value = '';
			try {
				value = !isNaN(count) ?
					this._localizationProvider.pluralize(locale, key, count) :
					this._localizationProvider.get(locale, key);
			} catch (e) {
				// nothing to do
			}

			return value;
		}.bind(this);
	}
}

module.exports = LocalizationHelper;
