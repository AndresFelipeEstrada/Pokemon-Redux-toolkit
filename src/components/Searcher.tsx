import { Input } from "antd";
import { useSearcher } from "../hooks/useSearcher";

export const Searcher = () => {
  const { Search } = Input;

  const { handleOnChange } = useSearcher();

  return (
    <div>
      <Search onChange={handleOnChange} placeholder="Buscar..." />
    </div>
  );
};
