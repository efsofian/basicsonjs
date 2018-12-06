# this

####   context web :> this === windows

####   context node :> this === global

###### context node module :> this === module.exports

###### context function non strict :> this === global

###### context function use strict  :> this === undefined

###### context 'new' call constructor function  :> this === scope of the func

###### context method call inside function  :> this === scope of the func where belong the call

###### Difference between call and apply ? the args! :> (c)all for (c)omma  (a)pply for (a)rray

###### .bind() to avoid the context lost when used in a callback

###### when .bind() used, apply and call will not override

###### arrow func doesnt have their own this, it use the context one
