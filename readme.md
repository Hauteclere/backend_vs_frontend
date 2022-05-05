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

---

## Part 0: What A Website Really Is

If you've spent time in the last thirty years using computers, you are no doubt used to the idea that they contain files, and that certain programs that run on those computers can be used to open, read, and manipulate those files. Here's an example: I can open an image file in MS Paint to view/change its contents...

![Editing a silly photo of me in MS Paint](./images/me2.0.png)
> An improvement, some would say...

The key thing to note here is that a website is just another file. The program we use to view it in is called a **web browser** (ex: Chrome, Firefox, Edge...). The only difference is that instead of being stored on our computer, websites are stored on *other people's* computers. To access them our computer sends out a request through the internet, and when the website owner's computer gets that request, it responds by sending us the file.

![A computer requesting a website and a webserver responding](./images/website.png)

The basic file-type that our web browsers display to is is `.html`. These files are written in the HyperText Markup Language, or HTML, and they contain all the information our browser needs to draw the website on the screen. 

> In fact, when we web developers are writing an HTML file, we often separate out all the information related to appearance/style, and put that into another file - a `.css` file. But the browser takes these two files and mashes them together when it draws the website, so that distinction isn't too important here.

Here's an example of a **very** simple website that I coded as an HTML/CSS file combo: 

You can see the code I wrote for it here: [./tree/html_only]()