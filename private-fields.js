// class Circle {
//     #radius;

//     constructor(value) {
//       this.#radius = value;
//     }

//    static hasRadius(circle) {
//         return "radius" in circle;
//     }


//     get area() {
//       return Math.PI * Math.pow(this.#radius, 2);
//     }

// }


// let a=new Circle();
// console.log(Circle.hasRadius(a))

class C {
    #x;
    constructor(x) {
      this.#x = x;
    }
    static getX(obj) {
    
      if (#x in obj) return obj.#x;
  
    
    }
  }
  console.log(C.getX(new C("foo"))); // "foo"
  console.log(C.getX(new C(0.196))); // 0.196
  console.log(C.getX(new C(new Date()))); // the current date and time
  console.log(C.getX({})); // "obj must be an instance of C"