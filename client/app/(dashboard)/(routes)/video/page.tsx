"use client";

import { useDispatch, useSelector } from "react-redux";
import { Video } from "lucide-react";
import "react-h5-audio-player/lib/styles.css";

import Heading from "@/components/heading";
import CustomForm from "@/components/custom-form";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/laoder";
import EmptyImage from "@/images/empty-video2.png";

import {
  // parsedSelector,
  videoDataSelector,
} from "@/store/messages-list/selectors";
import { fetchApiLimitCount, fetchVideo } from "@/store/messages-list/actions";
import { useSubmitHandler } from "@/hooks/state/useSubmitHandler";
import { useApiLimitDispatcher } from "@/hooks/state/useApiLimitDispatcher";
import { useCustomForm } from "@/hooks/forms/useCustomForm";
// import { handlePushingStorage } from "@/store/messages-list/slice";
import { FeatureType } from "helpers/constants/api";

const VideoPage = () => {
  const dispatch = useDispatch();
  const form = useCustomForm();
  const videoLinkFromRequest = useSelector(videoDataSelector);
  // const savedVideoLinkFromRequestToState = useSelector(parsedSelector);

  const isLoading = form.formState.isSubmitting;

  // const onSubmit = useSubmitHandler({
  //   mode: "video",
  //   videoData: "",
  //   dispatchAction: fetchVideo,
  // });
  const onMessageSending = async () => {
    try {
      const response = await fetch("/api/video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "A dancing in a space cat",
        }),
      });

      const data = await response.json();
      // console.log("REPLICATE VIDEO RESPONSE:", data);
      console.log("REPLICATE VIDEO RESPONSE:", JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Error calling replicate:", error);
    }
  };
  const onSubmitting = useApiLimitDispatcher({
    submitHandlingPropFunction: onMessageSending,
    featureName: FeatureType.CONVERSATION,
    fetchingApiLimitCount: fetchApiLimitCount,
  });

  // useEffect(() => {
  //   if (videoLinkFromRequest) {
  //     localStorage.setItem("videoData", JSON.stringify(videoLinkFromRequest));
  //   }
  // }, [videoLinkFromRequest]);

  // useEffect(() => {
  //   const stored = localStorage.getItem("videoData");
  //   if (stored) {
  //     try {
  //       const parsed = JSON.parse(stored); // parsed is now of type `VideoFileFullResponse`
  //       dispatch(handlePushingStorage(parsed)); // Ensure this action accepts the correct type
  //     } catch (err) {
  //       console.error("Failed to parse stored video data", err);
  //     }
  //   }
  // }, [dispatch, videoLinkFromRequest]);
  // useEffect(() => {
  //   console.log("YOUR SAVED VIDEO ", videoLinkFromRequest);
  // }, [videoLinkFromRequest]);

  return (
    <div style={{ color: "black", fontSize: "20px" }}>
      <Heading
        title="Video Generation"
        description="Create video by chatting"
        icon={Video}
        iconColor="text-orange-500"
        bgColor="bg-orange-500/10"
      />
      <div className="px-4 lg:px-8">
        <CustomForm form={form} onSubmit={onSubmitting} placeholder="Pink ocean with a whale" />
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}

          {!videoLinkFromRequest && !isLoading && (
            <Empty label="No video generated" img={EmptyImage} />
          )}

          {/* {videoLinkFromRequest && (
            <div className="space-y-4 mt-4">
              {
                <video
                  className="w-full aspect-video mt-8 rounded-lg border bg-black"
                  key={videoLinkFromRequest}
                  controls
                >
                  <source src={videoLinkFromRequest} type="video/mp4" />
                </video>
              }
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
