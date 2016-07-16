// spec: https://github.com/estree/estree/blob/master/spec.md#memberexpression

describe('MemberExpression tests', () => {
  let expression, memberExpression

  before(() => {
    class Expression {
      execute() {}
    }
    expression = new Expression()
  })

  beforeEach(() => {
    memberExpression = createAstNode('MemberExpression')

    sandbox.stub(esprimaParser, 'parseExpression')
      .returns(expression)
    sandbox.stub(expression, 'execute')
      .returns('resultFromExecute')
  })

  it('should call parseExpression with memberExpression', () => {
    esprimaParser.MemberExpression(memberExpression)

    expect(
      esprimaParser.parseExpression
        .calledWithExactly(memberExpression)
    ).to.be.true
  })

  it('should call execute of expression object returned from parseExpression', () => {
    esprimaParser.MemberExpression(memberExpression)

    expect(expression.execute.calledOnce).to.be.true
  })

  it('should return result from execute of expression object', () => {
    const result = esprimaParser.MemberExpression(memberExpression)

    expect(result).to.be.equal('resultFromExecute')
  })
})
