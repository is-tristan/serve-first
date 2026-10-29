"use client";

// Imports
import { useId, useRef } from "react";
import { usePathname } from "next/navigation";
import { useInView } from "motion/react";

// Styles
import styles from "@/styles/components/decoration/line-decoration.module.scss";

const variants = {
    bannerTopRight: {
        width: 428,
        height: 369,
        clip: <rect width="428" height="369" fill="white" />,
        lines: [
            { d: "M638.598 369.775C636.032 367.361 633.408 365.049 630.676 362.785C585.7 325.43 521.697 309.195 462.198 319.965C428.924 325.978 397.655 339.82 364.552 346.583C331.448 353.345 293.615 351.811 268.693 330.726C239.374 305.912 237.637 263.088 245.188 226.428C260.134 154.053 302.436 88.1926 316.383 15.7097C327.314 -41.2312 318.917 -100.601 294.61 -153.329", colorClass: "strokePrimaryAlt" },
            { d: "M430.948 175.475C308.793 194.029 179.005 160.822 92.4642 79.0345C34.9503 24.68 -3.3558 -46.4091 -60.7771 -100.88C-70.0088 -109.631 -80.1203 -117.926 -90.8504 -125.56", colorClass: "strokeSecondary" },
        ],
    },
    bannerBottomLeft: {
        width: 327,
        height: 320,
        clip: <rect width="327" height="320" fill="white" />,
        lines: [
            { d: "M-272.616 0.0762095C-270.051 2.49007 -267.427 4.80136 -264.695 7.06567C-219.718 44.4209 -155.716 60.6555 -96.2163 49.8856C-62.9422 43.8731 -31.6738 30.0303 1.42962 23.2682C34.5331 16.506 72.3667 18.0401 97.2886 39.1244C126.608 63.9388 128.345 106.763 120.793 143.423C105.847 215.798 63.5459 281.658 49.5989 354.141C38.6675 411.082 47.0647 470.452 71.3717 523.18", colorClass: "strokeSecondary" },
            { d: "M-64.9668 194.375C57.188 175.822 186.977 209.028 273.517 290.816C331.031 345.17 369.337 416.26 426.759 470.731C435.99 479.481 446.102 487.777 456.832 495.411", colorClass: "strokePrimaryAlt" },
        ],
    },
    footer: {
        width: 523,
        height: 504,
        clip: <rect width="684.897" height="384.959" fill="white" transform="matrix(-0.652502 0.757787 0.757787 0.652502 446.897 0)" />,
        lines: [
            { d: "M763.504 52.9956C760.938 55.4094 758.314 57.7207 755.582 59.985C710.606 97.3403 646.603 113.575 587.104 102.805C553.83 96.7925 522.561 82.9497 489.458 76.1875C456.355 69.4254 418.521 70.9595 393.599 92.0438C364.28 116.858 362.543 159.682 370.094 196.342C385.04 268.717 427.342 334.577 441.289 407.06C452.22 464.001 443.823 523.371 419.516 576.099", colorClass: "strokeFooterA" },
            { d: "M555.854 247.294C433.7 228.741 303.911 261.947 217.37 343.735C159.856 398.09 121.55 469.179 64.129 523.65C54.8973 532.4 44.7858 540.696 34.0557 548.33", colorClass: "strokeFooterB" },
        ],
    },
};

function LineDecorationSvg({ variant, className, playInView }) {

    const ref = useRef(null);
    const clipId = useId();
    const isInView = useInView(ref, { once: true, amount: 0.25 });
    const { width, height, clip, lines } = variants[variant];
    const isPlaying = playInView ? isInView : true;

    return (

        <svg
            ref={ref}
            className={`${styles.lineDecoration} ${className}`}
            data-playing={isPlaying ? "true" : "false"}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
        >

            <g clipPath={`url(#${clipId})`}>

                {lines.map((line, index) => (

                    <path
                        key={index}
                        className={`${index % 2 === 0 ? styles.drawForward : styles.drawReverse} ${styles[line.colorClass]}`}
                        pathLength="1"
                        d={line.d}
                        strokeWidth="37.4424"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                ))}

            </g>

            <defs>

                <clipPath id={clipId}>

                    {clip}

                </clipPath>

            </defs>

        </svg>

    );

}

export default function LineDecoration({ variant, className = "", playInView = false }) {

    const pathname = usePathname();

    return (

        <LineDecorationSvg key={pathname} variant={variant} className={className} playInView={playInView} />

    );

}
