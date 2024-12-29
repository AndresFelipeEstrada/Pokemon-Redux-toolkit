import { ChangeEventHandler } from "react";
import { useDispatch } from "react-redux";
import { setSearchPokemons } from "../slices/dataSlice";

type UseSearcherReturn = {
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
};

export const useSearcher = (): UseSearcherReturn => {
  const dispatch = useDispatch();

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setSearchPokemons(event.target.value));
  };
  return { handleOnChange };
};
