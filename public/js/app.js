function randomElement(array) {
  return array[parseInt(Math.random()*array.length)];
}

function generateName() {
  words1 = [
    "Alien", "Afghan", "BC", "Big", "Beast", "Banana", "Black", "Blackberry", "Blue", "Bubba", "Berry", "Cali", "California", "Chocolate", "Northern", "Cherry", "Double", "Citrus", "Death", "Dutch", "Dynamite", "East Coast", "West Coast", "Frosty", "Frost", "Frostbite", "Orange", "Gold", "Purple", "White", "Grand", "Green", "Hawaiian", "Candy", "Lavender", "Lemon", "Mango", "Master", "NYC", "Pineapple", "Platinum", "Raspberry", "Sour", "Rainbow", "Silver", "Super", "Superman", "Sweet", "Thai", "Trinity", "Tropical", "Voodoo"
  ];

  words2 = [
    "OG", "D", "Diesel", "Cheese", "Crack", "Kush", "Skunk", "Dream", "Widow", "Ice", "Ivy", "Haze", "Bud", "AK-47", "Goblin", "Snow", "Punch", "Sage", "Skunk"
  ];

  return (randomElement(words1) + " " + randomElement(words2));
}