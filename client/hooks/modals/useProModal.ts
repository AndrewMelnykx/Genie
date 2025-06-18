"use client";

import { UseStoreDispatcher } from "@/store/index";
import { proModalVisibilitySelector } from "@/store/modals/selectors";
import { handleProModalVisibility } from "@/store/modals/slice";
import { useSelector } from "react-redux";

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
