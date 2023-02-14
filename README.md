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
      # Starts web server for E2E tests - replace with your own server invocation
      # https://docs.cypress.io/guides/continuous-integration/introduction#Boot-your-server
      start: npm run test
 record: true
      parallel: true
