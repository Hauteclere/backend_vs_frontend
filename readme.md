# Backend Vs Frontend: What's The Difference?

> Note to self: turn off notifications **now**! 🙃

Hi, I'm Oliver! I do web dev and dev ops and I also go hiking and occasionally climb/fall off cliffs in my spare time:

![Me hiking in my natural habitat](./images/me.jpg)


In this talk I'll going over an introductory explanation of what we mean when we talk about "the backend" or "the frontend" in the context of web development.

In the process, I'll be running through a little history as well so we can see how we got to where we are today, and maybe a little bit about where we are going...

## This Repo

Through the magic of the internet, this GitHub repo contains code for three different versions of a website. I'm going to be discussing each one through this talk, and when I do you'll be able to browse the code involved for each one. Don't worry if you're not familiar with web development or the specific languages that are in play here - this is an added extra, not a requirement for understanding.

Likewise, the text I've set out in this `readme.md` document is mostly for my own benefit - I'll be referring to it as I talk, but you don't need to read along here unless you find it helps. If you missed seeing me present in person, maybe you'll find it helpful to read through these notes!

Anyway, that's enough groundwork - let's talk web dev!
<br><br>

---
<br>

## Part 0: What A Website Really Is

If you've spent time in the last thirty years using computers, you are no doubt used to the idea that they contain files, and that certain programs that run on those computers can be used to open, read, and manipulate those files. Here's an example: I can open an image file in MS Paint to view/change its contents...

![Editing a silly photo of me in MS Paint](./images/me2.0.png)
> An improvement, some would say...

<br>
The key thing to note here is that a website is just another file. The program we use to view it in is called a **web browser** (ex: Chrome, Firefox, Edge...). The only difference is that instead of being stored on our computer, websites are stored on *other people's* computers. To access them our computer sends out a request through the internet, and when the website owner's computer gets that request, it responds by sending us the file.

![A computer requesting a website and a webserver responding](./images/website.png)
<br><br>

The basic file-type that our web browsers display to is is `.html`. These files are written in the HyperText Markup Language, or HTML, and they contain all the information our browser needs to draw the website on the screen. 

> NB: In fact, when we web developers are writing an HTML file, we often separate out all the information related to appearance/style, and put that into another file - a `.css` file. But the browser takes these two files and mashes them together when it draws the website, so that distinction isn't too important here.

Here's an example of a **very** simple website that I coded as an HTML/CSS file combo: 
<br><br>

![A very simple website containing a shopping list](./images/html_site.png)

You can see the code I wrote for it [here](https://github.com/Hauteclere/backend_vs_frontend/tree/html_only).

Great! So that's how websites work. Case closed. End of topic. Nothing more to say. I guess we can all go home now. ...Right?
<br>
<br>
## Part 1: The Bad Old Days

What I just described is the minimum viable configuration for looking at a webpage on your browser. It used to be all we had, back during 90s and early 00s, and for the simple case where I have a website and you want to look at it, it works just fine.

**However**. This has some problems.

1. Every time we want to see a new webpage, we need to request it again. 
1. If I ever want the website to change while you're looking at it, I need to set up some way to convince you to request a fresh copy of it. Maybe there's a button you can click that asks for a different version of the file...?
1. All of the work of creating and distributing the website has to take place on *my* computer! If a lot of people all ask me for different pages, that will be a lot of calculation for my poor little processor... 

If we had to come up with a metaphor for this style of website architecture, we could say that it was like a pizza delivery restaurant. I can call up and order a Hawaiian pizza whenever I want, and the restaurant will prepare it and send someone to bring it to me. If I later decide I want to have a garlic bread as well, I need to phone up again, place a new order, and wait for it to arrive.

![A humourously poorly edited image depicting pizza delivery](./images/pizza.png)

> We blew out the production budget for the year on this single image.

It's not the most efficient system, as you can imagine.

