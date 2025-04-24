# SauceDemo E2E Tests

This project contains automated end-to-end (E2E) tests for https://www.saucedemo.com using Playwright and JavaScript, following the Page Object pattern.

## Prerequisites
- Node.js (version 16 or higher)
- npm

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd saucedemo-tests
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests
Run all tests:
```bash
npm test
```

## Test Cases
1. Successful login
2. Login with incorrect password
3. Add item to cart
4. Remove item from cart
5. Complete purchase

## Project Structure
- `pages/` - Page Object classes for each page
- `tests/` - Test scenarios
- `playwright.config.js` - Playwright configuration
- `package.json` - Project dependencies and scripts
- `README.md` - This file

## Notes
- Tests use the `standard_user` account with password `secret_sauce`.
- Assertions verify UI behavior and expected outcomes.
