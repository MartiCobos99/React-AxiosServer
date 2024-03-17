import { useState } from "react";

const useFormFilter = () => {
  const [newFilter, setNewFilter] = useState("");

  const handleNewFilterValue = (newValue) => {
    setNewFilter(newValue);
  };

  return {
    newFilter,
    handleNewFilterValue,
  };
};

export default useFormFilter;
