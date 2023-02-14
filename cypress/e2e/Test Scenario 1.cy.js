describe('Lambdatest', () => {
  
  it('MouseHover', () => {
    cy.visit("https://www.lambdatest.com/selenium-playground/input-form-demo")
    cy.contains('Progress Bar & Sliders').click()
    cy.contains('Drag & Drop Sliders').click()
    cy.get('.sp__range-success > .sp__range').invoke("val","95").trigger('change')
    cy.get('#rangeSuccess').invoke("val","95").trigger('change').should("have.value","95")
    

  })
 
})
