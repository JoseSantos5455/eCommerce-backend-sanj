const {
  addCart,
  updatedCart,
} = require("../../../controllers/cart.controller.js");
const Cart = require("../../../models/cart.model.js");
const Product = require("../../../models/product.model.js");

jest.mock("../../../models/cart.model.js");
jest.mock("../../../models/product.model.js");

// describe("addCart function", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should add a product to the cart successfully", async () => {
//     const req = {
//       user: {
//         _id: "6574ccef486f68da127da0be",
//       },
//       body: {
//         items: {
//           productId: "6574ccef486f68da127da0ba",
//           quantity: 2,
//         },
//       },
//     };

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     const addCartSchemaMock = {
//       validate: jest.fn().mockReturnValue({ error: null }),
//     };

//     const productMock = {
//       _id: "6574ccef486f68da127da0bc",
//       title: "Nike shoes",
//       desc: "All new Nike shoes air collection.",
//       img: [
//         "https://res.cloudinary.com/studentbcepatna/image/upload/v1701894307/lxmhues8i6v1fdvxuyyd.webp",
//       ],
//       currency: "INR",
//       price: 100,
//       quantity: 10,
//       quantity: 5,
//       inStock: true,
//       // Add other fields based on your schema
//     };

//     const cartMock = {
//       userId: "6574ccef486f68da127da0be",
//       items: [{ productId: "6574ccef486f68da127da0bc", quantity: 2 }],
//       totalPrice: 200,
//       // Add other fields based on your schema
//     };

//     addCartSchemaMock.validate.mockReturnValue({ error: null });
//     Product.findById.mockResolvedValue(productMock);
//     Cart.findOne.mockResolvedValue(cartMock);
//     Cart.prototype.save.mockResolvedValue(cartMock);
//     Product.prototype.save.mockResolvedValue();

//     await addCart(req, res);

//     expect(res.status).toHaveBeenCalledWith(201);
//     expect(res.json).toHaveBeenCalledWith(cartMock);
//   });

//   it("should handle validation error", async () => {
//     const req = {
//       user: {
//         _id: "user123",
//       },
//       body: {
//         items: {
//           productId: "invalidProductId",
//           quantity: 2,
//         },
//       },
//     };

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     const validationError = new Error("Validation error");
//     validationError.message = "Validation error details";

//     const addCartSchemaMock = {
//       validate: jest.fn().mockReturnValue({ error: validationError }),
//     };

//     addCartSchemaMock.validate.mockReturnValue({ error: validationError });

//     await addCart(req, res);

//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith(
//       '"items.productId" length must be 24 characters long'
//     );
//   });

//   it("should handle product not found", async () => {
//     const req = {
//       user: {
//         _id: "6574ccef486f68da127da0be",
//       },
//       body: {
//         items: {
//           productId: "6574ccef486f68da127da0b1",
//           quantity: 2,
//         },
//       },
//     };

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     const addCartSchemaMock = {
//       validate: jest.fn().mockReturnValue({ error: null }),
//     };

//     addCartSchemaMock.validate.mockReturnValue({ error: null });
//     Product.findById.mockResolvedValue(null);

//     await addCart(req, res);

//     expect(res.status).toHaveBeenCalledWith(404);
//     expect(res.json).toHaveBeenCalledWith("Product not found with given id !");
//   });

//   it("should handle insufficient product quantity", async () => {
//     const req = {
//       user: {
//         _id: "user123",
//       },
//       body: {
//         items: {
//           productId: "product123",
//           quantity: 6, // Assuming available quantity is 5
//         },
//       },
//     };

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     const addCartSchemaMock = {
//       validate: jest.fn().mockReturnValue({ error: null }),
//     };

//     const productMock = {
//       _id: "product123",
//       title: "Nike shoes",
//       price: 100,
//       quantity: 5,
//       // Add other fields based on your schema
//     };

//     addCartSchemaMock.validate.mockReturnValue({ error: null });
//     Product.findById.mockResolvedValue(productMock);

//     await addCart(req, res);

//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith(
//       '"items.productId" length must be 24 characters long'
//     );
//   });

//   it("should handle internal server error", async () => {
//     const req = {
//       user: {
//         _id: "6574ccef486f68da127da0b1",
//       },
//       body: {
//         items: {
//           productId: "6574ccef486f68da127da0b2",
//           quantity: 2,
//         },
//       },
//     };

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     const addCartSchemaMock = {
//       validate: jest.fn().mockReturnValue({ error: null }),
//     };

//     const productMock = {
//       _id: "6574ccef486f68da127da0be",
//       title: "Nike shoes",
//       price: 100,
//       quantity: 5,
//       // Add other fields based on your schema
//     };

//     addCartSchemaMock.validate.mockReturnValue({ error: null });
//     Product.findById.mockResolvedValue(productMock);
//     Cart.findOne.mockRejectedValue(new Error("Internal server error"));

//     await addCart(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith("Internal server error");
//   });
// });

// update

describe("updatedCart function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should update the cart successfully", async () => {
    const req = {
      user: {
        _id: "6570d8a32fe8748211793a2f",
      },
      params: {
        productId: "6570d8a32fe8748211793a2a",
      },
      body: {
        items: {
          quantity: 1,
        },
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const updatedCartSchemaMock = {
      validate: jest.fn().mockReturnValue({ error: null }),
    };

    const productMock = {
      _id: "6570d8a32fe8748211793a2a",
      title: "Nike shoes",
      price: 100,
      quantity: 5,
      // Add other fields based on your schema
    };

    const cartMock = {
      userId: "6570d8a32fe8748211793a2a",
      items: [{ productId: "6570d8a32fe8748211793a2a", quantity: 1 }],
      totalPrice: 300,
      // Add other fields based on your schema
    };

    updatedCartSchemaMock.validate.mockReturnValue({ error: null });
    Product.findById.mockResolvedValue(productMock);
    Cart.findOne.mockResolvedValue(cartMock);
    Cart.prototype.save.mockResolvedValue(cartMock);

    await updatedCart(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(cartMock);
  });

  it("should handle validation error", async () => {
    const req = {
      user: {
        _id: "user123",
      },
      params: {
        productId: "invalidProductId",
      },
      body: {
        items: {
          quantity: 3,
        },
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const validationError = new Error("Validation error");
    validationError.message = '"productId" length must be 24 characters long';

    const updatedCartSchemaMock = {
      validate: jest.fn().mockReturnValue({ error: validationError }),
    };

    updatedCartSchemaMock.validate.mockReturnValue({ error: validationError });

    await updatedCart(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(validationError.message);
  });

  it("should handle missing quantity", async () => {
    const req = {
      user: {
        _id: "user123",
      },
      params: {
        productId: "product123",
      },
      body: {
        items: {},
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await updatedCart(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith("Quantity is missing !");
  });

  it("should handle cart not found", async () => {
    const req = {
      user: {
        _id: "6570d8a32fe8748211793a2a",
      },
      params: {
        productId: "6570d8a32fe8748211793a2a",
      },
      body: {
        items: {
          quantity: 3,
        },
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const updatedCartSchemaMock = {
      validate: jest.fn().mockReturnValue({ error: null }),
    };

    updatedCartSchemaMock.validate.mockReturnValue({ error: null });
    Cart.findOne.mockResolvedValue(null);

    await updatedCart(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith(
      "No cart found with the given user id"
    );
  });

  it("should handle product not found in cart", async () => {
    const req = {
      user: {
        _id: "6570d8a32fe8748211793a2a",
      },
      params: {
        productId: "6570d8a32fe8748211793a2a",
      },
      body: {
        items: {
          quantity: 3,
        },
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const updatedCartSchemaMock = {
      validate: jest.fn().mockReturnValue({ error: null }),
    };

    updatedCartSchemaMock.validate.mockReturnValue({ error: null });
    Cart.findOne.mockResolvedValue({
      userId: "6570d8a32fe8748211793a2a",
      items: [],
    });

    await updatedCart(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith(
      "No product found in the cart with the given product id"
    );
  });

  it("should handle insufficient product quantity", async () => {
    const req = {
      user: {
        _id: "user123",
      },
      params: {
        productId: "product123",
      },
      body: {
        items: {
          quantity: 6, // Assuming available quantity is 5
        },
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const updatedCartSchemaMock = {
      validate: jest.fn().mockReturnValue({ error: null }),
    };

    const productMock = {
      _id: "product123",
      title: "Nike shoes",
      price: 100,
      quantity: 5,
      // Add other fields based on your schema
    };

    updatedCartSchemaMock.validate.mockReturnValue({ error: null });
    Product.findById.mockResolvedValue(productMock);

    await updatedCart(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(
      '"productId" length must be 24 characters long'
    );
  });

  it("should handle internal server error", async () => {
    const req = {
      user: {
        _id: "6570d8a32fe8748211793a2a",
      },
      params: {
        productId: "6570d8a32fe8748211793a2a",
      },
      body: {
        items: {
          quantity: 3,
        },
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const updatedCartSchemaMock = {
      validate: jest.fn().mockReturnValue({ error: null }),
    };

    const productMock = {
      _id: "6570d8a32fe8748211793a2a",
      title: "Nike shoes",
      price: 100,
      quantity: 5,
      // Add other fields based on your schema
    };

    updatedCartSchemaMock.validate.mockReturnValue({ error: null });
    Product.findById.mockResolvedValue(productMock);
    Cart.findOne.mockRejectedValue(new Error("Internal server error"));

    await updatedCart(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith("Internal server error");
  });
});
