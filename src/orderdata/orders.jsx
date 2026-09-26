const orders = [
  {
    id: "ORD-20260925-001",
    product: {
      name: "Wireless Noise Cancelling Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      quantity: 1,
      price: 129.99
    },
    status: "delayed",
    timeline: [
      { title: "Order Placed", completed: true, date: "Sep 20, 2026" },
      { title: "Processing", completed: true, date: "Sep 21, 2026" },
      { title: "Shipped", completed: true, date: "Sep 22, 2026" },
      { title: "Out for Delivery", completed: false, date: null },
      { title: "Delivered", completed: false, date: null }
    ],
    estimatedDelivery: {
      date: "Sep 25, 2026",
      time: "6:00 PM"
    },
    updatedDelivery: {
      date: "Sep 29, 2026",
      time: "8:00 PM"
    },
    deliveredAt: null,
    support: {
      available: true
    }
  },
  {
    id: "ORD-20260924-042",
    product: {
      name: "Mechanical RGB Gaming Keyboard",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
      quantity: 1,
      price: 89.99
    },
    status: "delivered",
    timeline: [
      { title: "Order Placed", completed: true, date: "Sep 20, 2026" },
      { title: "Processing", completed: true, date: "Sep 21, 2026" },
      { title: "Shipped", completed: true, date: "Sep 22, 2026" },
      { title: "Out for Delivery", completed: true, date: "Sep 23, 2026" },
      { title: "Delivered", completed: true, date: "Sep 23, 2026" }
    ],
    estimatedDelivery: {
      date: "Sep 24, 2026",
      time: "2:00 PM"
    },
    updatedDelivery: null,
    deliveredAt: {
      date: "Sep 23, 2026",
      time: "1:45 PM"
    },
    support: {
      available: true
    }
  },
  {
    id: "ORD-20260926-089",
    product: {
      name: "Minimalist Leather Smartwatch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
      quantity: 1,
      price: 199.50
    },
    status: "out_for_delivery",
    timeline: [
      { title: "Order Placed", completed: true, date: "Sep 23, 2026" },
      { title: "Processing", completed: true, date: "Sep 24, 2026" },
      { title: "Shipped", completed: true, date: "Sep 25, 2026" },
      { title: "Out for Delivery", completed: true, date: "Sep 26, 2026" },
      { title: "Delivered", completed: false, date: null }
    ],
    estimatedDelivery: {
      date: "Sep 26, 2026",
      time: "5:30 PM"
    },
    updatedDelivery: null,
    deliveredAt: null,
    support: {
      available: true
    }
  },
  {
    id: "ORD-20260926-112",
    product: {
      name: "Ceramic Pour-Over Coffee Maker",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
      quantity: 2,
      price: 45.00
    },
    status: "processing",
    timeline: [
      { title: "Order Placed", completed: true, date: "Sep 26, 2026" },
      { title: "Processing", completed: true, date: "Sep 26, 2026" },
      { title: "Shipped", completed: false, date: null },
      { title: "Out for Delivery", completed: false, date: null },
      { title: "Delivered", completed: false, date: null }
    ],
    estimatedDelivery: {
      date: "Sep 30, 2026",
      time: "7:00 PM"
    },
    updatedDelivery: null,
    deliveredAt: null,
    support: {
      available: true
    }
  },
  {
    id: "ORD-20260925-104",
    product: {
      name: "Ergonomic Mesh Office Chair",
      image: "https://images.unsplash.com/photo-1580481077494-e3299ac25e94?auto=format&fit=crop&w=600&q=80",
      quantity: 1,
      price: 249.00
    },
    status: "shipped",
    timeline: [
      { title: "Order Placed", completed: true, date: "Sep 24, 2026" },
      { title: "Processing", completed: true, date: "Sep 25, 2026" },
      { title: "Shipped", completed: true, date: "Sep 26, 2026" },
      { title: "Out for Delivery", completed: false, date: null },
      { title: "Delivered", completed: false, date: null }
    ],
    estimatedDelivery: {
      date: "Sep 30, 2026",
      time: "1:00 PM"
    },
    updatedDelivery: null,
    deliveredAt: null,
    support: {
      available: true
    }
  },
  {
    id: "ORD-20260918-015",
    product: {
      name: "Portable Bluetooth Speaker",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
      quantity: 1,
      price: 79.99
    },
    status: "returned",
    timeline: [
      { title: "Order Placed", completed: true, date: "Sep 18, 2026" },
      { title: "Processing", completed: true, date: "Sep 18, 2026" },
      { title: "Shipped", completed: true, date: "Sep 19, 2026" },
      { title: "Out for Delivery", completed: true, date: "Sep 20, 2026" },
      { title: "Delivered", completed: true, date: "Sep 20, 2026" }
    ],
    estimatedDelivery: {
      date: "Sep 20, 2026",
      time: "4:00 PM"
    },
    updatedDelivery: null,
    deliveredAt: {
      date: "Sep 20, 2026",
      time: "3:15 PM"
    },
    support: {
      available: true
    }
  },
  {
    id: "ORD-20260926-202",
    product: {
      name: "Ultra-Wide 34-inch Curved Monitor",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
      quantity: 1,
      price: 499.00
    },
    status: "cancelled",
    timeline: [
      { title: "Order Placed", completed: true, date: "Sep 26, 2026" },
      { title: "Processing", completed: false, date: null },
      { title: "Shipped", completed: false, date: null },
      { title: "Out for Delivery", completed: false, date: null },
      { title: "Delivered", completed: false, date: null }
    ],
    estimatedDelivery: {
      date: null,
      time: null
    },
    updatedDelivery: null,
    deliveredAt: null,
    support: {
      available: false
    }
  },
  {
    id: "ORD-20260923-078",
    product: {
      name: "Professional DSLR Camera Lens",
      image: "https://images.unsplash.com/photo-1617005082133-5c0c415f396a?auto=format&fit=crop&w=600&q=80",
      quantity: 1,
      price: 850.00
    },
    status: "on_hold",
    timeline: [
      { title: "Order Placed", completed: true, date: "Sep 23, 2026" },
      { title: "Processing", completed: true, date: "Sep 24, 2026" },
      { title: "Shipped", completed: false, date: null },
      { title: "Out for Delivery", completed: false, date: null },
      { title: "Delivered", completed: false, date: null }
    ],
    estimatedDelivery: {
      date: "Oct 02, 2026",
      time: "11:00 AM"
    },
    updatedDelivery: null,
    deliveredAt: null,
    support: {
      available: true
    }
  }
];