<script>
	import Social from '../atoms/Social.svelte';
</script>

<div class="socials-container">
	<Social icon="github" tip="Abhishek-Mallick" link="https://github.com/Abhishek-Mallick" />
	<Social icon="discord" tip="abhishek-mallick09" link={`https://www.linkedin.com/in/abhishek-mallick09/`} />
	<Social icon="email" tip="mallickabhishek97@gmail.com" link="mailto:mallickabhishek97@gmail.com" />
</div>

<style>
	.socials-container {
		display: flex;
		gap: 0.75rem;
	}
</style>
