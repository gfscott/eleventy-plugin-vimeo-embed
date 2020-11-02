module.exports = [
	{
		name: "default options",
		output: '<div id="vimeo-400344311" class="eleventy-plugin-vimeo-embed" style="position: relative; width: 100%; padding-top: 56.25%;"><iframe style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;" frameborder="0" title="Embedded Vimeo video" src="https://player.vimeo.com/video/400344311?dnt=1" allow="autoplay; fullscreen" allowfullscreen></iframe></div>',
		options: {},
	},
	{
		name: "autoplay",
		output: '<div id="vimeo-400344311" class="eleventy-plugin-vimeo-embed" style="position: relative; width: 100%; padding-top: 56.25%;"><iframe style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;" frameborder="0" title="Embedded Vimeo video" src="https://player.vimeo.com/video/400344311?dnt=1&amp;autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe></div>',
		options: {autoplay: true},
	},
	{
		name: "lazyload iframe",
		output: '<div id="vimeo-400344311" class="eleventy-plugin-vimeo-embed" style="position: relative; width: 100%; padding-top: 56.25%;"><iframe style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;" frameborder="0" title="Embedded Vimeo video" src="https://player.vimeo.com/video/400344311?dnt=1" allow="autoplay; fullscreen" allowfullscreen loading="lazy"></iframe></div>',
		options: {lazy: true},
	},
	{
		name: "custom allow attributes",
		output: '<div id="vimeo-400344311" class="eleventy-plugin-vimeo-embed" style="position: relative; width: 100%; padding-top: 56.25%;"><iframe style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;" frameborder="0" title="Embedded Vimeo video" src="https://player.vimeo.com/video/400344311?dnt=1" allow="foo" allowfullscreen></iframe></div>',
		options: {allowAttrs: "foo"},
	},
	{
		name: "allowfullscreen off",
		output: '<div id="vimeo-400344311" class="eleventy-plugin-vimeo-embed" style="position: relative; width: 100%; padding-top: 56.25%;"><iframe style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;" frameborder="0" title="Embedded Vimeo video" src="https://player.vimeo.com/video/400344311?dnt=1" allow="autoplay; fullscreen"></iframe></div>',
		options: {allowFullscreen: false},
	},
	{
		name: "do-not-track off",
		output: '<div id="vimeo-400344311" class="eleventy-plugin-vimeo-embed" style="position: relative; width: 100%; padding-top: 56.25%;"><iframe style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;" frameborder="0" title="Embedded Vimeo video" src="https://player.vimeo.com/video/400344311" allow="autoplay; fullscreen" allowfullscreen></iframe></div>',
		options: {dnt: false},
	},
	{
		name: "custom aspect ratio",
		output: '<div id="vimeo-400344311" class="eleventy-plugin-vimeo-embed" style="position: relative; width: 100%; padding-top: 75%;"><iframe style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;" frameborder="0" title="Embedded Vimeo video" src="https://player.vimeo.com/video/400344311?dnt=1" allow="autoplay; fullscreen" allowfullscreen></iframe></div>',
		options: {aspectRatio: "4:3"},
	},
	{
		name: "custom class",
		output: '<div id="vimeo-400344311" class="foo" style="position: relative; width: 100%; padding-top: 56.25%;"><iframe style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;" frameborder="0" title="Embedded Vimeo video" src="https://player.vimeo.com/video/400344311?dnt=1" allow="autoplay; fullscreen" allowfullscreen></iframe></div>',
		options: {embedClass: "foo"},
	},
];
