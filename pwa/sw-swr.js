// State while revalidate strategy
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			// Even if the response is in the cache, we fetch it
			// and update the cache for future usage
			const fetchPromise = fetch(event.request).then((networkResponse) => {
				caches.open("assets").then((cache) => {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				});
			});
			// We use the currently cached version if it's there
			return response || fetchPromise; // cached or a network fetch
		})
	);
});
