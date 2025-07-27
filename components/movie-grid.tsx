import { MovieCard } from "./movie-card"

const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    genre: ["Action", "Adventure", "Drama"],
    duration: "181 min",
    rating: 8.4,
    language: "English",
    image: "/images/movies/avengers-endgame.png",
    releaseDate: "2019-04-26",
    description: "The Avengers assemble once more to reverse the damage caused by Thanos.",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    director: "Anthony Russo, Joe Russo",
    price: "₹150 - ₹400",
  },
  {
    id: 2,
    title: "Spider-Man: No Way Home",
    genre: ["Action", "Adventure", "Sci-Fi"],
    duration: "148 min",
    rating: 8.2,
    language: "English",
    image: "/images/movies/spiderman-no-way-home.png",
    releaseDate: "2021-12-17",
    description: "Spider-Man's identity is revealed, bringing his superhero duties into conflict with his normal life.",
    cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
    director: "Jon Watts",
    price: "₹180 - ₹450",
  },
  {
    id: 3,
    title: "The Batman",
    genre: ["Action", "Crime", "Drama"],
    duration: "176 min",
    rating: 7.8,
    language: "English",
    image: "/images/movies/the-batman.png",
    releaseDate: "2022-03-04",
    description:
      "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Jeffrey Wright"],
    director: "Matt Reeves",
    price: "₹200 - ₹500",
  },
  {
    id: 4,
    title: "Top Gun: Maverick",
    genre: ["Action", "Drama"],
    duration: "130 min",
    rating: 8.3,
    language: "English",
    image: "/images/movies/top-gun-maverick.png",
    releaseDate: "2022-05-27",
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator.",
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
    director: "Joseph Kosinski",
    price: "₹160 - ₹380",
  },
  {
    id: 5,
    title: "Black Panther: Wakanda Forever",
    genre: ["Action", "Adventure", "Drama"],
    duration: "161 min",
    rating: 6.7,
    language: "English",
    image: "/images/movies/black-panther-wakanda-forever.png",
    releaseDate: "2022-11-11",
    description: "The people of Wakanda fight to protect their home from intervening world powers.",
    cast: ["Letitia Wright", "Lupita Nyong'o", "Danai Gurira"],
    director: "Ryan Coogler",
    price: "₹170 - ₹420",
  },
  {
    id: 6,
    title: "Thor: Love and Thunder",
    genre: ["Action", "Adventure", "Comedy"],
    duration: "119 min",
    rating: 6.2,
    language: "English",
    image: "/images/movies/thor-love-and-thunder.png",
    releaseDate: "2022-07-08",
    description: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher.",
    cast: ["Chris Hemsworth", "Natalie Portman", "Christian Bale"],
    director: "Taika Waititi",
    price: "₹150 - ₹350",
  },
  {
    id: 7,
    title: "Doctor Strange: Multiverse of Madness",
    genre: ["Action", "Adventure", "Fantasy"],
    duration: "126 min",
    rating: 6.9,
    language: "English",
    image: "/images/movies/doctor-strange-multiverse.png",
    releaseDate: "2022-05-06",
    description: "Doctor Strange teams up with a mysterious teenage girl who can travel across multiverses.",
    cast: ["Benedict Cumberbatch", "Elizabeth Olsen", "Chiwetel Ejiofor"],
    director: "Sam Raimi",
    price: "₹180 - ₹400",
  },
  {
    id: 8,
    title: "Jurassic World Dominion",
    genre: ["Action", "Adventure", "Sci-Fi"],
    duration: "147 min",
    rating: 5.6,
    language: "English",
    image: "/images/movies/jurassic-world-dominion.png",
    releaseDate: "2022-06-10",
    description:
      "Four years after the destruction of Isla Nublar, dinosaurs now live alongside humans across the world.",
    cast: ["Chris Pratt", "Bryce Dallas Howard", "Laura Dern"],
    director: "Colin Trevorrow",
    price: "₹140 - ₹320",
  },
]

export function MovieGrid() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">{movies.length} movies found</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
