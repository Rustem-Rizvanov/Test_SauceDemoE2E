const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

test.describe('SauceDemo E2E Tests', () => {
    let loginPage, inventoryPage, cartPage, checkoutPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);
        await loginPage.goto();
    });

    test('1. Successful login', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(inventoryPage.page).toHaveURL(/inventory.html/);
    });

    test('2. Login with incorrect password', async () => {
        await loginPage.login('standard_user', 'wrong_password');
        const error = await loginPage.getErrorMessage();
        await expect(error).toContain('Username and password do not match');
    });

    test('3. Add item to cart', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.addFirstItemToCart();
        await inventoryPage.goToCart();
        const itemCount = await cartPage.getCartItemCount();
        await expect(itemCount).toBe(1);
    });

    test('4. Remove item from cart', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.addFirstItemToCart();
        await inventoryPage.goToCart();
        await cartPage.removeFirstItem();
        const itemCount = await cartPage.getCartItemCount();
        await expect(itemCount).toBe(0);
    });

    test('5. Complete purchase', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.addFirstItemToCart();
        await inventoryPage.goToCart();
        await cartPage.goToCheckout();
        await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
        await checkoutPage.completePurchase();
        const message = await checkoutPage.getCompleteMessage();
        await expect(message).toBe('THANK YOU FOR YOUR ORDER');
    });
});