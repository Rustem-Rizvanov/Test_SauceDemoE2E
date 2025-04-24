class CartPage {
    constructor(page) {
        this.page = page;
        this.removeButton = page.locator('.cart_button').first();
        this.checkoutButton = page.locator('#checkout');
        this.cartItems = page.locator('.cart_item');
    }

    async removeFirstItem() {
        await this.removeButton.click();
    }

    async getCartItemCount() {
        return await this.cartItems.count();
    }

    async goToCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = CartPage;