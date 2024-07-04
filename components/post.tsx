export default function Post() {
    return (
        <div className="flex flex-col items-center mb-10">

            <div className="max-w-xl mx-auto space-y-5 mt-10">

                <div className="">
                    <p className="sm:text-2xl font-semibold text-dblue">A first post.</p>
                    <p>July 3rd, 2024</p>
                </div>
                

                <p className="sm:text-xl mb-4">
                    Welcome to my blog, this will be a place where I will mainly post write-ups on small things I&apos;m 
                    working on, interesting technical discoveries I make, and perhaps down the line more career-oriented
                    discussions as I become more suited to talk on that sort of stuff. 
                </p>

                <p className="sm:text-xl mb-4"> 
                If I (hopefully) keep up with
                    this and don&apos;t let it immediately die out, it should be fun to revisit in a few decades and 
                    see what I&apos;ve gotten up to over the years. Yes, I realize how optimistic that sounds.
                </p>

                <p className="sm:text-xl">
                    Given that this post is mainly only meant as a testing ground for my actual website design,
                    I&apos;ll talk about a few small unrelated topics that capture the zeitgeist of my Summer, 2024.
                </p>

                <p className="sm:text-xl mb-4 font-semibold">How, and why, does this site exist?</p>

                <p className="sm:text-xl"> 
                    My current tech stack for webdev consists of Next.js, React.js, TypeScript, TailwindCSS, and a few other
                    things depending on what I&apos;m doing, though not for this site.
                </p>

                <p className="sm:text-xl">
                    Admittedly, I have not ventured beyond the world of React, due to a few simple reasons.
                    &#10;
                        &nbsp;1. I am not a web developer, so I don&apos;t feel it is worth my time.
                        &nbsp;2. I find React generally quite nice to build sites with.
                        &nbsp;3. The community is massive and it is easy to find examples.
                    
                </p>

                <p className="sm:text-xl">
                    Next.js follows naturally, and I tend to avoid JavaScript anytime I can unless it is non-optional.
                    Explicit types, interfaces, and classes make writing JS so painless in comparison. I think it is a
                    necessity in proper development, and it is no surprise that the industry is eating it up.
                </p>

                <p className="sm:text-xl">
                    I wanted to make a blog, honestly, to hold myself accountable in regards to building cool stuff
                    and documenting it thoroughly. I have gained so much from random articles I have found on Medium,
                    freeCodeCamp, and other developers personal sites - I hope I can contribute to the community, some
                    way, some how.
                </p>

                <p className="sm:text-xl mb-4 font-semibold">My plan to streamline future posts.</p>

                <p className="sm:text-xl">
                    Currently, I am typing this inside a .tsx file inside a &lt;p&gt;, and it sucks quite a bit.
                    Originally, I wanted to try and use MDX, which I very well may do, but I thought it could be
                    more fun to try and build a custom markdown parser myself. Hopefully, if all goes to plan,
                    all existing posts after this one will be written in some markdown. I will probably try
                    and mimic a popular markdown syntax, and then make a Python parser that generates the 
                    .tsx to represent it.
                </p>

                <p className="sm:text-xl mb-4 font-semibold">Thoughts on artificial intelligence.</p>

                <p className="sm:text-xl">
                    AI has become a major talking point in every sector of technology for at least the past 24 months.
                    Do I think this is a good thing? I&apos;m not so sure, but it certainly isn&apos;t surprising.
                    I will echo what I have heard from many other avid users of AI, in that I find it quite nice.
                    Building this site felt significantly easier, as I was able to find answers that could have taken
                    me hours by digging through documentation, in minutes.
                </p>

                <p className="sm:text-xl">
                    However, I think AI has a chokehold on investors and C-suite management to a comedic extent.
                    Every company seems to think they are now an AI company, despite them having little to no use case.
                    For a company like NVIDIA, this is great. Providing shovels never really backfires, so long as you
                    don&apos;t preemptively manufacture too many shovels before a major drought in demand.
                </p>

                <p className="sm:text-xl">
                    Recently, I saw a LinkedIn post that showcased their &apos;AI goalie&apos; they had set up
                    at some soccer game, where people could try and score and a robotically controlled poster
                    board goalie would move side to side blocking it. Calling this AI, to me, captures the
                    industry wide watering down of the term artificial intelligence. Anything that rubs shoulders
                    with data science is now, apparently, artificial intelligence.
                </p>

                <p className="sm:text-xl">
                    For now, it is a fun tool that has certainly improved my programming productivity by a solid
                    20% - 30% or so. Has it changed the world? I don&apos;t think so.
                </p>

                <p className="sm:text-xl mb-4 font-semibold">The job market, as a soon-to-be new grad.</p>

                <p className="sm:text-xl">
                    Anyone in my position, as a computer science graduate of 2025, is surely aware of the current
                    market conditions. They are not exactly ideal.
                </p>

                <p className="sm:text-xl">
                    I greatly enjoy programming, and unless this field takes a massive nosedive, I don&apos;t think
                    I see myself exiting. That being said, it is stressful times. My major glimmer of hope is that 
                    we will look back and admire this span of time as a major collapse in computing careers.
                    Or, maybe we look back and say, &apos;that was just the beginning of the end!&apos;
                </p>

                <p className="sm:text-xl">
                    I find this stuff sort of fun, so I don&apos;t mind having to devote a little
                    extra time here and there to stay afloat. That said, you won&apos;t find me doing
                    LeetCode in the retirement home. Hopefully by then, either Mark has perfected his Metaverse
                    and we all live happily ever after inside our headsets, or Elon has finished his autonomous
                    robots, and we all sit on the beach being served martinis by our silicon underlings. There
                    is a third option here, but I&apos;d rather not spell it out.
                </p>
            </div>
        </div>
    )
}