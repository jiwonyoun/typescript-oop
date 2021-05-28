{
  const obj = {
    name: "ellie",
  };

  obj.name;
  obj["name"];

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  // Type of Name = string
  type Name = Animal["name"];
  const text: Name = "hi";

  // Type of Gender = 'male' | 'female'
  type Gender = Animal["gender"];

  // name | age | gender
  type Keys = keyof Animal;
  const key: Keys = "age";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
}
