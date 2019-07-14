export default function extractQueryParams(src) {
  const [url, query] = src.split("?");
  const params = query
    ? query
        .split("&")
        .map(function splitDecode(x) {
          const [key, val] = x.split("=");
          return [key, decodeURIComponent(val)];
        })
        .reduce(function reduceToObject(obj, [key, val]) {
          return Object.assign(obj, { [key]: val });
        }, {})
    : {};
  return [url, params];
}
