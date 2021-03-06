/**
 * Replaces items matched in the regex with spaces.
 *
 * @param {Object} settings The main settings object containing regular expressions
 * @param {String} text     The string being counted.
 *
 * @return {string} The manipulated text.
 */
export default function ( settings, text ) {
	if ( settings.connectorRegExp ) {
		return text.replace( settings.connectorRegExp, ' ' );
	}
	return text;
}
