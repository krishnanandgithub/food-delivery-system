import { Order } from "./src/order.js";

const main = () => {
  const time = Date.now();
  const orderId = Math.floor(Math.random() * 899) + 100;
  const order = new Order(time, orderId);
  order.receive();
};

main();
