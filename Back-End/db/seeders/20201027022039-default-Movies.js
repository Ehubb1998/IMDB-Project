'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert("Movies", [
      {
        title: "Iron Man", description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 2, 2008"
      },
      {
        title: "Iron Man 2", description: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 7, 2010"
      },
      {
        title: "The Incredible Hulk", description: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "June 13, 2008"
      },
      {
        title: "Captain America: The First Avenger", description: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super- Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "July 22, 2011"
      },
      {
        title: "Thor", description: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 6, 2011"
      },
      {
        title: "Thor: The Dark World", description: "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "November 8, 2013"
      },
      {
        title: "Thor: Ragnarok", description: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "November 3, 2017"
      },
      {
        title: "Iron Man 3", description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 3, 2013"
      },
      {
        title: "The Avengers", description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 4, 2012"
      },
      {
        title: "Avengers: Age of Ultron", description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 1, 2015"
      },
      {
        title: "Avengers: Infinity War", description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "April 27, 2018"
      },
      {
        title: "Avengers: Endgame", description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "April 26, 2019"
      },
      {
        title: "Captain America: The Winter Soldier", description: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "April 4, 2014"
      },
      {
        title: "Captain America: Civil War", description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 6, 2016"
      },
      {
        title: "Guardians of the Galaxy", description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "August 1, 2014"
      },
      {
        title: "Guardians of the Galaxy Vol.2", description: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 5, 2017"
      },
      {
        title: "Ant-Man", description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "July 17, 2015"
      },
      {
        title: "Ant-Man and the Wasp", description: "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "July 6, 2018"
      },
      {
        title: "Doctor Strange ", description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "November 4, 2016"
      },
      {
        title: "Spider-Man: Homecoming", description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "July 7, 2017"
      },
      {
        title: "Black Panther", description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "February 16, 2018"
      },
      {
        title: "Captain Marvel", description: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "March 8, 2019"
      },
      {
        title: "Spider-Man: Far from Home", description: "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "July 2, 2019"
      },
      {
        title: "Spider-Man", description: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 3, 2002"
      },
      {
        title: "Spider-Man 2", description: "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "June 30, 2004"
      },
      {
        title: "Spider-Man 3", description: "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.", genre: "Action", subGenre: "Comic-Book Action", releaseDate: "May 4, 2007"
      },

    ]),
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
