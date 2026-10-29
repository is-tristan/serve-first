"use client";

// Imports
import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Styles
import styles from "@/styles/components/screens/products/operational-excellence/vision/components/scroll-banner-frames.module.scss";
import scrollStyles from "@/styles/components/screens/products/operational-excellence/vision/components/scroll-banner-ui.module.scss";

// Text
const serveFirstText = '<svg width="294" height="50" viewBox="0 0 294 50" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.65083 18.1482C7.75166 16.4052 9.26529 14.9833 11.1917 13.8825C13.1182 12.7817 15.2434 12.2312 17.5674 12.2312C20.5946 12.2312 23.0103 13.1333 24.8145 14.9374C26.6492 16.711 27.5665 19.1267 27.5665 22.1846C27.5665 23.1019 27.4748 24.0651 27.2913 25.0742C26.8327 27.6428 25.9153 29.9056 24.5393 31.8627C23.1632 33.8197 21.4661 35.3333 19.4479 36.4036C17.4603 37.4738 15.3198 38.0089 13.0265 38.0089C10.6719 38.0089 8.73017 37.4738 7.20124 36.4036C5.67232 35.3027 4.64794 33.8808 4.1281 32.1379L3.16488 37.642H0L6.00868 3.69984H9.17356L6.65083 18.1482ZM24.0347 25.0742C24.1876 24.1569 24.2641 23.3771 24.2641 22.735C24.2641 20.3193 23.5455 18.4387 22.1083 17.0932C20.7017 15.7172 18.8364 15.0292 16.5124 15.0292C14.8 15.0292 13.1641 15.442 11.6046 16.2676C10.045 17.0932 8.71488 18.2705 7.61405 19.7994C6.51323 21.3284 5.77934 23.1019 5.4124 25.1201C5.25951 25.9763 5.18306 26.7408 5.18306 27.4135C5.18306 29.7986 5.90166 31.6945 7.33885 33.1011C8.77604 34.5077 10.6413 35.211 12.9347 35.211C14.7083 35.211 16.3595 34.8135 17.8884 34.0184C19.4479 33.1928 20.7628 32.0156 21.8331 30.4866C22.9339 28.9271 23.6678 27.123 24.0347 25.0742Z" fill="white"/> <path d="M35.9514 12.5982L40.6758 33.835L52.6473 12.5982H55.9956L34.6671 49.43H31.2729L38.2448 37.4585L32.3737 12.5982H35.9514Z" fill="white"/> <path d="M206.279 10.9593H203.632V16.6593H206.211V36.8807H212.42V16.6593H218.323V10.9593H212.488C212.963 7.39676 214.964 5.93783 219.205 5.93783V0.203905C211.266 0.203905 206.821 3.93605 206.245 10.9253L206.279 10.9593Z" fill="white"/> <path d="M224.498 0.000486247C220.019 -0.0673709 220.087 6.98977 224.498 6.88799C228.909 6.98977 228.977 -0.0673709 224.498 0.000486247Z" fill="white"/> <path d="M227.585 10.9593H221.376V36.8807H227.585V10.9593Z" fill="white"/> <path d="M230.91 22.3593V36.8808H237.119V22.3593C237.119 18.22 239.596 16.1843 243.735 16.1843V10.4843C235.864 10.4843 230.877 14.4879 230.877 22.3593H230.91Z" fill="white"/> <path d="M252.523 17.9486C253.677 14.4539 260.157 16.6593 263.177 19.3057L266.502 14.4879C262.057 9.56823 246.077 7.97359 246.314 18.0504C246.314 27.5504 260.394 24.8022 260.394 29.2468C259.377 33.5218 251.709 31.045 249.198 28.3647L245.873 33.2504C250.148 38.2718 266.739 39.7647 266.603 29.0432C266.603 19.3397 252.523 21.7486 252.523 17.9486Z" fill="white"/> <path d="M275.459 0.577081H269.25V24.9378C269.25 31.011 271.862 34.9467 276.85 36.5074C278.377 34.9806 279.768 33.2842 280.989 31.486C273.423 31.5878 275.798 21.6128 275.425 16.6592H281.328V10.9592H275.425V0.577081H275.459Z" fill="white"/> <path d="M77.2819 17.7791C78.4355 14.2844 84.9159 16.4898 87.9355 19.1362L91.2605 14.3183C86.8159 9.39869 70.8355 7.80405 71.073 17.8808C71.073 27.3808 85.1534 24.6326 85.1534 29.0773C84.1355 33.3523 76.4676 30.8755 73.9569 28.1951L70.6319 33.0808C74.9069 38.1023 91.498 39.5951 91.3623 28.8737C91.3623 19.1701 77.2819 21.5791 77.2819 17.7791Z" fill="white"/> <path d="M106.834 10.4165C89.0213 9.77184 89.1231 37.7968 106.834 37.1522C113.111 37.1522 117.725 33.8951 119.421 28.6361H112.636C109.514 33.3522 100.489 31.9272 99.8445 25.7861H120.1C121.152 17.2701 115.689 10.2468 106.834 10.3826V10.4165ZM100.32 20.1201C102.22 14.8272 111.448 14.8611 113.314 20.1201H100.32Z" fill="white"/> <path d="M123.051 22.1899V36.7113H129.26V22.1899C129.26 18.0506 131.737 16.0149 135.876 16.0149V10.3149C128.005 10.3149 123.018 14.3184 123.018 22.1899H123.051Z" fill="white"/> <path d="M156.573 10.7896L150.262 28.3646L143.917 10.7896H137.233L147.039 36.711H153.451L163.257 10.7896H156.573Z" fill="white"/> <path d="M176.489 10.4165C158.676 9.77184 158.778 37.7968 176.489 37.1522C182.766 37.1522 187.38 33.8951 189.076 28.6361H182.291C179.169 33.3522 170.144 31.9272 169.5 25.7861H189.755C190.807 17.2701 185.344 10.2468 176.489 10.3826V10.4165ZM169.975 20.1201C171.875 14.8272 181.103 14.8611 182.969 20.1201H169.975Z" fill="white"/> <path d="M289.81 36.5077C291.647 36.5077 293.135 35.019 293.135 33.1827C293.135 31.3463 291.647 29.8577 289.81 29.8577C287.974 29.8577 286.485 31.3463 286.485 33.1827C286.485 35.019 287.974 36.5077 289.81 36.5077Z" fill="white"/> </svg>';

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

export default function ScrollBannerFrame1({ isActive = true }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.25 });

    return (

        <div
            className={`${styles.scrollBannerFrame} ${styles.frame1}`}
            ref={ref}
            data-active={isActive ? true : undefined}
            aria-hidden={!isActive}
            inert={!isActive ? true : undefined}
            role="group"
            aria-label="VISION introduction"
        >

            <div className={`container ${styles.scrollBannerFrameContainer}`}>

                <div className={styles.scrollBannerFrameContent}>

                    <div className={styles.frameContentHeader}>

                        <motion.span
                            className={styles.frameEyebrow}
                            initial={fadeUp.hidden}
                            animate={isInView ? fadeUp.visible : fadeUp.hidden}
                            transition={{ duration: 0.5, delay: 0.85 }}
                        >
                            Introducing

                        </motion.span>

                        <div className={styles.frameTitleContainer}>

                            <motion.h1
                                className={styles.frameTitle}
                                initial={fadeUp.hidden}
                                animate={isInView ? fadeUp.visible : fadeUp.hidden}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                VISION

                            </motion.h1>

                            <motion.span
                                role="img"
                                aria-label="by Serve First"
                                dangerouslySetInnerHTML={{ __html: serveFirstText }}
                                initial={fadeUp.hidden}
                                animate={isInView ? fadeUp.visible : fadeUp.hidden}
                                transition={{ duration: 0.5, delay: 1.1 }}
                            />

                        </div>

                    </div>

                    <motion.p
                        className={styles.frameContentDescription}
                        initial={fadeUp.hidden}
                        animate={isInView ? fadeUp.visible : fadeUp.hidden}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >

                        Continuous compliance monitoring for every location, checked against your own standards, not a sample.

                    </motion.p>

                </div>

                <motion.div
                    className={scrollStyles.scrollIndicator}
                    initial={fadeUp.hidden}
                    animate={isInView ? fadeUp.visible : fadeUp.hidden}
                    transition={{ duration: 0.5, delay: 1.75 }}
                    aria-hidden="true"
                >

                    <span>Scroll</span>

                    <span className={scrollStyles.scrollIndicatorIcon} />

                </motion.div>

            </div>

        </div>

    );

}
