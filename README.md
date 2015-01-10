# Here's Your Fuckin' Papers

## In Brief

*Here's Your Fuckin' Papers* is like *Papers, Please* from the other side of the counter: as the poor hapless person having to keep up with visa requirements to enter any country. Through minigames and ever-changing requirements the player gets a sense of the arduousness of the visa process - one faced by many populations worldwide without much attention or understanding.

## Background

The visa process is long, arduous, and pointless in a lot of ways. You get asked tons of invasive and pointless questions (such as "have you ever committed a genocide?") that don't seem to have any relationship to reality. You have to fulfil arbitrary requirements (that change randomly all the time), have to keep up with mounds of paperwork, and have to pay time, money, and sanity to get it all together. 

And then, even if you do fulfill all the requirements, you still may not get approved.

Trying to explain the sheer headache of this process is difficult: if you've never had to face it - especially if you come from a country and background [where you don't really need a visa to travel most places](http://www.straitstimes.com/sites/straitstimes.com/files/20140418/VISA_Index_2014_04_11_Web.pdf) - you wouldn't necessarily understand. Yet if you're not alert and prepared, [you could get into serious trouble](http://www.forbes.com/sites/deborahljacobs/2012/11/21/plan-before-you-travel-without-a-visa-you-might-need-to-stay-home/) - and for some people this risk is too much. Some of us can't just pack up our bags and hop on a plane: we have to [make some complicated calculations](http://www.visamapper.com/) based on who we are, where we're from, where we're going, why we're going, and what we've done.

## Comparison to *Papers, Please*

The closest game (or overall pop cultural artifact) that has presented the visa conundrum is the acclaimed indie game *Papers, Please*, where the player works as an Immigration officer that has to cross-check passports, IDs, and entry permits against the ever-changing regulations of a Soviet-esque country. Throughout the game people attempt to enter the country through legitimate, plainly false, or questionable means: fake passports, unclear names and genders, forged permits, pleas of being let in as refugees. The game adds another element of stress: the number of passports processed each game-day affects the amount of take-home pay, which goes towards food, heating, rent, and medicine for the officer's family.

*Papers, Please* does give a very good sense of the overwhelming feeling of keeping up with entry requirements, and demonstrates the various ways and reasons people migrate. However, its focus is on the Immigration official, working on behalf of The Man, who does not reward you for compassion or mercy but rather for how closely you follow the rules. 

One of our team members (Creatrix Tiara), who has dealt with a lifetime of immigration bureaucracy, felt that the game both cut too close to home and forced her to sympathize with an entity that usually has given her much grief and harm. *Here's Your Fuckin' Papers*, created at the GXDev Game Jam 2015, is an attempt at portraying what it feels like to be on the other side of the counter - a side Tiara knows all too well.

## Gameplay Structure

![Flowchart of *Here's Your Fuckin' Papers*](http://i.imgur.com/MrPNlLB.png?1)

The game has a few phases:

* The entry interview
* The requirements, with minigame checkpoints
* The final approval or denial process

Along the way random factors either based on the input of the player (stretch goal) or chosen by the computer affect the gameplay options as well as the final result. There is also an option to "expedite" the visa process monetarily.

Occasionally the process may be subject to "crashing": the game seems to hang on load, forcing the player to restart. Any unsaved progress would be lost (or the game could be extra evil and erase any saved progress). Sometimes the requirements also change, requiring the player to replay the minigames or play new ones.

### Entry Interview

The entry interview starts off with the player being asked for the name, gender, and country of origin. All answers are open-ended. Sometimes the player's answer is challenged by the bureaucrat (determined at random).

A stretch goal would be to have the player's answers determine the rest of the gameplay - the minigames and/or the end score.

### Requirements

The player has to visit different checkpoints to complete minigame "requirements". The player has to travel to each checkpoint while "escorting" some paperwork; the paperwork trails behind them slowly, so often the player has to stop and wait for the paperwork to catch up.

Each checkpoint has a different minigame that reflects some part of the visa application process. Winning each checkpoint is necessary to move forward and get the visa approved - but it's not always that easy. Winning certain minigames may also unlock other minigames/requirements.

Some possible minigames include:

* **Wait For The Stars To Align**: A match-3 game where the only important match is three stars in a row. However, it takes a long time for all three stars to appear on the board.
* **Invisible Wall Maze**: The player faces a seemingly open space and needs to get from one end to another. However, as the player travels through, they realise that there are invisible walls, and the player needs to navigate through these walls to get to the other side.
* **Photo Perfect**: The player has to align a passport photo the right way. Any small mistakes render the photo invalid and the player has to start again.

Other minigames are also possible; ideas are much welcomed!

### Final process

The scores from the minigames (and possibly the interview questions) are calculated in addition to a randomized luck score. If the total score reaches a certain threshold, the visa is approved; if not, it's denied and the player starts over.

## Extra Gameplay Elements

### Randomness

Randomness plays a huge part both in this game and in the real-world visa process. Even with the most perfect applications/gameplay, the player still may not succeed in winning/obtaining a visa.

Randomness can be added to the game in:

* The questions asked by the bureaucrat
* The followup responses made by the bureaucrat, both in type and quantity
* The types and amount of requirement checkpoints/minigames
* The specific needs of each checkpoint, such as the target score or end goal
* Changes in requirements, such as requiring the player to replay a minigame for a different goal (or because all progress has been erased, like a lost document) or play new games
* The chance of expedition being denied
* The overall approval scoring
* The minimum target approval score

### Expedition

In the real world, visas can be expedited - approved faster and sometimes with more convenience to the applicant - through extra payment. There are two ways that expedition can be bought:

1. Earning in-game money via mini-games or the escort game - this is very rare and amounts are low
2. Paying with real money via in-app purchases

While expedition makes it much more likely that the visa will be approved/the player will win the game, it is **not** a guaranteed win: there is still a chance that the player may lose. Either the added score boost from the expedition money is not enough to push the total amount to a win, or the expedition is denied entirely (possibly assumed to be a bribe) and causes negative scoring in the approval process.

If the player does lose, there are no refunds (just like in real life) and the player will need to start again with zero expedition dollars.

### Fake Crashes

Occasionally the game may seem like it has hung or crash; things take a while to load, and the player assumes (sometimes rightly, sometimes wrongly) that they need to restart the game to continue. Any unsaved progress will be lost.

This fake crash would be most commonly encountered when the player submits their "application" (completing all minigames and submitting their scores plus any expedition money), simulating how online visa application sites sometimes crash on the last day due to tons of simultaneous submissions. The fake crash can also hit during the requirements stage, sometimes leading to "lost" data on completed minigames (forcing the player to replay).

## User-created Content

This game has potential to incorporate user-created content both in gameplay and through identity-related markers, much like badges and achievements. Some possible avenues include:

* User-created minigames
* User-created visas, allowing players to create visas that represent themselves, an affiliation (nationality, gender, sexuality, favourite brands and pop culture, etc), or a work of art, and exchange them with other players
* User-created passports to hold the above visas

These especially have strong potential to be created in collaboration with non-profits, social justice organizations, clubs, and businesses as a way to gain membership and awareness or create community.
