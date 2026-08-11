<script lang="ts">
	import { onMount } from 'svelte';
	import type { Repo } from '../../util/types';
	import { GITHUB_USERNAME } from '$lib/github';
	import ButtonProjects from '../../components/atoms/ButtonProjects.svelte';
	import { goto } from '$app/navigation';
	import Tooltip from '../../components/atoms/Tooltip.svelte';

	function handleProjectsClick() {
		goto('/');
	}

	let repos: Repo[] = [];

	// Static array of repositories
	const staticRepos: Repo[] = [
		{
			link: 'https://github.com/Abhishek-Mallick/universal-box',
			owner: 'Abhishek-Mallick',
			repo: 'Universal Box',
			description: 'Universal-Box is your all-in-one solution for rapid code scaffolding and streamlined development. With a wide range of pre-built templates, this npm package simplifies the process of setting up boilerplate code for any project and offers single-command deployment.',
			languageColor: '#f1e05a',
			language: 'JavaScript',
			stars: 4,
			forks: 10
		},
        {
			link: 'https://github.com/Abhishek-Mallick/Togetherly',
			owner: 'Abhishek-Mallick',
			repo: 'Togetherly',
			description: 'Togetherly is a real-time digital whiteboarding web application that allows distributed teams to collaborate visually. Break geographical barriers, share ideas, and work in real-time, made using Next.js and Convex.',
			languageColor: '#f1e05a',
			language: 'JavaScript',
			stars: 8,
			forks: 2
		},
        {
			link: 'https://github.com/Abhishek-Mallick/JanSevak',
			owner: 'Abhishek-Mallick',
			repo: 'JanSevak',
			description: 'JanSevak is a AI powered HealthCare Management System. The system allows users to register as patients, book appointments, and predict diseases based on symptoms. Doctors can view and manage appointments. Additionally, the system provides information on various health-related topics through blog posts.',
			languageColor: '#2b7489',
			language: 'Python',
			stars: 6,
			forks: 0
		},
		{
			link: 'https://github.com/Abhishek-Mallick/Pluto',
			owner: 'Abhishek-Mallick',
			repo: 'Pluto',
			description: 'SaaS platform for building websites, managing projects, and creating custom dashboards. Designed for multivendor environments, it supports agency and sub-account management, unlimited funnel hosting, role-based access, and real-time performance tracking.',
			languageColor: '#007acc',
			language: 'TypeScript',
			stars: 10,
			forks: 4
		},
		{
			link: 'https://github.com/devhub-ai/devhub',
			owner: 'Abhishek-Mallick',
			repo: 'DevHub',
			description: 'Revolutionizing collaboration for innovation. Streamline your process by connecting with peers who complement your skills and interests, forming dynamic teams to tackle projects, hackathons, and more.',
			languageColor: '#007acc',
			language: 'TypeScript',
			stars: 20,
			forks: 8
		},
		{
			link: 'https://github.com/Abhishek-Mallick/FarmIntelli',
			owner: 'Abhishek-Mallick',
			repo: 'FarmIntelli',
			description: 'Empowering farmers with AI-driven insights for smarter agriculture. From predicting the best crops for your climate to optimizing fertilizer use and more, FarmIntelli guides you in making data-driven decisions for a more efficient and sustainable farming future.',
			languageColor: '#2b7489',
			language: 'Python',
			stars: 2,
			forks: 0
		}
	];

	onMount(async () => {
		try {
			const response = await fetch(
				`/api/pinned-repos?username=${encodeURIComponent(GITHUB_USERNAME)}`
			);
			if (!response.ok) throw new Error('Failed to fetch pinned repos');
			const fetchedRepos: Repo[] = await response.json();
			repos = [...fetchedRepos, ...staticRepos];
		} catch {
			repos = [...staticRepos];
		}
	});
</script>

<section class="wrapper" id="work" style="padding-top: 40px">
	<div class="title">
		<h2><span>My</span>:Projects</h2>
	</div>
	<div class="grid">
		{#if repos}
			{#each repos as { link, owner, repo, description, languageColor, language, stars, forks }}
				<a href={link} target="_blank" rel="noreferrer">
					<div class="repo-card">
						<div id="top-part">
							<div class="info">
								<img
									src="https://github.com/{owner}.png"
									alt="{owner}'s profile picture"
									id="pfp"
								/>
								<h6>{owner}</h6>
							</div>
							<div>
								<img src="/icons/open.svg" alt="open in new tab" id="open" />
							</div>
						</div>
						<div>
							<h3>{repo}</h3>
							<h6>{description}</h6>
						</div>
						<div class="info-container">
							<div class="info">
								<span class="dot" style="background-color: {languageColor}" />
								<h6>{language}</h6>
							</div>
							<div class="info">
								{#if stars}
									<img src="/icons/star.svg" id="star" alt="star" />
									<h6>{stars}</h6>
								{/if}
							</div>
							<div class="info">
								{#if forks}
									<img src="/icons/fork.svg" id="fork" alt="fork" />
									<h6>{forks}</h6>
								{/if}
							</div>
						</div>
					</div>
				</a>
			{/each}
		{:else}
			<div class="repo-card shimmer" />
			<div class="repo-card shimmer" />
			<div class="repo-card shimmer" />
			<div class="repo-card shimmer" />
			<div class="repo-card shimmer" />
			<div class="repo-card shimmer" />
		{/if}
	</div>
	<div style="display: flex; justify-content: center; align-items: center; padding-bottom: 40px">
		<ButtonProjects side on:click={handleProjectsClick}>Back to portfolio ↙</ButtonProjects>
	</div>			
</section>

<style lang="scss">
	@use '../../styles/mixins.scss' as *;

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
</style>
