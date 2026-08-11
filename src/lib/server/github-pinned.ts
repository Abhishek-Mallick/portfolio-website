import { env } from '$env/dynamic/private';
import type { Repo } from '../../util/types';
import { FALLBACK_PINNED_REPOS } from '../github';

const PINNED_REPOS_QUERY = `
	query ($username: String!) {
		user(login: $username) {
			pinnedItems(first: 6, types: REPOSITORY) {
				nodes {
					... on Repository {
						name
						description
						url
						homepageUrl
						stargazerCount
						forkCount
						owner {
							login
						}
						primaryLanguage {
							name
							color
						}
					}
				}
			}
		}
	}
`;

type GraphQLPinnedRepo = {
	name: string;
	description: string | null;
	url: string;
	homepageUrl: string | null;
	stargazerCount: number;
	forkCount: number;
	owner: { login: string };
	primaryLanguage: { name: string; color: string } | null;
};

export async function fetchPinnedRepos(username: string): Promise<Repo[]> {
	const token = env.GITHUB_TOKEN;

	if (!token) {
		return FALLBACK_PINNED_REPOS;
	}

	try {
		const response = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
				'User-Agent': 'portfolio-website'
			},
			body: JSON.stringify({
				query: PINNED_REPOS_QUERY,
				variables: { username }
			})
		});

		if (!response.ok) {
			return FALLBACK_PINNED_REPOS;
		}

		const payload = await response.json();

		if (payload.errors?.length) {
			return FALLBACK_PINNED_REPOS;
		}

		const nodes: GraphQLPinnedRepo[] =
			payload.data?.user?.pinnedItems?.nodes?.filter(Boolean) ?? [];

		if (!nodes.length) {
			return FALLBACK_PINNED_REPOS;
		}

		return nodes.map((node) => {
			const owner = node.owner.login;
			return {
				owner,
				repo: node.name,
				link: node.url,
				description: node.description ?? '',
				image: `https://opengraph.githubassets.com/1/${owner}/${node.name}`,
				website: node.homepageUrl ?? '',
				language: node.primaryLanguage?.name ?? '',
				languageColor: node.primaryLanguage?.color ?? '',
				stars: String(node.stargazerCount),
				forks: node.forkCount
			};
		});
	} catch {
		return FALLBACK_PINNED_REPOS;
	}
}
