import Search from "@/components/common/search";
import {
  Badge,
  Button,
  Label,
  RadioGroup,
  RadioGroupItem,
  Separator,
  Slider,
  useToast,
} from "@/components/ui";
import { useProductStore } from "@/domains/stores/zustand/products";
import useSoftware from "@/domains/stores/query-hook/software/use-software";
import useTypes from "@/domains/stores/query-hook/types/use-types";
import { ChevronDown } from "lucide-react";
import React, { useMemo } from "react";
import { SoftwarePageRequest } from "@/domains/models/software/software-page.request";
import { TypePageRequest } from "@/domains/models/type/type-page.request";

const Filter = () => {
  const [priceTo, setPriceTo] = React.useState<number>(200);
  const { toast } = useToast();
  const [pageSizeSoftware, setPageSizeSoftware] = React.useState<number>(10);
  const [pageSizeTypes, setPageSizeTypes] = React.useState<number>(10);
  const { setFilter, filter } = useProductStore();

  const optionSoftware: SoftwarePageRequest = useMemo(() => {
    return {
      pageSize: pageSizeSoftware,
      pageIndex: 1,
    };
  }, [pageSizeSoftware]);

  const optionTypes: TypePageRequest = useMemo(() => {
    return {
      pageSize: pageSizeTypes,
      pageIndex: 1,
    };
  }, [pageSizeTypes]);

  const {
    data: software,
    error: softwareError,
  } = useSoftware({
    options: optionSoftware,
  });

  const { data: types, error: typesError } = useTypes({
    options: optionTypes,
  });

  if (softwareError) {
    toast({
      title: "Error",
      description: softwareError.message,
    });
  }

  if (typesError) {
    toast({
      title: "Error",
      description: typesError.message,
    });
  }

  const handleSliderChange = (value: number) => {
    setPriceTo(value);
  };

  return (
    <section className="container py-6 space-y-6 rounded-md ">
      <Search
        placeholder="Search product"
        className="items-center rounded-lg outline-none bg-background"
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
              setPageSizeSoftware(10);
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
                  filter.softwareIds?.find((sw) => item.id === sw)
                    ? "default"
                    : "outline"
                }
                className="hover:cursor-pointer hover:bg-primary hover:text-primary-foreground"
                onClick={() => {
                  setFilter({
                    ...filter,
                    softwareIds: filter.softwareIds?.includes(item.id)
                      ? filter.softwareIds?.filter((sw) => sw !== item.id)
                      : [...(filter.softwareIds || []), item.id],
                  });
                }}
              >
                {item.name}
              </Badge>)
          )}
        </div>
        <Button className="w-full space-x-2" variant="outline">
          <ChevronDown size={24} />
          <span>See more</span>
        </Button>
      </div>

      <div className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h4 className="text-xl font-semibold">Type</h4>
          <Button
            variant="ghost"
            className="underline text-muted-foreground"
            onClick={() => {
              const updatedFilter = { ...filter };
              delete updatedFilter.tupeIds;
              setFilter(updatedFilter);
              setPageSizeTypes(10);
            }}
          >
            <span>Clear</span>
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {types?.data.map((item) => (
            <Badge
              key={item.id}
              variant={
                filter.tupeIds?.find((type) => type === item.id)
                  ? "default"
                  : "outline"
              }
              className="hover:cursor-pointer hover:bg-primary hover:text-primary-foreground"
              onClick={() =>
                setFilter({
                  ...filter,
                  tupeIds: filter.tupeIds?.includes(item.id)
                    ? filter.tupeIds?.filter((type) => type !== item.id)
                    : [...(filter.tupeIds || []), item.id],
                })
              }
            >
              {item.name}
            </Badge>
          ))}
        </div>

        <Button className="w-full space-x-2" variant="outline">
          <ChevronDown size={24} />
          <span>See more</span>
        </Button>
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
          max={2000}
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
