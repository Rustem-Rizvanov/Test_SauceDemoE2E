SauceDemo E2E Tests
This project contains automated end-to-end (E2E) tests for https://www.saucedemo.com using Playwright and JavaScript, following the Page Object pattern.
Prerequisites

Node.js (version 16 or higher)
npm

Setup

Clone the repository:git clone <repository-url>
cd saucedemo-tests


Install dependencies:npm install



Running Tests
Run all tests:
npm test

Test Cases

Successful login
Login with incorrect password
Add item to cart
Remove item from cart
Complete purchase

Project Structure

pages/ - Page Object classes for each page
tests/ - Test scenarios
playwright.config.js - Playwright configuration
package.json - Project dependencies and scripts
README.md - This file

Notes

Tests use the standard_user account with password secret_sauce.
Assertions verify UI behavior and expected outcomes.

