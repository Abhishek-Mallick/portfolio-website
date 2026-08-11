import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { GITHUB_USERNAME } from '$lib/github';
import { fetchPinnedRepos } from '$lib/server/github-pinned';

export const GET: RequestHandler = async ({ url, setHeaders }) => {
	const username = url.searchParams.get('username') ?? GITHUB_USERNAME;

	if (!/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(username)) {
		return json({ error: 'Invalid username' }, { status: 400 });
	}

	const repos = await fetchPinnedRepos(username);

	setHeaders({
		'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400'
	});

	return json(repos);
};
