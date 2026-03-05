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
			Hey, I'm Abhishek. I'm a Software Engineer at JP Morgan Chase & Co., working on the Account Opening and Activation flow — systems where getting it wrong isn't an option.
			<br /><br />
			I graduated from KIIT and have been building things ever since — from
			<span>Tunr</span>, a resume tuning and auto-apply tool for job hunters, to co-founding
			<span>Architech</span>, a platform that generates architectural diagrams from codebases and prompts, now used by 2k+ developers monthly.
			<br /><br />
			<span>Hackathons</span> are where a lot of this started — won Best Fintech at Solving for India, placed at BoostHacks and Hack for Health. They taught me how to build fast and think clearly under pressure.
			<br /><br />
			I like contributing to
			<Tooltip tip="it's true">
				<a href="https://github.com/Abhishek-Mallick" target="_blank" rel="noreferrer">
					<span>open source</span>
				</a>
			</Tooltip>
			— which is probably why you ended up here.
		</p>
	</div>
	<!-- Experience section -->
	<div class="text">
		<h3 style="margin-bottom: 1rem;">Experience</h3>
		<div class="experience-group experience-group--jpmc">
			<div class="repo-card repo-card--featured">
				<div id="top-part">
					<div class="info">
						<h6>SWE I</h6>
					</div>
					<div style="width: 200px; margin-top: 10px;">
						<img src="/icons/jpmc-transparent.png" alt="" id="open-exp" style="max-width: 100%; height: auto;" />
					</div>
				</div>
				<div>
					<h3>JP Morgan Chase and Co.</h3>
					<h6>Bengaluru | Jan'25 – Present</h6>
				</div>
			</div>
			<div class="repo-card repo-card--secondary">
				<div id="top-part">
					<div class="info">
						<h6>Software Developer Intern</h6>
					</div>
					<div style="width: 200px; margin-top: 10px;">
						<img src="/icons/jpmc-transparent.png" alt="" id="open-exp" style="max-width: 100%; height: auto;" />
					</div>
				</div>
				<div>
					<h3>JP Morgan Chase and Co.</h3>
					<h6>Bengaluru | May'24 – Dec'24</h6>
				</div>
			</div>
		</div>
		<div class="repo-card" style="margin-top: 1rem;">
			<div id="top-part">
				<div class="info">
					<h6>Software Developer Intern</h6>
				</div>
				<div>
					<img src="/icons/dk.png" alt="" id="open-exp" />
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
	@use '../../styles/mixins.scss' as *;

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
		}

		&--featured {
			border-left: 3px solid var(--yellow-opacity);
		}

		&--secondary {
			opacity: 0.88;
			border-color: var(--neutral-four);
			background-color: var(--neutral-three);

			&:hover {
				opacity: 1;
			}
		}
	}

	.experience-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 0;

		&--jpmc {
			margin-bottom: 0;
		}
	}

	.repo-card .badge {
		font-size: 0.7rem;
		font-weight: 400;
		background-color: var(--yellow-opacity);
		color: var(--neutral-one);
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		margin-left: 0.35rem;
		text-transform: none;
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

	#top-part {
		display: flex;
		justify-content: space-between;
	}

	span {
		color: var(--yellow);
	}

	.info {
		display: flex;
		gap: 0.2rem;
		align-items: center;
	}

	#open-exp {
		height: 38px;
		width: auto;
		margin-right: 8px;
		transition: filter 0.3s var(--bezier-one);
	}

</style>
