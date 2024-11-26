import Counter from "@/components/@page-components/increment/decrement";
import Button from "@/components/@page-components/prop-types/page";
import TodoList from "@/components/@page-components/to-do-list/page";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <Counter />
        <Button  label="Click Me"/>
        <Button label="Submit" color="green" />
        <TodoList />
    </div>
  );
}
