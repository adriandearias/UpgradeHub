const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let i = 0;

for (const fruit of foodSchedule) {
  if (!fruit.isVegan) {
    fruit.name = fruits[i];
    fruit.isVegan = true;
    i++;
  }
}

console.log(foodSchedule);
