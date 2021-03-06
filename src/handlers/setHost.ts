import setUrl from './setUrl';

export default function setHost(newHost: string) {
	return async ({ request }) => {
		const url = new URL(request.url);
		url.host = newHost;

		return setUrl(url)({ request });
	};
}
