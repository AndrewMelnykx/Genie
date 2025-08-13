"use client";

import { Music } from "lucide-react";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";

import Heading from "@/components/heading";
import CustomForm from "@/components/custom/form";
import EmptyImage from "@/images/empty-music.png";

import { Empty } from "@/components/empty";
import { Loader } from "@/components/laoder";

import { useSelector } from "react-redux";

import { musicDataSelector } from "@/store/messages-list/selectors";
import { fetchApiLimitCount, fetchMusic } from "@/store/messages-list/actions";
import { MusicFile } from "@/store/messages-list/types";
import { FeatureType } from "helpers/constants/api";
import { useCustomForm } from "@/hooks/forms/useCustomForm";
import { useSubmitHandler } from "@/hooks/state/useSubmitHandler";
import { useApiLimitDispatcher } from "@/hooks/state/useApiLimitDispatcher";

const MusicPage = () => {
  const form = useCustomForm();
  const musicData = useSelector(musicDataSelector);

  const onMessageSending = useSubmitHandler({
    mode: "music",
    musicData: [],
    dispatchAction: fetchMusic,
  });
  const onSubmitting = useApiLimitDispatcher({
    submitHandlingPropFunction: onMessageSending,
    featureName: FeatureType.MUSIC,
    fetchingApiLimitCount: fetchApiLimitCount,
  });

  const isLoading = form.formState.isSubmitting;
  const ifMessagesEmpty = musicData.length === 0 && !isLoading;
  //FIX COLORS OF THE ICONS
  //POSSIBLE SOLUTION IS ROUTE FIXING
  return (
    <div style={{ color: "black", fontSize: "20px" }}>
      <Heading
        title="Music Generation"
        description="Make music from your prompts"
        icon={Music}
        iconColor="text-yellow-600"
        bgColor="bg-emerald-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <CustomForm form={form} onSubmit={onSubmitting} placeholder="Moonlight Sonata" />
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className=" p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {ifMessagesEmpty && <Empty label="No music generated" img={EmptyImage} />}

          <div className="space-y-4 mt-4">
            {musicData.map((track: MusicFile) => (
              <div key={track.file_url} className="p-4 border rounded-lg bg-white shadow space-y-2">
                <p className="text-sm text-gray-600">Prompt: {form.getValues("prompt")}</p>
                <AudioPlayer src={track.file_url} className="rounded-lg bg-black " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MusicPage;
