let person = {
  name: "Phúc Du",
  age: 19,
  address: "Thanh Hóa",
};
console.log(person);
person.dateOfB = "20/01/2005";
console.log("Thông tin sau khi thêm ngày sinh:", person);
delete person.age;
console.log("Thông tin sau khi xóa tuổi:", person);
