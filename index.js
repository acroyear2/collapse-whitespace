
module.exports = collapse;

/**
 * collapse whitespace
 */
function collapse (s) {
  return s.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
}