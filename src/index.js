// for the host or parent page
export { autoInitFrames, Framer } from './framer.js';

// for the frame or child page
export {
  initFrame,
  initFrameAndPoll,
  sendFrameHeight,
  sendHeightOnLoad,
  sendHeightOnPoll,
  sendHeightOnResize,
} from './frames.mjs';
