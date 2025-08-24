"use-client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formSchema } from "@/components/custom/form";

const useCustomForm = (schema = formSchema) => {
  return useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { prompt: "" },
  });
};

export { useCustomForm };
