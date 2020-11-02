module.exports = [
	{type: "Standard", str: "https://vimeo.com/400344311"},
	{type: "With http", str: "http://vimeo.com/400344311"},
	{type: "Without protocol", str: "vimeo.com/400344311"},
	{
		type: "With arbitrary params",
		str: "https://vimeo.com/400344311?foo=bar&baz",
	},
];
