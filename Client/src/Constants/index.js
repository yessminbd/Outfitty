
export const products = [
  {
    _id: "1",
    name: "Elegant Dress",
    description: "An elegant dress for special occasions, with a lightweight and comfortable fabric.",
    price: 89.99,
    images: [
      "https://i5.walmartimages.com/asr/b44df473-0406-43c0-b244-a018157fe752.4bc283b88a81172df5467435c968b58f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/fc2422aa-c401-4786-88d7-27acedd45f5c.48a95ccdc82943d894b33a7df0850df8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
    ],
    promotion: 25,
    categoryId: "10", variants: {
      sizes: ["bleu", "red", "orange"],
      colors: ["xl", "m", "xxl"],
    }
  },
  {
    _id: "2",
    name: "Casual T-shirt",
    description: "A casual t-shirt made from organic cotton, perfect for everyday outings.",
    price: 19.99,
    images: [
      "https://images.meesho.com/images/products/335476017/qhgcc_512.webp",
      "https://images.meesho.com/images/products/335476014/vwyuk_512.webp"
    ],
    promotion: 25,
    categoryId: "20", variants: {
      sizes: ["black", "red", "orange"],
      colors: ["xl", "m", "xxl"],
    }


  },

  {
    _id: "4",
    name: "Leather Jacket",
    description: "A real leather jacket with a warm lining, perfect for winter.",
    price: 129.99,
    images: [
      "https://thursdayboots.com/cdn/shop/products/1024x1024-Womens-Jackets-Racer-Black-102722-1.jpg?v=1667863479&width=480",
      "https://thursdayboots.com/cdn/shop/products/1024x1024-Womens-Jackets-Racer-Black-102722-3.jpg?v=1667863479&width=480"
    ],
    promotion: 25,
    categoryId: "40", variants: {
      sizes: ["black", "red", "orange"],
      colors: ["xl", "m", "xxl"],
    }
  },
  {
    _id: "5",
    name: "Pleated Skirt",
    description: "A trendy pleated skirt, ideal for a feminine and elegant look.",
    price: 39.99,
    images:
      ["https://m.media-amazon.com/images/I/61e-mRdx3WL._AC_SL1200_.jpg",

        "https://m.media-amazon.com/images/I/51OFrYOZ52L._AC_SL1200_.jpg",
      ],
    promotion: 0,
    categoryId: "50", variants: {
      sizes: ["black", "red", "orange"],
      colors: ["xl", "m", "xxl"],
    }
  },
  {
    _id: "prod_1",
    name: "Summer Breeze Dress",
    description: "A light and airy dress perfect for summer outings.",
    price: 79.99,
    images: [
      "https://grind.com.ph/cdn/shop/files/1000485749_01.jpg?v=1716780299&width=5000"
    ],
    promotion: 10,
    categoryId: "10", variants: {
      sizes: ["black", "red", "orange"],
      colors: ["xl", "m", "xxl"],
    }
  },
  {
    _id: "prod_2",
    name: "Classic Leather Jacket",
    description: "Timeless leather jacket for a bold fashion statement.",
    price: 149.99,
    images: [
      "https://images.nexusapp.co/assets/fe/aa/71/125917442.jpg"
    ],
    promotion: 0,
    categoryId: "40", variants: {
      sizes: ["black", "red", "orange"],
      colors: ["xl", "m", "xxl"],
    }
  },
  {
    _id: "prod_3",
    name: "Elegant Evening Gown",
    description: "A stunning gown that adds elegance to any formal event.",
    price: 199.99,
    images: [
      "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/4271f117-6fdc-4bed-b1ad-d6350cf690ec/722f0642-d6d1-4c02-a9a3-0cb1b4384624.png"
    ],
    promotion: 25,
    categoryId: "10", variants: {
      sizes: ["bleu", "red", "orange"],
      colors: ["xl", "m", "xxl"],
    }
  },
  {
    _id: "prod_4",
    name: "Comfy Lounge Set",
    description: "A cozy lounge set perfect for relaxing at home.",
    price: 49.99,
    images: [
      "https://www.softiespjs.com/cdn/shop/files/8900-8-Almond-S_1_1_750x.jpg?v=1722870547"
    ],
    promotion: 0,
    categoryId: "50",
    variants: {
      sizes: ["bleu", "red", "orange"],
      colors: ["xl", "m", "xxl"],
    }


  },

];
export const categories = [
  {
    _id: "10",
    name: "Dresses"
  },
  {
    _id: "20",
    name: "T-shirts"
  },
  {
    _id: "30",
    name: "Pants"
  },
  {
    _id: "40",
    name: "Jackets"
  },
  {
    _id: "50",
    name: "Skirts"
  }
];

export const states = [
  'Ariana', 'Beja', 'Ben Arous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba',
  'Kairouan', 'Kasserine', 'Kebili', 'Kef', 'Mahdia', 'Manouba',
  'Medenin', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana',
  'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'
];

export const orderStatus = {
  "Pending": "bg-blue-500",
  "Processing": "bg-yellow-500",
  "Delivered": "bg-green-600",
};

