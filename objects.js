// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greeting:()=>{
//         console.log(this)
//     },
//     gret:function(){
//         console.log(this)
//     }
// };

// person.greet = function () {
//     console.log(this.firstName);
// }


// person.greeting.call(person)

// person.gret()
// const sad=()=>console.log(this)

// function iamTheTest(){
//     this.firstName="rahma"
//     this.sad=sad
// }

const obj = {
    name: 'deeecode',
    age: 200,
    print: function() {
      const print2 = () => {
        console.log(this)
      }
      
      print2()
    }
  }
  
  obj.print()
  // {
  //   name: 'deeecode',
  //   age: 200,
  //   print: [Function: print]
  // }

// const xy=new iamTheTest()

// console.log(xy)

// xy.sad()

// console.log(typeof null)

// const happy =person.greeting.bind(person);
// happy()
// person.gret()

// function greet() {
//     console.log(this.firstName);
// }

// person.greet = greet;

// person.greet()