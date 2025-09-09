"use client";

import { useSelector } from "react-redux";

import { UseStoreDispatcher } from "@/store/index";
import { proModalVisibilitySelector } from "@/store/ui/selectors";
import { handleProModalVisibility } from "@/store/ui/slice";

const useProModal = () => {
  const dispatch = UseStoreDispatcher();
  const isOpen = useSelector(proModalVisibilitySelector);
  return {
    isOpen,
    onOpen: () => dispatch(handleProModalVisibility(true)),
    onClose: () => dispatch(handleProModalVisibility(false)),
    onToggle: () => () => dispatch(handleProModalVisibility(!isOpen)),
  };
};

export { useProModal };
