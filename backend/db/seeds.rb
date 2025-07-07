puts "Seeding search stats..."

search_stats_data = [
  # Persons
  { kind: 'person', query: 'Luke Skywalker', count: 12 },
  { kind: 'person', query: 'Darth Vader', count: 9 },
  { kind: 'person', query: 'Leia Organa', count: 7 },
  { kind: 'person', query: 'Han Solo', count: 8 },
  { kind: 'person', query: 'Obi-Wan Kenobi', count: 6 },
  { kind: 'person', query: 'Yoda', count: 10 },
  { kind: 'person', query: 'Chewbacca', count: 5 },
  { kind: 'person', query: 'Padmé Amidala', count: 4 },
  { kind: 'person', query: 'Palpatine', count: 3 },
  { kind: 'person', query: 'Boba Fett', count: 2 },
  { kind: 'person', query: 'Lando Calrissian', count: 4 },
  { kind: 'person', query: 'Qui-Gon Jinn', count: 3 },
  { kind: 'person', query: 'Mace Windu', count: 2 },
  { kind: 'person', query: 'Count Dooku', count: 1 },
  { kind: 'person', query: 'Rey', count: 8 },
  { kind: 'person', query: 'Finn', count: 5 },
  { kind: 'person', query: 'Poe Dameron', count: 6 },
  { kind: 'person', query: 'Kylo Ren', count: 7 },
  { kind: 'person', query: 'Jyn Erso', count: 3 },
  { kind: 'person', query: 'Cassian Andor', count: 2 },
  { kind: 'person', query: 'Saw Gerrera', count: 1 },
  { kind: 'person', query: 'Rose Tico', count: 2 },
  { kind: 'person', query: 'General Hux', count: 1 },
  { kind: 'person', query: 'Admiral Ackbar', count: 2 },
  { kind: 'person', query: 'Wedge Antilles', count: 1 },
  # Movies
  { kind: 'movie', query: 'A New Hope', count: 15 },
  { kind: 'movie', query: 'The Empire Strikes Back', count: 13 },
  { kind: 'movie', query: 'Return of the Jedi', count: 11 },
  { kind: 'movie', query: 'The Phantom Menace', count: 7 },
  { kind: 'movie', query: 'Attack of the Clones', count: 6 },
  { kind: 'movie', query: 'Revenge of the Sith', count: 8 },
  { kind: 'movie', query: 'The Force Awakens', count: 9 },
  { kind: 'movie', query: 'The Last Jedi', count: 5 },
  { kind: 'movie', query: 'The Rise of Skywalker', count: 4 },
  { kind: 'movie', query: 'Rogue One', count: 6 },
  { kind: 'movie', query: 'Solo', count: 3 },
  { kind: 'movie', query: 'The Clone Wars', count: 2 },
  { kind: 'movie', query: 'Ewoks: The Battle for Endor', count: 1 },
  { kind: 'movie', query: 'Caravan of Courage', count: 1 },
  { kind: 'movie', query: 'Rebels', count: 2 },
  { kind: 'movie', query: 'Resistance', count: 1 }
]

SearchStat.destroy_all

search_stats_data.each do |attrs|
  SearchStat.create!(attrs)
end

puts "Search stats seeds added successfully."
