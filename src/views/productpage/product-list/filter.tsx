import useSticky from "@/hooks/useSticky";

const Filter = () => {
  const isSticky = useSticky(64);

  return (
    <section
      className={`w-[300px] bg-gray-400 rounded-md h-[800px] ${
        isSticky ? "sticky top-[64px] " : ""
      }`}
    >
      {/* Nội dung của Filter */}
    </section>
  );
};

export default Filter;
