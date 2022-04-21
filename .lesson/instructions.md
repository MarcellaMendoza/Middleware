# Instructions  

---

You're a part of a sting operation that's been tasked with 
helping the police catch some bad guys in Amarillo, TX.

How are you, a software developer, going to help? Easy.
You'll use middleware to collect information on anyone
and everyone who uses your decoy website.

Inside the `middle` function in 'index.js', add code that
does the following if the client machine's IP address has
not been seen before:
- print out the client's IP address
- add the IP address to the array of `seenIPs`
- print out the client's operating system
- add one to the counter
- print out the current value of the counter

You will also need to implement two Express routes that
send the correct HTML file to requesters.

<h3>Helpful hints</h3>

---

You can access the IP address of a client's machine from
the HTTP request like this:
`req.headers['x-forwarded-for']`

Similarly, you can access the OS of a client's machine like this:
`req.headers['sec-ch-ua-platform']`

Finally, remember that Express executes middleware functions
and routes in a sequence. That means that you will need to
explicitly call the `next` function once your 
middleware has executed.
