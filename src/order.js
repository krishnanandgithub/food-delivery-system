class Order {
  #time;
  #orderId;
  #foodDetails;
  #packageDetails;
  #deliveryDetails;
  constructor(time, orderId, foodDetails, packageDetails, deliveryDetails) {
    this.#time = time;
    this.#orderId = orderId;
    this.#foodDetails = foodDetails;
    this.#packageDetails = packageDetails;
    this.#deliveryDetails = deliveryDetails;
  }

  receive() {
    setTimeout(() => {
      const timeElapsed = (Date.now() - this.#time) / 100;
      console.log([timeElapsed], "Order received:", { orderId: this.#orderId });
    }, 0);
    return new Order(this.#time, this.#orderId);
  }

  prepare(food) {
    setTimeout(() => {
      const timeElapsed = (Date.now() - this.#time) / 100;
      const foodDetails = { orderId: this.#orderId, foodDetails: food };
      console.log([timeElapsed], "Preparing food...");
      console.log([timeElapsed], "food is ready:", foodDetails);
    }, 3000);
    return new Order(this.#time, this.#orderId, food);
  }

  pack(details) {
    setTimeout(() => {
      const timeElapsed = (Date.now() - this.#time) / 100;
      const orderId = this.#orderId;
      const foodDetails = this.#foodDetails;
      const packageDetails = { orderId, foodDetails, packageDetails: details };
      console.log([timeElapsed], "Packing order...");
      console.log([timeElapsed], "Order packed:", packageDetails);
    }, 5000);
    return new Order(this.#time, this.#orderId, this.#foodDetails, details);
  }

  deliver(details) {
    setTimeout(() => {
      const timeElapsed = (Date.now() - this.#time) / 100;
      const Id = this.#orderId;
      const food = this.#foodDetails;
      const packages = this.#packageDetails;
      const delivery = { Id, food, packages, deliveryDetails: details };
      console.log([timeElapsed], "Delivering order...");
      console.log([timeElapsed], "Order delivered:", delivery);
    }, 10000);
    return new Order(
      this.#time,
      this.#orderId,
      this.#foodDetails,
      this.packageDetails,
      this.#deliveryDetails,
    );
  }
}

export { Order };
