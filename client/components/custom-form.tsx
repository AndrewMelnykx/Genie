"use client";

import * as z from "zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { UseFormReturn } from "react-hook-form";

const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required!",
  }),
});

type CustomFormProps<TSchema extends z.ZodTypeAny> = {
  form: UseFormReturn<z.infer<TSchema>>;
  onSubmit: (values: z.infer<TSchema>) => Promise<void>;
  placeholder: string;
};

const CustomForm = <TSchema extends z.ZodTypeAny>({
  form,
  onSubmit,
  placeholder,
}: CustomFormProps<TSchema>) => {
  const isLoading = form.formState.isSubmitting;
  const handleSubmitFunc = async (values: z.infer<TSchema>) => {
    await onSubmit(values);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitFunc)}
        className="rounded-lg  border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
      >
        {" "}
        <FormField
          name="prompt"
          render={({ field }) => (
            <FormItem className="col-span-12 lg:col-span-10">
              <FormControl className="m-0 p-0">
                <Input
                  className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                  disabled={isLoading}
                  placeholder={placeholder}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          className="col-span-12  lg-col-span:2 w-full"
          disabled={isLoading}
        >
          Generate
        </Button>
      </form>
    </Form>
  );
};
export { formSchema };
export default CustomForm;
