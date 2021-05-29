{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: "hihg" | "low";
  };

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: Todo = {
    title: "learn TS",
    description: "study hard",
    label: "study",
    priority: "hihg",
  };

  const updated = updateTodo(todo, { priority: "low" });

  console.log(updated);
}
