import { Checkbox, Label, Slider } from "@/components/ui";
import { useState } from "react";

const Filter = () => {
  // const isSticky = useSticky(64);

  const [price, setPrice] = useState([33]);

  return (
    <section
      className={`w-[300px] border rounded-md h-[800px] container py-4 space-y-3 
      `}
    >
      <div className="space-y-3">
        <span className="font-semibold">License</span>
        <ul className="list-none text-foreground">
          <li className="flex items-center space-x-3">
            <Checkbox />
            <Label>Free</Label>
          </li>
          <li className="flex items-center space-x-3">
            <Checkbox />
            <Label>Pro</Label>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-5">
        <span className="font-semibold">Price</span>
        <Slider
          defaultValue={[33]}
          max={10000}
          step={1}
          onValueChange={(value) => {
            setPrice(value);
          }}
        />
        <span>
          Price range: <span className="font-semibold">$1 - ${price}</span>
        </span>
      </div>
    </section>
  );
};

export default Filter;
