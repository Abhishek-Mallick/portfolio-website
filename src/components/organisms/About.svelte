<script>
	import Tooltip from '../atoms/Tooltip.svelte';

	// i didnt write this idk
	let getAge = () => {
		let birthDate = new Date('2003/03/09');
		const ageMs = Date.now() - birthDate.getTime();
		const preciseAge = (ageMs / 31536000000).toFixed(8);
		return preciseAge;
	};

	let age = getAge();
	setInterval(() => {
		age = getAge();
	}, 1000);
</script>

<section id="about" class="wrapper">
	<div class="text">
		<h3>Bio</h3>
		<p>
			Hey there, I'm Abhishek! I am a third-year undergrad at KIIT. Currently I'm working as a SDE intern at Deepkapha.
			I thrive on the excitement of learning and exploring new things within the tech industry. Constantly seeking ways to grow and expand my knowledge, I actively engage in various opportunities that challenge and push me to my full potential.
			<br>
			<span>Hackathons</span> have become one of my favorite avenues for personal and professional growth, as I love collaborating with like-minded individuals and building innovative solutions. 

			I like contributing to
			<Tooltip tip="it's true">
				<a href="https://github.com/Abhishek-Mallick" target="_blank" rel="noreferrer">
					<span>open source</span>
				</a>
			</Tooltip>
			as a developer, which is probably the reason why you've ended up here.
		</p>
	</div>
	<!-- Experience section -->
	<div class="text">
		<h3 style="margin-bottom: 1rem;">Experience</h3>
		<!-- <div class="repo-card" style="margin-bottom:1rem;">
			<div id="top-part">
				<div class="info">
					<h6>Software Developer Intern</h6>
				</div>
				<div>
					<img src="icons/jpmc.png" alt="open in new tab" id="open-exp" />
				</div>
			</div>
			<div>
				<h3>JP Morgan Chase and Co.</h3>
				<h6>Bengaluru</h6>
			</div>
		</div> -->
		<div class="repo-card">
			<div id="top-part">
				<div class="info">
					<h6>Software Developer Intern</h6>
				</div>
				<div>
					<img src="icons/dk.png" alt="open in new tab" id="open-exp" />
				</div>
			</div>
			<div>
				<h3>Deepkapha</h3>
				<h6>Remote | May - August'23</h6>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	section {
		margin-bottom: 6rem;
		display: grid;
		gap: 4.5rem;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}

	.text {
		position: relative;
		line-height: 1.75rem;
	}

	span {
		font-weight: 400;
		font-family: var(--font-two);
		font-size: 0.9rem;
		background-color: var(--neutral-one);
		border-radius: 7px;
		color: var(--yellow);
		padding: 0.2rem 0.5rem 0.2rem;
		width: fit-content;
	}

	a {
		text-decoration: none;
	}

	.text::before {
		@include outlineText(
			$content: '╭',
			$translateX: 630%,
			$translateY: -5%,
			$fontSize: 150px,
			$opacity: 0.22
		);
	}

	@media (max-width: 868px) {
		section {
			display: flex;
			flex-direction: column;
			align-items: normal;
		}
	}
	.title {
		display: flex;
		justify-content: center;
		margin-top: 0;

		@media (max-width: 868px) {
			justify-content: left;
		}
	}
	.repo-card {
		padding: 1rem 1.25rem;
		background-color: var(--neutral-two);
		border-radius: 8px;
		min-height: 140px;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		transition: transform 0.3s var(--bezier-one), box-shadow 0.3s var(--bezier-one);
		justify-content: space-between;
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		background-blend-mode: overlay;
		border: 1px solid var(--neutral-four);

		&:hover {
			transform: translateY(-2px);
			box-shadow: 0px 15px 25px -10px rgba(0, 0, 0, 0.25);

			#open {
				filter: brightness(1.3);
			}
		}
	}

	.shimmer {
		animation-duration: 2.2s;
		animation-fill-mode: forwards;
		animation-iteration-count: infinite;
		animation-name: shimmer;
		animation-timing-function: linear;
		background: #ddd;
		background: linear-gradient(
			to right,
			var(--neutral-two) 8%,
			var(--neutral-one) 18%,
			var(--neutral-two) 33%
		);
		background-size: 1200px 100%;
	}

	@keyframes shimmer {
		0% {
			background-position: -1200px 0;
		}
		100% {
			background-position: 1200px 0;
		}
	}

	a {
		text-decoration: none;
		color: var(--white);
		height: 100%;
		border-radius: 8px;
	}

	img {
		height: 16px;
		width: auto;
	}

	h2 {
		display: inline-block;
		margin-bottom: 1rem;
	}

	#star {
		transform: translateY(-1px);
	}

	#fork {
		height: 17px;
	}

	#pfp {
		border-radius: 50%;
		height: 16px;
	}

	#top-part {
		display: flex;
		justify-content: space-between;
	}

	#open {
		height: 20px;
		transition: filter 0.3s var(--bezier-one);
	}

	span {
		color: var(--yellow);
	}

	.grid {
		gap: 0.8rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-bottom: 3rem;
		position: relative;

		&:before {
			@include outlineText($content: '⤬', $translateX: 760%, $translateY: -35%);
		}

		@media (max-width: 600px) {
			grid-template-columns: 1fr;
		}

		@media (max-width: 868px) {
			margin-bottom: 2rem;
		}
	}

	.dot {
		height: 11px;
		width: 11px;
		border-radius: 50%;
		display: inline-block;
	}

	.info {
		display: flex;
		gap: 0.2rem;
		align-items: center;

		&-container {
			display: flex;
			gap: 0.9rem;
		}
	}
	.logo-container {
		display: flex;
		align-items: center;
	}

	#open-exp {
		height: 38px;
		width: auto;
		margin-right: 8px;
		transition: filter 0.3s var(--bezier-one);
	}

</style>
