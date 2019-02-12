const readfile = require('../readFile')

describe('readfile',() =>  {
it('should resolve promise corectly', () => {
  return readfile('./test/important.md')
    .then(content => expect(content).toMatch('Do not remove this file'))
  })

  it('should default to utf8', () => {
    return readfile('./test/important.md')
      .then(content => expect(content).toMatch('ϵ'))
  });
});
