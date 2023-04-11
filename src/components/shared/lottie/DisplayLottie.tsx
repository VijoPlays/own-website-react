import { Component, Suspense } from "react";
import Lottie from "react-lottie";

interface DisplayLottieProps {
  animationData: any;
  loop?: boolean;
}

class DisplayLottie extends Component<DisplayLottieProps> {
  render() {
    let loop = this.props.loop;
    if (loop === undefined) {
      loop = true;
    }

    const defaultOptions = {
      loop: loop,
      autoplay: true,
      animationData: this.props.animationData,
    };

    return (
      <Suspense>
        <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
      </Suspense>
    );
  }
}

export { DisplayLottie };
