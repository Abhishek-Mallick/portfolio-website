<script>
	import Social from "../atoms/Social.svelte";

	let emailCopied = false;
	let copyTimeout;

	/**
	 * @param {string} text
	 */
	function copyToClipboard(text) {
	  try {
		navigator.clipboard.writeText(text);
		emailCopied = true;
		clearTimeout(copyTimeout);
		copyTimeout = setTimeout(() => (emailCopied = false), 2500);
	  } catch {
		const element = document.createElement('textarea');
		const previouslyFocusedElement = document.activeElement;

		element.value = text;

		element.setAttribute('readonly', '');
		element.style.position = 'absolute';
		element.style.left = '-9999px';

		document.body.appendChild(element);
		element.select();
		document.execCommand('copy');
		document.body.removeChild(element);

		if (previouslyFocusedElement) {
		  // @ts-ignore
		  previouslyFocusedElement.focus();
		}
		emailCopied = true;
		clearTimeout(copyTimeout);
		copyTimeout = setTimeout(() => (emailCopied = false), 2500);
	  }
	}
</script>

<div class="socials-container">
	<Social icon="github" tip="Abhishek-Mallick" link="https://github.com/Abhishek-Mallick" />
	<Social icon="discord" tip="abhishek-mallick09" link={`https://www.linkedin.com/in/abhishek-mallick09/`} />

	<a href="mailto:mallickabhishek97@gmail.com" on:click|preventDefault={() => copyToClipboard('mallickabhishek97@gmail.com')}>
		<Social icon="email" tip={emailCopied ? 'Copied!!' : 'mallickabhishek97@gmail.com'} />
	</a>
</div>
  
  <style>
	  .socials-container {
		  display: flex;
		  gap: 0.75rem;
	  }
  </style>
  