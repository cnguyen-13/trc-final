import { Power3 } from "gsap"

const DISTANCE = 3
const DURATION = 0.1
const EASE = Power3.easeOut

export const FOREGROUND_ANIMATION = {
	x: -DISTANCE,
	y: -DISTANCE,
	border: "1px solid #210e0d",
	duration: DURATION,
	ease: EASE,
}

export const BACKGROUND_ANIMATION = {
	x: DISTANCE,
	y: DISTANCE,
	duration: DURATION,
	ease: EASE,
}
