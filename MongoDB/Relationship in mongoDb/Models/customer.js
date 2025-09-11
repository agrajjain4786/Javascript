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

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log(`pre middleware`);
// });
customerSchema.post("findOneAndDelete", async (customer) => {
  // console.log(`post middleware`);
  // console.log(data);
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// function
const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};
// findCustomer();

const addCustomre = async () => {
  let cust1 = new Customer({
    name: "Sarthak",
  });
  let order1 = new Order({
    item: "Burger",
    price: 250,
  });
  cust1.orders.push(order1);

  await cust1.save();
  await order1.save();
  console.log(`add new customer`);
};
// addCustomre();

const deleteCustomer = async () => {
  let data = await Customer.findByIdAndDelete("68c2ccad4f110957785c484b");
  console.log(data);
};
deleteCustomer();

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
