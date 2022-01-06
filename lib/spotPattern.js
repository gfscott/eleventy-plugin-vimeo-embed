/**
 * Regex details:
 * - (?=(\s*))\1 -- Mimics atomic groups in JavaScript RegEx using positive lookaheads.
 * @see https://blog.stevenlevithan.com/archives/mimic-atomic-groups
 * 
 * - (\d{1,20}). Maximum 64-bit integer is 20 digits long. Capping the group length is more efficient than `\d*`
 * @see https://www.wolframalpha.com/input/?i=2%5E64
 * 
 * Two options for handling escapes in the raw pattern:
 * - Double-escape each escaped character ("\\s*")
 * - Use the String.raw method (String.raw`\s*`), supported in Node 4+
 */ 

const rawPattern = [
  String.raw`<p>`,                  // opening paragraph tag (literal)
  String.raw`(?=(\s*))\1`,          // ReDoS-safe arbitrary whitespace (capturing)
  String.raw`(?:<a [^>]*?>)??`,     // Optional opening anchor tag (non-capturing)
  String.raw`(?=(\s*))\2`,          // ReDoS-safe arbitrary whitespace (capturing)
  String.raw`(?:https?:\/\/)??`,    // Optional URL protocol (non-capturing)
  String.raw`(?:w{3}\.)??`,         // Optional `www.` domain prefix (non-capturing)
  String.raw`(?:vimeo\.com)\/`,     // Vimeo apex domain (non-capturing)
  String.raw`(?:\d{1,20})`,         // Vimeo video ID. Maximum of 20 digits (32-bit integer max) (capturing)
  String.raw`(?:[^\s<>]*)`,         // Remainder of URL string. (non-capturing)
  String.raw`(?=(\s*))\3`,          // ReDoS-safe arbitrary whitespace (capturing)
  String.raw`(?:<\/a>)??`,          // Optional closing anchor tag (non-capturing)
  String.raw`(?=(\s*))\4`,          // ReDoS-safe arbitrary whitespace (capturing)
  String.raw`<\/p>`                 // closing paragraph tag (literal)
];
const joinPattern = rawPattern.join("");
const pattern = new RegExp(joinPattern, "g");

module.exports = function(str) {
  return str.match(pattern);
}