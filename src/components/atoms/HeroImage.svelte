<script lang="ts">
	let zoom: boolean;
	let xRotation: number;
	let yRotation: number;

	function enterRotate3D(e: MouseEvent) {
		zoom = true;
		let img = e.target as HTMLDivElement;
		yRotation = 13 * ((e.offsetX - img.clientHeight / 2) / img.clientWidth);
		xRotation = -13 * ((e.offsetY - img.clientWidth / 2) / img.clientHeight);
	}

	function leaveRotate3D() {
		zoom = false;
		yRotation = 0;
		xRotation = 0;
	}
</script>

<div class="img-container">
	<img
		src="/icons/profile.jpeg"
		alt="Abhishek Mallick"
		width="320"
		height="320"
		loading="eager"
		fetchpriority="high"
		on:mousemove={enterRotate3D}
		on:mouseleave={leaveRotate3D}
		class="img"
		style:transform="perspective(500px) {zoom ? 'scale(0.9)' : ''} rotateX({xRotation}deg) rotateY({yRotation}deg)"
	/>
</div>

<style lang="scss">
	@keyframes float {
		0% {
			transform: translateY(7px);
		}
		50% {
			transform: translateY(-7px);
		}
		100% {
			transform: translateY(7px);
		}
	}

	.img {
		border-radius: 50%;
		width: 320px;
		height: 320px;
		max-width: 100%;
		object-fit: cover;
		object-position: center;
		z-index: 1;
		display: block;
		transition: width 0.4s var(--bezier-one), transform 0.4s var(--bezier-one);
		align-self: start;
		background-color: var(--neutral-one);

		@media screen and (max-width: 768px) {
			display: none;
		}

		@media screen and (max-width: 1240px) {
			width: clamp(260px, 32vw, 320px);
			height: clamp(260px, 32vw, 320px);
		}
	}

	.img-container {
		z-index: 1;
		animation: float 6s ease-in-out infinite;
		animation-play-state: running;
		background-color: rgba(255, 255, 255, 0);
		padding: 0%;
		border: 0;

		@media (max-width: 1240px) {
			display: flex;
			justify-content: center;
		}
	}
</style>