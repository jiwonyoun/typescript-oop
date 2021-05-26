{
  function checkNotBad<T>(arg: T | null): T {
    if (!arg) {
      throw new Error("not valid number");
    }
    return arg;
  }

  const number = checkNotBad(3);
  const bool: boolean = checkNotBad(true);
}
