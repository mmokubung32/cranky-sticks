// One template per line:  type | pose | face | prop | message   (use ~ for a small second line)
// type: A advice, J joke, L lesson, S satire, R sarcasm, C cranky
// pose: st sh pt cr fp rn ch hp lc sl   face: f a s d w   prop: mug phone book cloud bulb zzz clock plant laptop coin -
window.RAW = `
A|st|f|mug|Drink water. Your problem is probably thirst, not destiny.
A|pt|a|-|Reply to the email. It will not reply to itself.
A|hp|s|-|Do the scary thing first. Then be insufferable about it.
A|lc|f|book|Read the instructions. They were written by someone who suffered.
A|sh|f|-|Nobody knows what they're doing. Some just say it louder.
A|st|s|plant|Touch grass. Then ask it for a refund.
A|cr|a|-|Say no. It's a complete sentence and a free gift.
A|pt|f|clock|Start now. Future you is tired of your excuses.
A|fp|d|-|Sleep. Everything looks worse at 2 a.m. including you.
A|ch|w|coin|Save a little every week. Boring works.
A|hp|f|-|Back up your files. Backups are love letters to future panic.
A|st|a|phone|Put the phone down. It has been lying to you all day.
A|lc|s|bulb|Write it down. Your brain is a leaky bucket with confidence.
A|sh|s|-|Ask for help. People love being useful and slightly superior.
A|rn|w|-|Walk away from the argument. Run if it involves relatives.
A|st|f|laptop|Take the break. The laptop will still be broken later.
A|cr|s|-|Be kind. It's cheap, effective, and annoys the right people.
J|st|f|-|I'm not lazy. I'm in energy-saving mode.
J|sh|d|-|I have 99 problems and 97 of them are open tabs.
J|fp|f|-|My bed and I are in a very committed relationship.
J|st|s|mug|Coffee: because adulting is a team sport and I'm the bench.
J|rn|w|-|I'm on a seafood diet. I see food and run toward it.
J|sl|d|-|Today's mood: buffering at 99%.
J|ch|s|-|I finished the whole thing! Ignore the other 40 things.
J|hp|a|-|I'm not arguing. I'm explaining why I'm right, loudly.
J|pt|s|-|"You're right." My least favourite sentence to say.
J|st|f|plant|I killed a cactus. It took years and real talent.
J|sh|f|phone|My phone is at 1% and so is my patience.
J|cr|s|-|I'm fluent in sarcasm and mild panic.
J|sl|f|zzz|Sleep is just death's trailer.
J|st|w|clock|Time flies when you ignore it.
J|lc|f|-|Let me overthink that for you.
J|rn|a|-|I run on caffeine, spite, and four hours of sleep.
J|ch|f|coin|I'm rich in vibes and broke in everything else.
L|lc|f|book|Lesson one: nobody reads the terms. Lesson two: they know.
L|pt|s|-|The deadline is not a suggestion. It's a swamp monster.
L|lc|s|bulb|Done beats perfect. Perfect is still in the drafts folder.
L|st|f|clock|Ten minutes of prep saves three hours of regret.
L|sh|d|-|Lesson learned: it was never going to fix itself.
L|lc|a|-|If it's urgent, it should have been scheduled. Class dismissed.
L|hp|f|coin|Cheap things get expensive. Expensive things are also expensive.
L|pt|f|-|Failure is a teacher with terrible office hours.
L|st|s|-|Everything you avoid gets bigger. Like laundry. And feelings.
L|cr|f|-|You can't fix people. You can barely fix your router.
L|lc|s|-|Rest isn't a reward. It's the maintenance schedule.
L|sh|f|-|Asking early is smarter than panicking late.
L|pt|w|bulb|New plan: do it badly, then do it better.
L|st|a|-|The group project is always one person's problem.
L|fp|f|-|Today I learned the same thing again. Cool.
L|lc|f|laptop|Save before you celebrate.
L|ch|s|-|Small wins count, even if nobody claps.
S|lc|s|-|Introducing a four-hour meeting about shortening meetings.
S|st|s|phone|Disrupting the industry by adding a subscription to a toaster.
S|hp|s|coin|Passion is great. Paying for it is the missing part.
S|pt|s|laptop|We're a family here. A family that works weekends.
S|sh|f|-|Synergy: when nobody knows who's responsible, together.
S|lc|s|-|Thought leader: someone who posted a quote and went to lunch.
S|st|f|mug|Hustle culture: because rest was getting too much attention.
S|cr|s|clock|"Fast-paced environment" means nothing was planned.
S|ch|s|-|Rebrand: the art of fixing nothing and printing new mugs.
S|st|a|laptop|Mandatory fun: please enjoy yourself by 4 p.m.
S|pt|f|-|Let's circle back. Preferably into the sun.
S|lc|f|book|Self-help books: 300 pages to say "drink water and sleep".
S|sh|s|phone|Productivity app: organizes the tasks you'll never do.
S|hp|s|-|Work-life balance: one is yours, the other keeps calling.
S|rn|w|-|Agile means running in circles, but with sticky notes.
S|st|f|bulb|This idea is a game-changer. We have no game and no change.
S|cr|a|-|Quiet quitting is just doing your job. Shocking.
R|st|s|-|Oh great, another meeting. My life was missing exactly that.
R|sh|s|-|No, please, tell me more about how tired you are.
R|cr|f|-|Sure, I love Mondays. Said no one without a hostage.
R|pt|s|-|Wow. Revolutionary. Did you invent common sense?
R|st|s|mug|Great idea. Let's ignore the red flags and decorate them.
R|hp|s|-|A "quick question"? Cute.
R|fp|f|-|I'm so glad I stayed awake for this.
R|st|f|clock|Take your time. I'm only aging a little.
R|lc|s|-|Fascinating. Keep talking. I have a nap scheduled.
R|sh|s|-|I'd love to help, but I'm allergic to unpaid labour.
R|cr|a|phone|Seen at 9:14. Will reply when I feel like a person.
R|ch|s|-|Thanks for the feedback. It's been filed under "who cares".
R|st|s|laptop|Sorry, I thought "urgent" meant important. My bad.
R|hp|f|-|A surprise. My least favourite flavour.
R|pt|s|bulb|Thanks for the tip. I'd never thought of breathing.
R|sh|f|-|Oh no, my sympathy hasn't loaded.
C|pt|a|-|Get off my lawn. Also my Wi-Fi. Also my chair.
C|st|a|phone|Back in my day, "buffering" was a bad cook.
C|hp|a|-|Nobody wants to work anymore. Including me. I lead by example.
C|cr|a|-|Kids today don't even know what a loading screen is.
C|fp|a|-|Why is everything an app? I just want a door.
C|pt|a|clock|Five minutes early is on time. On time is late.
C|st|a|mug|Decaf is just warm brown water. Fight me.
C|hp|a|-|Why does every website need my location? I'm home. Obviously.
C|lc|a|-|Stop saying "per my last email". Say "I'm mad".
C|sh|a|plant|My plant is judging me. It has a point.
C|st|a|laptop|Turn it off and on again. It's not magic. It's necessary.
C|rn|a|-|I'm not late. Everyone else is just early.
C|cr|a|-|Please stop talking until I've had my coffee.
C|pt|a|-|An update? I just got used to the old one.
C|sl|d|zzz|I'm not grumpy. I'm under-rested and over-informed.
C|ch|a|-|Today was a lot. Tomorrow can wait outside.
`;
