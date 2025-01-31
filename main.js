const foodPreparation = (time, order) => {
  setTimeout(() => {
    const timeTaken = (Date.now() - time) / 1000;
    console.log([timeTaken], "Preparing food...");
  }, 3000);
};

const orderReceived = (time) => {
  setTimeout(() => {
    const timeTaken = (Date.now() - time) / 1000;
    const orderId = Math.floor(Math.random() * 899) + 100;
    console.log([timeTaken], "Order received:", { orderId });
    foodPreparation(time, {orderId});
  }, 0);
};

const main = () => {
  const time = Date.now();
  orderReceived(time);
};

main();
