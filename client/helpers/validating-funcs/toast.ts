import { toast } from "react-hot-toast";

const popToast = (feature: string) => {
  toast.error(`${feature} generation has been rejected!`);
};

export { popToast };
