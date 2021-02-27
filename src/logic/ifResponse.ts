/**
 * Takes a condition (a function which receives a Request or a Response and returns a boolean)
 * and returns a function that immediately adds the handlers if the condition is true
 * when applied to the Response object.
 */
export default function (condition, ...handlers) {
	return async (manager) => {
		if (condition(manager)) {
			for (const handler of handlers) {
				manager.addResponseHandler(handler, { immediate: true });
			}
		}
	};
}