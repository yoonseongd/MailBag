







MailBag will be in two parts: a server, which will act as a proxy and
will be what communicates with a mail server somewhere, and the
client, which will talk to our server to do its work.
• The MailBag server will communicate with an email server whose
details will be stored in a text file on the MailBag server (so this is a
single-user system), and it will communicate with that email server
via the popular IMAP protocol for retrieving mail (sorry POP3 users!)
and SMTP for sending messages.
• The MailBag server will provide an API to the client that allows it to
get a list of mailboxes for the account, a list of messages for a selected
mailbox, and pertinent message details for display by the client.
It will allow the user to delete and send messages. Finally, the server
will provide for storage of contacts and the associated add and delete
functions for maintaining them.
• This chapter is all about the server, so details about the client will
come in the next chapter. However, in high-level terms, it helps to have
a picture in your mind. I’m sure you’ve seen a webmail application like
Gmail before, and MailBag will be no different fundamentally.
The client will be a web-based application that can be viewed in any web
browser. It will provide the user a list of mailboxes in their account,
the ability to see a list of messages within a selected mailbox, and the
ability to choose and view a message, as well as delete it. It will also,
of course, allow the user to compose and send a new message to an
entered email address. We’ll also give them a list of contacts that they
can add people to (and remove from) and initiate an email too quickly.