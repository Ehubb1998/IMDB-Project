'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const movies = await queryInterface.bulkInsert("Movies", [
      {
        title: "Iron Man", description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 2, 2008", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Iron Man 2", description: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 7, 2010", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "The Incredible Hulk", description: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "June 13, 2008", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Captain America: The First Avenger", description: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super- Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "July 22, 2011", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Thor", description: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 6, 2011", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Thor: The Dark World", description: "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "November 8, 2013", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Thor: Ragnarok", description: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "November 3, 2017", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Iron Man 3", description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 3, 2013", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "The Avengers", description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 4, 2012", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Avengers: Age of Ultron", description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 1, 2015", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Avengers: Infinity War", description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "April 27, 2018", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Avengers: Endgame", description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "April 26, 2019", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Captain America: The Winter Soldier", description: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "April 4, 2014", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Captain America: Civil War", description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 6, 2016", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Guardians of the Galaxy", description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "August 1, 2014", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Guardians of the Galaxy Vol.2", description: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 5, 2017", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Ant-Man", description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "July 17, 2015", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Ant-Man and the Wasp", description: "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "July 6, 2018", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Doctor Strange ", description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "November 4, 2016", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Spider-Man: Homecoming", description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "July 7, 2017", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Black Panther", description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "February 16, 2018", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Captain Marvel", description: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "March 8, 2019", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Spider-Man: Far from Home", description: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "July 2, 2019", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Spider-Man", description: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 3, 2002", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Spider-Man 2", description: "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "June 30, 2004", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Spider-Man 3", description: "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 4, 2007", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Spider-Man: Into the Spider-Verse", description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "December 14, 2018", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "The Amazing Spider-Man", description: "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "July 3, 2012", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "The Amazing Spider-Man 2", description: "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 2, 2014", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Venom", description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "October 5, 2018", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "X-Men", description: "In a world where mutants (evolved super-powered humans) exist and are discriminated against, two groups form for an inevitable clash: the supremacist Brotherhood, and the pacifist X-Men.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "July 14, 2000", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "X-Men: Dark Phoenix", description: "Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix, causing the X-Men to decide if her life is worth more than all of humanity.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "June 7, 2019", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "X-Men Origins: Wolverine", description: "The early years of James Logan, featuring his rivalry with his brother Victor Creed, his service in the special forces team Weapon X, and his experimentation into the metal-lined mutant Wolverine.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 1, 2009", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "X-Men: Apocalypse", description: "In the 1980s the X-Men must defeat an ancient all-powerful mutant, En Sabah Nur, who intends to thrive through bringing destruction to the world.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 27, 2016", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "X-Men: First Class", description: "In the 1960s, superpowered humans Charles Xavier and Erik Lensherr work together to find others like them, but Erik's vengeful pursuit of an ambitious mutant who ruined his life causes a schism to divide them.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "June 3, 2011", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "X-Men: Days of Future Past", description: "The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 23, 2014", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "X2: X-Men United", description: "When anti-mutant Colonel William Stryker kidnaps Professor X and attacks his school, the X-Men must ally with their archenemy Magneto to stop him.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 2, 2003", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "X-Men: The Last Stand", description: "The human government develops a cure for mutations, and Jean Gray becomes a darker uncontrollable persona called the Phoenix who allies with Magneto, causing escalation into an all-out battle for the X-Men.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 26, 2006", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Logan", description: "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.", genre: "Drama, Action", subGenre: "Complex Drama, Comic-Book Action", releaseDate: "March 3, 2017", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "The Wolverine", description: "Wolverine comes to Japan to meet an old friend whose life he saved years ago, and gets embroiled in a conspiracy involving yakuza and mutants.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "July 26, 2013", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Deadpool", description: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.", genre: "Comedy, Action", subGenre: "Adult Comedies, Comic-Book Action", releaseDate: "February 12, 2016", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Deadpool 2", description: "Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg Cable.", genre: "Comedy, Action", subGenre: "Adult, Comedies, Comic-Book Action", releaseDate: "May 18, 2018", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Blade", description: "A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "August 21, 1998", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Blade II", description: "Blade forms an uneasy alliance with the vampire council in order to combat the Reapers, who are feeding on vampires.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "March 22, 2002", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Blade: Trinity", description: "Blade, now a wanted man by the FBI, must join forces with the Nightstalkers to face his most challenging enemy yet: Dracula.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "December 8, 2004", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Superman Returns", description: "Superman returns to Earth after spending five years in space examining his homeworld Krypton. But he finds things have changed while he was gone, and he must once again prove himself important to the world.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "June 28, 2006", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Batman v Superman: Dawn of Justice", description: "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "March 25, 2016", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Superman", description: "An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home's first and greatest superhero.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "December 15, 1978", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Superman II", description: "Superman agrees to sacrifice his powers to start a relationship with Lois Lane, unaware that three Kryptonian criminals he inadvertently released are conquering Earth.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "June 19, 1981", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Man of Steel", description: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when other survivors of his home planet invade Earth.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "June 14, 2013", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Wonder Woman", description: "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "June 2, 2017", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Suicide Squad", description: "A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "August 5, 2016", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Justice League", description: "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his new-found ally, Diana Prince, to face an even greater enemy.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "November 17, 2017", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Shazam!", description: "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "April 5, 2019", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Joker", description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.", genre: "Drama", subGenre: "Dark Drama", releaseDate: "October 4, 2019", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Birds of Prey: And the Fantabulous Emancipation of One Harley Quinn", description: "After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "February 7, 2020", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "The Dark Knight", description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", genre: "Action, Drama", subGenre: "Hand-to-hand Action, Crime Drama", releaseDate: "July 18, 2008", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "The Dark Knight Rises", description: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.", genre: "Action", subGenre: "Comic-Book Action, Hand-to-hand Action", releaseDate: "July 20, 2012", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Batman Begins", description: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "June 15, 2005", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Batman", description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "June 23, 1989", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Batman Returns", description: "While Batman deals with a deformed man calling himself the Penguin wreaking havoc across Gotham with the help of a cruel businessman, a female employee of the latter becomes the Catwoman with her own vendetta.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "June 19, 1992", createdAt: new Date(), updatedAt: new Date()
      },
      {
        title: "Aquaman", description: "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "December 21, 2018", createdAt: new Date(), updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Movies", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
