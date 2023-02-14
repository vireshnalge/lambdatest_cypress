# lambdatest_cypress
name: Cypress Tests
on: [push]
jobs:
  cypress-run:
    runs-on: windows-latest
    
matrix:
    containers: [1, 2] # Uses 2 parallel instances
steps: 
  - name: Checkout
    uses: actions/checkout@v3
  - name: Cypress run
  
  with:
      start: npm run test
 record: true
      parallel: true
