const parseInlineOptions = require("./parseInlineOptions.js");
const pattern = /<p>(?:\s*)(?:<a(?:.*)>)?(?:\s*)(?:https?:\/\/)?(?:w{3}\.)?(?:vimeo\.com)\/(\d+)(?:\S*)(?:\s*)(?:<\/a>)?([\S\s]*?)<\/p>/i;

module.exports = function(str) {
	let [, id, inlineOptions] = pattern.exec(str);
	return {
		id,
		options: parseInlineOptions(inlineOptions),
	};
};