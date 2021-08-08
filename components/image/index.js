import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const Image = ({ src, alt, className, linkType = "undef", target, url }) => {
  const targetWindow = target && "_blank";

  return (
    <>
      {linkType === "link" ? (
        <Link href={url}>
          <img src={src} alt={alt} className={className} />
        </Link>
      ) : linkType === "a" ? (
        <a href={url} rel="noopener noreferrer">
          <img src={src} alt={alt} className={className} />
        </a>
      ) : linkType === "link-a" ? (
        <Link href={url}>
          <a target={targetWindow} rel="noopener noreferrer">
            <img src={src} alt={alt} className={className} />
          </a>
        </Link>
      ) : (
        linkType === "undef" && (
          <img src={src} alt={alt} className={className} />
        )
      )}
    </>
  );
};
