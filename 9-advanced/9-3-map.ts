{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  [1, 2].map((item) => item * item); // [1, 4]

  type Optional<T> = {
    // = for ... in
    [P in keyof T]?: T[P];
  };

  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };

  const optionalAnimal: Optional<Animal> = {
    age: 30,
  };

  const readonlyAnimal: Readonly<Animal> = {
    name: "hi",
    age: 30,
  };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  const obj2: Nullable<Video> = {
    title: "obj",
    author: null,
    description: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
