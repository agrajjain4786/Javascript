const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((e) => {
    console.log(e);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationShipText");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomre = async () => {
  let cust1 = new Customer({
    name: "Arjan",
  });
  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocolate" });
  cust1.orders.push(order1, order2);
  let res = await cust1.save();
  console.log(res);
};
addCustomre();

// const addOrders = async () => {
//   let res = await Order.insertMany([
//     {
//       item: "samosa",
//       price: 12,
//     },
//     {
//       item: "Chips",
//       price: 50,
//     },
//     {
//       item: "Chocolate",
//       price: 40,
//     },
//   ]);
//   console.log(res);
// };

// addOrders();
