// Network first strategy
self.addEventListener("fetch", (event) => {
	event.respondWith(
		fetch(event.request) // I go to the network ALWAYS
			.catch((error) => {
				// if the network is down, I go to the cache
				return caches.open("assets").then((cache) => {
					return cache.match(request);
				});
			})
	);
});
