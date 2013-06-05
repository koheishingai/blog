---
layout: post
title: Rob Pike's Dream Setup and Nitrous.IO
---

Rob Pike had an awesome description of his [dream
setup](http://rob.pike.usesthis.com/) on UsesThis a few weeks ago and my
eyes gleamed with excitement upon reading this paragraph:

> I want no local storage anywhere near me other than maybe caches. No
> disks, no state, my world entirely in the network. Storage needs to be
> backed up and maintained, which should be someone else's problem, one
> I'm happy to pay to have them solve. Also, storage on one machine
> means that machine is different from another machine. At Bell Labs we
> worked in the Unix Room, which had a bunch of machines we called
> "terminals". Latterly these were mostly PCs, but the key point is that
> we didn't use their disks for anything except caching. The terminal
> was a computer but we didn't compute on it; computing was done in the
> computer center. The terminal, even though it had a nice color screen
> and mouse and network and all that, was just a portal to the real
> computers in the back. When I left work and went home, I could pick up
> where I left off, pretty much.

If this isn't a stronger endorsement of the future we envision at
[Nitrous.IO](https://www.nitrous.io/), then I don't know what is. While a
lot of regular users are jumping aboard the 'thin computing revolution',
us developers are still hanging on to Steve Jobs' metaphorical trucks.
We want the raw computing power of our computers &ndash; but clinging to
the past also means we are encumbered by its weighty baggage. We still
spend hours setting up development environments; we can't upgrade
computers and OS's quickly without worrying about whether it breaks our
rubygems; we can't collaborate in real-time with a team-mate
half-a-globe away; and we can't code on Chromebooks, (much to the
chagrin of a certain [Linus Torvalds](https://plus.google.com/+LinusTorvalds/posts/EBgLFSHEFAK)).

### It needn't be a dream

We at Nitrous.IO have been coding on remote boxes for the last few months
and it has been quite liberating. I've downgraded my home computer to
Snow Leopard (my old iMac just couldn't handle Mountain Lion), bought a
new office laptop, and haven't skipped a beat with my work. By wrapping
our development in tmux sessions, we can even maintain cursor positions
as and when we move from our office laptop to the home desktop (and
back). Since we're all vim/emacs users, it hasn't been that much of a pain
moving to this brave new world, we realize that many users love their
Textmates, Sublime Texts and Eclipses and so our vision for Nitrous.IO is
a platform which will enable you to connect to your development
environment in many different ways.

Stay tuned.

