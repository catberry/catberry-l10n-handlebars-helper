'use strict';

const LocalizationHelper = require('./lib/LocalizationHelper');

module.exports = {

	/**
	 * Registers all localization components in service locator.
	 * @param {ServiceLocator} locator Catberry's service locator.
	 */
	register(locator) {
		try {
			const handlebars = locator.resolve('handlebars');
			const helper = new LocalizationHelper(locator);
			handlebars.registerHelper('l10n', helper.getHandlebarsHelper());
		} catch (e) {
			// nothing to do.
		}
	}
};
