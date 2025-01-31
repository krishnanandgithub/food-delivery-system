const deliverFood = (
  { time, orderId, foodDetails, packageDetails, deliveryDetails },
) => {
  setTimeout(() => {
    const timeElapsed = (Date.now() - time) / 1000;
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
    const timeElapsed = (Date.now() - time) / 1000;
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

const prepareFood = ({ time, orderId, foodDetails }) => {
  setTimeout(() => {
    const timeElapsed = (Date.now() - time) / 1000;
    console.log([timeElapsed], "food is ready:", { orderId, foodDetails });
    console.log([timeElapsed], "Packing order...");
    const packageDetails = "Packed in eco-friendly box";
    packFood({ time, orderId, foodDetails, packageDetails });
  }, 3000);
};

const receiveOrder = ({ time, orderId }) => {
  setTimeout(() => {
    const timeElapsed = (Date.now() - time) / 100;
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

main();
