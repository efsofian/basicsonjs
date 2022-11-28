// Cache first strategy
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches
			.match(event.request) // searching in the cache
			.then((response) => {
				if (response) {
					// The request is in the cache
					return response; // cache hit
				} else {
					// We need to go to the network
					return fetch(event.request); // cache miss
				}
			})
	);
});
