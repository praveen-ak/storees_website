import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 *
 * @param root0
 * @param root0.value
 */

type Props = {
    value: string;
    direction?: "up" | "down";
    className?: string;
    suffix?: string;
};

export default function Counter({
    value,
    direction = "up",
    className,
    suffix
}: Props) {
    let ref = useRef<HTMLSpanElement>(null);
    let motionValue = useMotionValue(direction === "down" ? value : '0');
    let springValue = useSpring(motionValue, {
        damping: 500,
        stiffness: 500,
    });
    let isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(direction === "down" ? '0' : value);
        }
    }, [motionValue, isInView]);

    useEffect(
        () =>
            springValue.on("change", (latest) => {
                if (ref.current) {
                    ref.current.textContent = Intl.NumberFormat("en-US").format(
                        latest
                    );
                    ref.current.textContent += suffix
                }
            }),
        [springValue]
    );

    return <span className={className} ref={ref} />;
}