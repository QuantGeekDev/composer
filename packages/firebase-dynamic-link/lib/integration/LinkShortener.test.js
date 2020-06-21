"use strict";

var _LinkShortener = require("./LinkShortener");

var _isomorphicUnfetch = _interopRequireDefault(require("isomorphic-unfetch"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('isomorphic-unfetch');
describe('LinkShortener', () => {
  const config = {
    apiKey: 'api_key',
    domainUriPrefix: 'https://d.example.link'
  };
  const shortenedUrl = {
    shortLink: 'https://d.example.link/WD2F',
    previewLink: 'https://d.example.link/WD2F?d=1'
  };
  const response = {
    json: jest.fn().mockReturnValue(shortenedUrl)
  };
  const link = 'https://very.long.com/url/with/parameters';
  const shortener = new _LinkShortener.LinkShortener(config);
  const mockFetch = _isomorphicUnfetch.default;
  mockFetch.mockImplementation(() => {
    return Promise.resolve(response);
  });
  it('should call api to shorten link', async () => {
    await shortener.short(link);
    expect(mockFetch).toBeCalledTimes(1);
    expect(mockFetch).toBeCalledWith(_constants.SERVICE_URL + config.apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dynamicLinkInfo: {
          domainUriPrefix: config.domainUriPrefix,
          link
        }
      })
    });
  });
  it('should throw error in fetch fails', () => {
    mockFetch.mockImplementationOnce(() => {
      return Promise.reject(new Error('Error'));
    });
    return expect(shortener.short(link)).rejects.toEqual(new Error('Error'));
  });
  it('should parse response and return parsed data', async () => {
    const shorten = await shortener.short(link);
    expect(response.json).toBeCalledTimes(1);
    expect(shorten).toStrictEqual(shortenedUrl);
  });
});