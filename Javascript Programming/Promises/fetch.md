## fetch api
-----------------

the global fetch() method starts rhe process of fetching a resource from the network
returning a promises which is fulfilled once the response is available.

A fetch() promise only reject when a network error is encountered.

A fetch() promise doesn't reject on HTTP errors ( 404 etc) instead a then()
handler must check the Response.ok and/or Response.status properties.
