import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

const Filter = () => {
  return (
    <section>
      <Select>
        <SelectTrigger className="w-[300px]">
          <SelectValue placeholder="License" />
        </SelectTrigger>
        <SelectContent className="w-[300px]">
          <SelectGroup>
            <SelectLabel>License</SelectLabel>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
};

export default Filter;
