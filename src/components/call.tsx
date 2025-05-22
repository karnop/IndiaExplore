"use client";
import React from "react";
import AgoraRTC, {
  AgoraRTCProvider,
  LocalVideoTrack,
  RemoteUser,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRTCClient,
  useRemoteAudioTracks,
  useRemoteUsers,
} from "agora-rtc-react";
import Link from "next/link";
import Videos from "@/components/videos";

function Call({ appId, channelName }: { appId: string; channelName: string }) {
  const client = useRTCClient(
    AgoraRTC.createClient({ codec: "vp8", mode: "rtc" })
  );
  return (
    <div>
      <AgoraRTCProvider client={client}>
        <Videos appId={appId} channelName={channelName} />
        <div className="fixed z-10 bottom-0 left-0 right-0 flex justify-center pb-4">
          <Link
            className="px-5 py-3 text-base font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-40"
            href="/"
          >
            End Call
          </Link>
        </div>
      </AgoraRTCProvider>
    </div>
  );
}

export default Call;
