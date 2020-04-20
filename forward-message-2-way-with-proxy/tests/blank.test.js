const handler = require('../functions/blank').handler;

describe('2-way-sms-forwarding function template', () => {
  it('Calls callback with empty JSON', () => {
    const callback = jest.fn();
    handler({}, {}, callback);
    expect(callback).toHaveBeenCalledWith(null, {});
  });
});
