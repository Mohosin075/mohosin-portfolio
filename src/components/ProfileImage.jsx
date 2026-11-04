import { useState } from "react";
import PropTypes from "prop-types";
import small from "../assets/portrait/mohosin-320.webp";
import medium from "../assets/portrait/mohosin-640.webp";
import large from "../assets/portrait/mohosin-960.webp";

export default function ProfileImage({ sizes }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div role="img" aria-label="Md Mohosin Ali" className="profile-image-fallback">
        <span aria-hidden="true">MA</span>
      </div>
    );
  }
  return (
    <img
      src={medium}
      srcSet={`${small} 320w, ${medium} 640w, ${large} 960w`}
      sizes={sizes}
      width={1280}
      height={1229}
      alt="Md Mohosin Ali"
      loading="eager"
      {...{ fetchpriority: "high" }}
      decoding="async"
      style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
      onError={() => setFailed(true)}
    />
  );
}

ProfileImage.propTypes = { sizes: PropTypes.string.isRequired };
