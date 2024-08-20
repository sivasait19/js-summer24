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
  
  

  //given an array of numbers /integers and a target
  //find 2 numbers that add up to the target number and return the index of those 2 numbers 
// ex nums = [2,7,11,15], target = 9
//output : [0,1] => 2+7 = 9
  function twosum(nums, target)

  function nSq(n){
    let count =0;
    for(let i=0;i<n;i++){

    }//for (let j=0;j<n;j++)
  }


  function countletter(sentence, targetletter){
    const map = new Map()

    const leters = sentence.split("")
    letters.forEach(letter)=>
  }