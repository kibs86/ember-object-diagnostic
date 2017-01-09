/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)

const Order = Ember.Object.extend({
  unitPrice: 0,
  quantity: 0,
  orderPrice: function(){
    return this.unitPrice * this.quantity;
  }
});

const Cart = Ember.Object.extend({
  orders: [],
  addToCart: function(item){
    this.orders.pushObject(item);
  },
  totalPrice: Ember.computed('orders.@each.orderPrice', function() {
    return this.get('orders').reduce(function(acc, value) {
      return acc + value.get('orderPrice');
    }, 0);
  })
});

let myCart = Cart.create;

let hats = Order.create({
  unitPrice: 5,
  quantity: 2
});

let deskLamp = Order.create({
  unitPrice: 20,
  quantity: 1
});

let handTowels = Order.create({
  unitPrice: 8,
  quantity: 3
});

myCart.addToCart(hats);
myCart.addToCart(deskLamp);
myCart.addToCart(handTowels);
