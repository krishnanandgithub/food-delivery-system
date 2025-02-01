const deliverFood = (
  { time, orderId, foodDetails, packageDetails, deliveryDetails },
) => {
  setTimeout(() => {
    const timeElapsed = ((Date.now() - time) / 1000).toFixed(2);
    console.log([timeElapsed], "Order delivered:", {
      orderId,
      foodDetails,
      packageDetails,
      deliveryDetails,
    });
  }, 5000);
};

const packFood = ({ time, orderId, foodDetails, packageDetails }) => {
  setTimeout(() => {
    const timeElapsed = ((Date.now() - time) / 1000).toFixed(2);
    console.log([timeElapsed], "Order packed:", {
      orderId,
      foodDetails,
      packageDetails,
    });
    console.log([timeElapsed], "Delivering order...");
    const deliveryDetails = "Delivered by John at 7:30 PM";
    deliverFood({
      time,
      orderId,
      foodDetails,
      packageDetails,
      deliveryDetails,
    });
  }, 2000);
};

const prepareFood = ({ time, ...rest }) => {
  setTimeout(() => {
    const timeElapsed = ((Date.now() - time) / 1000).toFixed(2);
    console.log([timeElapsed], "food is ready:", rest);
    console.log([timeElapsed], "Packing order...");
    const packageDetails = "Packed in eco-friendly box";
    packFood({ time, ...rest, packageDetails });
  }, 3000);
};

const receiveOrder = ({ time, orderId }) => {
  setTimeout(() => {
    const timeElapsed = ((Date.now() - time) / 100).toFixed(2);
    console.log([timeElapsed], "Order received:", orderId);
    console.log([timeElapsed], "Preparing food...");
    const foodDetails = "Burger & Fries";
    prepareFood({ time, orderId, foodDetails });
  }, 0);
};

const main = () => {
  const time = Date.now();
  const orderId = Math.floor(Math.random() * 899) + 100;
  receiveOrder({ time, orderId });
};

// main();

const task = (begin, finish, timeTaken, next) => (details) => {
  const beginDetails = begin(details);
  setTimeout(() => {
    const finishDetails = finish(beginDetails);
    next();
  }, timeTaken);
};

const _deliverFood = task(
  () => console.log("Delivering order..."),
  () => console.log("Ordered delivered:"),
  5000,
  () => {},
);

const _packFood = task(
  () => console.log("Packing order..."),
  () => console.log("Order packed:"),
  2000,
  _deliverFood,
);

const _prepareFood = task();
const _receiveOrder = task();

_receiveOrder();
