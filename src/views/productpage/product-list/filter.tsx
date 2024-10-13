import Search from "@/components/common/search";
import {
  Badge,
  Button,
  Label,
  RadioGroup,
  RadioGroupItem,
  Separator,
  Slider,
} from "@/components/ui";
import { useProductStore } from "@/domains/stores/zustand/products";
import useSoftware from "@/domains/stores/zustand/software/useSoftware";
import useTypes from "@/domains/stores/zustand/types/use-types";
import { useDebounce } from "@/hooks";
import React, { useEffect, useState } from "react";

const Filter = () => {
  const { setFilter, filter } = useProductStore();

  const [priceTo, setPriceTo] = useState(filter.priceTo || 200);
  const priceDebounce = useDebounce(priceTo, 500);

  useEffect(() => {
    setFilter({
      ...filter,
      priceFrom: 0,
      priceTo: priceDebounce,
    });
  }, [priceDebounce]);

  const {
    data: software,
    isLoading: softwareLoading,
    error: softwareError,
  } = useSoftware({});

  const {
    data: types,
    isLoading: typesLoading,
    error: typesError,
  } = useTypes({});

  if (softwareLoading || typesLoading) {
    return <div>Loading...</div>;
  }

  if (softwareError) {
    return <div>Error: {softwareError.message}</div>;
  }

  if (typesError) {
    return <div>Error: {typesError.message}</div>;
  }

  const handleSliderChange = (value: number) => {
    setPriceTo(value);
  };

  useEffect(() => {
    if (filter.priceTo !== priceTo) {
      setPriceTo(filter.priceTo || 200);
    }
  }, [filter]);

  return (
    <section className="container sticky z-10 h-screen pt-6 space-y-6 rounded-md top-20">
      <Search
        placeholder="Search product"
        className="items-center outline-none bg-background "
      />
      <Separator className="border border-muted-foreground" />
      {/* Lisence */}
      <div className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h4 className="text-xl font-semibold">License</h4>
          <Button
            variant="ghost"
            className="underline text-muted-foreground"
            onClick={() => {
              const updatedFilter = { ...filter };
              delete updatedFilter.license;
              setFilter(updatedFilter);
            }}
          >
            <span>Clear</span>
          </Button>
        </div>

        <RadioGroup
          value={filter.license}
          onValueChange={() =>
            setFilter({
              ...filter,
              license: filter.license === "Free" ? "Pro" : "Free",
            })
          }
        >
          <div className="flex gap-3">
            <RadioGroupItem
              className="hover:bg-primary"
              value="Free"
              id="free"
            />
            <Label htmlFor="free">Free</Label>
          </div>

          <div className="flex gap-3">
            <RadioGroupItem className="hover:bg-primary" value="Pro" id="" />
            <Label>Pro</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h4 className="text-xl font-semibold">Software</h4>
          <Button
            variant="ghost"
            className="underline text-muted-foreground"
            onClick={() => {
              const updatedFilter = { ...filter };
              delete updatedFilter.softwareIds;
              setFilter(updatedFilter);
            }}
          >
            <span>Clear</span>
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {software?.data.map((item) => (
            <Badge
              key={item.id}
              variant={
                filter.softwareIds?.find((sw) => item.name === sw)
                  ? "default"
                  : "outline"
              }
              className="hover:cursor-pointer hover:bg-primary hover:text-primary-foreground"
              onClick={() => {
                setFilter({
                  ...filter,
                  softwareIds: [...(filter.softwareIds || []), item.name],
                });
              }}
            >
              {item.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h4 className="text-xl font-semibold">Type</h4>
          <Button
            variant="ghost"
            className="underline text-muted-foreground"
            onClick={() => {
              const updatedFilter = { ...filter };
              delete updatedFilter.type;
              setFilter(updatedFilter);
            }}
          >
            <span>Clear</span>
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {types?.data.map((item) => (
            <Badge
              key={item.id}
              variant={filter.type === item.name ? "default" : "outline"}
              className="hover:cursor-pointer hover:bg-primary hover:text-primary-foreground"
              onClick={() =>
                setFilter({
                  ...filter,
                  type: item.name,
                })
              }
            >
              {item.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h4 className="text-xl font-semibold">Price Range</h4>
          <Button
            variant="ghost"
            className="underline text-muted-foreground"
            onClick={() => {
              const updatedFilter = { ...filter };
              delete updatedFilter.priceFrom;
              delete updatedFilter.priceTo;
              setFilter(updatedFilter);
            }}
          >
            <span>Clear</span>
          </Button>
        </div>
        <Slider
          defaultValue={[filter.priceTo || 200]}
          max={200}
          step={10}
          onValueChange={(values) => handleSliderChange(values[0])}
        />

        <div>
          <span className="text-sm">
            From $ {filter.priceFrom ? filter.priceFrom : 0} to ${priceTo}
          </span>
        </div>
      </div>
    </section>
  );
};

const MemoFilter = React.memo(Filter);
export default MemoFilter;
