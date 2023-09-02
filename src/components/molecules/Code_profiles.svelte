<script>
	import Social from '../atoms/Social.svelte';
</script>

<div class="socials-container">
	<Social icon="leetcode" tip="Abhishek-2003" link="https://leetcode.com/Abhishek-2003/" />
	<Social icon="geeksforgeeks" tip="mallickabhishek64" link={`https://auth.geeksforgeeks.org/user/mallickabhishek64/`} />
</div>

<style>
	.socials-container {
		display: flex;
		gap: 0.75rem;
	}
</style>
