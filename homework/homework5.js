/*Homework: Building Objects
Build a user object with the given properties and type:*/

const user1 = {
    
    name: "John Doe",
    email: "johndoe@example.com",
    website: "www.johndoe.com",
    age: 30,
    phone: {
      home: "123-456-7890",
      cell: "098-765-4321"
    },
    cart: ["grapes"],
  
    // Define methods
    getName() {
      return this.name;
    },
  
    getPhone(phoneType) {
      return this.phone[phoneType];
    },
  
    getEmail() {
      return this.email;
    },
  
    addToCart(item) {
      this.cart.push(item);
      return true;
    },
  
    removeFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index > -1) {
        this.cart.splice(index, 1);
        return true;
      }
      return false;
    },
  
    addNewPhone(phoneType, phoneNumber) {
      this.phone[phoneType] = phoneNumber;
      return true;
    },
  
    updateNewPhone(phoneType, newPhoneNumber) {
      if (this.phone.hasOwnProperty(phoneType)) {
        this.phone[phoneType] = newPhoneNumber;
        return true;
      }
      return false;
    }
  };
  
  