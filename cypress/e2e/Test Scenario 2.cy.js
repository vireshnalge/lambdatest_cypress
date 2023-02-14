describe('lambdatest',() => {

    it('Input Forms',() => { 
        cy.visit("https://www.lambdatest.com/selenium-playground/input-form-demo");
        cy.injectAxe();
        cy.checkAlly();
        cy.get('#name').type('Viresh');//Name
        cy.get('#inputEmail4').type('vireshnalge@gmail.com');//Email
        cy.get('#inputPassword4').type('Welcome@13');//Password
        cy.get('#company').type('Persistent System');
        cy.get('#websitename').type('https://www.persistent.com/');
        cy.get(':nth-child(3) > .pr-20 > .w-full').select('India');
        cy.get('#inputCity').type('Solapur');
        cy.get('#inputAddress1').type('A-2/177,');
        cy.get('#inputAddress2').type('Mantri Chandak Complex,Bypass Road,Solapur');
        cy.get('#inputState').type('MAHARASHTRA');
        cy.get('#inputZip').type('413002');
        cy.get('.btn').click();
        cy.get('.success-msg').should('be.visible');
        cy.screenshot()
         
    })
})