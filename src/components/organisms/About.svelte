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
				<a href="https://github.com/xwedx00" target="_blank" rel="noreferrer">
					<span>open source</span>
				</a>
			</Tooltip>
			as a developer, which is probably the reason why you've ended up here.
		</p>
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
</style>
