import { Cart } from "./Cart";

describe("Cart", () => {
  test("Can create Cart and get total for empty cart", () => {
    const cart = new Cart();
    expect(cart.getTotal()).toBe(0);
  });
});
