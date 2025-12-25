"use client";

import { ImageIcon } from "lucide-react";
import { useSelector } from "react-redux";

import Heading from "@/components/heading";
import CustomForm from "@/components/custom/form";
import EmptyImage from "@/images/empty-pic.png";

import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";

import { imagesDataSelector } from "@/store/messages-list/selectors";
import { fetchImage } from "@/store/messages-list/actions";
import { useSubmitHandler } from "@/hooks/state/useSubmitHandler";
import { useCustomForm } from "@/hooks/forms/useCustomForm";

import CustomImage from "@/components/custom/image";
import { FeatureType } from "utils/constants/api";

const ImagePage = () => {
  const form = useCustomForm();
  const imagesData = useSelector(imagesDataSelector);
  const onSubmit = useSubmitHandler({
    mode: "image",
    dispatchAction: fetchImage,
    messagesData: imagesData,
    featureKey: FeatureType.IMAGE,
  });

  const isLoading = form.formState.isSubmitting;
  const ifMessagesEmpty = imagesData.length === 0 && !isLoading;

  return (
    <div style={{ color: "black", fontSize: "20px" }}>
      <Heading
        title="Image Generation"
        description="Generate any image with your messages"
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <CustomForm form={form} onSubmit={onSubmit} placeholder="Create an image from one word" />
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-20">
              <Loader />
            </div>
          )}
          <Empty label="No images generated " img={EmptyImage} ifIsEmpty={ifMessagesEmpty} />
          <CustomImage imagesData={imagesData} />
        </div>
      </div>
    </div>
  );
};
export default ImagePage;
