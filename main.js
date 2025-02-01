const timeElapsed = (time) => ((Date.now() - time) / 1000).toFixed(2);

const task = (begin, finish, timeTaken, next) => (orderDetails) => {
  const beginDetails = begin(orderDetails);
  setTimeout(() => {
    const finishDetails = finish(beginDetails);
    next(finishDetails);
  }, timeTaken);
};

const deliverFood = task(
  ({ time, ...rest }) => {
    console.log([timeElapsed(time)], "Delivering order...");
    return { ...rest, time };
  },
  ({ time, ...rest }) => {
    const deliveryDetails = "Delivered by John at 7:30 PM";
    console.log([timeElapsed(time)], "Ordered delivered:", {
      ...rest,
      deliveryDetails,
    });

    return { ...rest, deliveryDetails, time };
  },
  5000,
  () => {},
);

const packFood = task(
  ({ time, ...rest }) => {
    console.log([timeElapsed(time)], "Packing order...");

    return { ...rest, time };
  },
  ({ time, ...rest }) => {
    const packageDetails = "Packed in eco-friendly box";
    console.log([timeElapsed(time)], "Order packed:", {
      ...rest,
      packageDetails,
    });

    return { ...rest, packageDetails, time };
  },
  2000,
  deliverFood,
);

const prepareFood = task(
  ({ time, ...rest }) => {
    console.log([timeElapsed(time)], "Preparing food...");

    return { ...rest, time };
  },
  ({ time, ...rest }) => {
    const foodDetails = "Burger & Fries";
    console.log([timeElapsed(time)], "Food is ready:", {
      ...rest,
      foodDetails,
    });

    return { ...rest, foodDetails, time };
  },
  3000,
  packFood,
);

const receiveOrder = task(
  (details) => {
    return details;
  },
  ({ time, ...rest }) => {
    const orderId = Math.floor(Math.random() * 8999) + 1000;
    console.log([timeElapsed(time)], "Order received", { ...rest, orderId });

    return { ...rest, orderId, time };
  },
  0,
  prepareFood,
);

receiveOrder({ time: Date.now() });

//----------------------previous approach-------------------

const _deliverFood = ({ time, ...rest }) => {
  console.log([timeElapsed(time)], "Delivering order...");
  setTimeout(() => {
    console.log([timeElapsed(time)], "Order delivered:", rest);
  }, 5000);
};

const _packFood = ({ time, ...rest }) => {
  console.log([timeElapsed(time)], "Packing order...");
  setTimeout(() => {
    console.log([timeElapsed(time)], "Order packed:", rest);
    const deliveryDetails = "Delivered by John at 7:30 PM";
    _deliverFood({ time, ...rest, deliveryDetails });
  }, 2000);
};

const _prepareFood = ({ time, ...rest }) => {
  console.log([timeElapsed(time)], "Preparing food...");
  setTimeout(() => {
    console.log([timeElapsed(time)], "food is ready:", rest);
    const packageDetails = "Packed in eco-friendly box";
    _packFood({ time, ...rest, packageDetails });
  }, 3000);
};

const _receiveOrder = ({ time, orderId }) => {
  setTimeout(() => {
    console.log([timeElapsed(time)], "Order received:", orderId);
    const foodDetails = "Burger & Fries";
    _prepareFood({ time, orderId, foodDetails });
  }, 0);
};

const main = () => {
  const time = Date.now();
  const orderId = Math.floor(Math.random() * 8999) + 1000;
  _receiveOrder({ time, orderId });
};

// main();
