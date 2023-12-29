import TikTokStrings from "../theme/TikTokStrings";

export const getDuration = (duration: number): string => {
    const seconds = duration % 60;
    const minutes = Math.floor((duration / 60) % 60);
    const hours = Math.floor(duration / 3600);
  
    let preFix = seconds;
    let postFix = TikTokStrings.secondPostFix;
  
    if (hours > 0) {
      preFix = hours;
      postFix = TikTokStrings.hourPostFix;
    } else if (minutes > 0) {
      preFix = minutes;
      postFix = TikTokStrings.minutePostFix;
    }
  
    return `${preFix} ${postFix}`;
  };