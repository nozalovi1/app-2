const products = [
    { name: "Laptop", price: 999.99, category: "Electronics" },
    { name: "Coffee Maker", price: 49.99, category: "Kitchen Appliances" },
    { name: "Running Shoes", price: 89.99, category: "Sportswear" },
    { name: "Bluetooth Headphones", price: 199.99, category: "Electronics" },
    { name: "Novel - 'The Great Gatsby'", price: 15.99, category: "Books" },
  ];


  const totalprices = products.reduce((res, product) => {
    return res + product.price;
}, 0);

console.log(totalprices)