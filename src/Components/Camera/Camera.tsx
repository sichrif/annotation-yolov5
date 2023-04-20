import ReactPlayer from 'react-player'
import styles from './style.module.css'
import React from 'react';
import { formatTime } from '../../utils/format';
import Control from '../Controls/Control';


export default function Camera() {
    const videoPlayerRef = React.useRef<any>(null);
    const controlRef = React.useRef<any>(null);
    let count = 0;

    const [videoState, setVideoState] = React.useState<any>({
        playing: false,
        muted: false,
        volume: 0.5,
        playbackRate: 1.0,
        played: 0,
        seeking: false,
        buffer: true,
    });

    //Destructuring the properties from the videoState
    const { playing, muted, volume, playbackRate, played, seeking, buffer } =
        videoState;

    const currentTime = videoPlayerRef.current
        ? videoPlayerRef.current.getCurrentTime()
        : "00:00";
    const duration = videoPlayerRef.current
        ? videoPlayerRef.current.getDuration()
        : "00:00";

    const formatCurrentTime = formatTime(currentTime);
    const formatDuration = formatTime(duration);

    const playPauseHandler = () => {
        //plays and pause the video (toggling)
        setVideoState({ ...videoState, playing: !videoState.playing });
    };

    const rewindHandler = () => {
        //Rewinds the video player reducing 5
        videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5);
    };

    const handleFastFoward = () => {
        //FastFowards the video player by adding 10
        videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
    };

    //console.log("========", (controlRef.current.style.visibility = "false"));
    const progressHandler = (state) => {
        if (count > 3) {
            console.log("close");
            controlRef.current.style.visibility = "hidden"; // toggling player control container
        } else if (controlRef.current.style.visibility === "visible") {
            count += 1;
        }

        if (!seeking) {
            setVideoState({ ...videoState, ...state });
        }
    };

    const seekHandler = (e: any, value: any) => {
        setVideoState({ ...videoState, played: value / 100 });
        videoPlayerRef.current.seekTo(value / 100);
    };

    const seekMouseUpHandler = (e, value) => {
        console.log(value);

        setVideoState({ ...videoState, seeking: false });
        videoPlayerRef.current.seekTo(value / 100);
    };

    const volumeChangeHandler = (e, value) => {
        const newVolume = parseFloat(value) / 100;

        setVideoState({
            ...videoState,
            volume: newVolume,
            muted: Number(newVolume) === 0 ? true : false, // volume === 0 then muted
        });
    };

    const volumeSeekUpHandler = (e, value) => {
        const newVolume = parseFloat(value) / 100;

        setVideoState({
            ...videoState,
            volume: newVolume,
            muted: newVolume === 0 ? true : false,
        });
    };

    const muteHandler = () => {
        //Mutes the video player
        setVideoState({ ...videoState, muted: !videoState.muted });
    };

    const onSeekMouseDownHandler = (e) => {
        setVideoState({ ...videoState, seeking: true });
    };

    const mouseMoveHandler = () => {
        controlRef.current.style.visibility = "visible";
        count = 0;
    };

    const bufferStartHandler = () => {
        console.log("Bufering.......");
        setVideoState({ ...videoState, buffer: true });
    };

    const bufferEndHandler = () => {
        console.log("buffering stoped ,,,,,,play");
        setVideoState({ ...videoState, buffer: false });
    };

    return (
        <div

            style={{
                position: 'relative',
            }}>
            <div className="player__wrapper" onMouseMove={mouseMoveHandler}>
                {buffer || playing && <div className={styles.imageCover}></div>}
                {playing && <div className={styles.info}>
                    <div className={styles.infoRed}>53 km/h</div>
                    <div className={styles.infoGreen}>1.56 km</div>

                </div>}
                <div onClick={playPauseHandler}>
                    <ReactPlayer
                        ref={videoPlayerRef}
                        className="player"
                        url="https://cdn.flowplayer.com/a30bd6bc-f98b-47bc-abf5-97633d4faea0/hls/de3f6ca7-2db3-4689-8160-0f574a5996ad/playlist.m3u8"
                        width="100%"
                        height="100%"
                        playing={playing}
                        volume={volume}
                        muted={muted}
                        onProgress={progressHandler}
                        onBuffer={bufferStartHandler}
                        onBufferEnd={bufferEndHandler}
                    />
                </div>
                {/* {buffer && !playing && <p>Loading</p>} */}
                <div style={playing ? { opacity: 1 } : { opacity: 0 }}>
                    <Control
                        controlRef={controlRef}
                        onPlayPause={playPauseHandler}
                        playing={playing}
                        onRewind={rewindHandler}
                        onForward={handleFastFoward}
                        played={played}
                        onSeek={seekHandler}
                        onSeekMouseUp={seekMouseUpHandler}
                        volume={volume}
                        onVolumeChangeHandler={volumeChangeHandler}
                        onVolumeSeekUp={volumeSeekUpHandler}
                        mute={muted}
                        onMute={muteHandler}
                        duration={formatDuration}
                        currentTime={formatCurrentTime}
                        onMouseSeekDown={onSeekMouseDownHandler}
                    /></div>
            </div>
        </div>
    )
}