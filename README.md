This is just a simple project used to learn typescript;

route post('/register-movie'):
example of body:

{
  "title": "Inception",
  "release_year": 2010,
  "image_url": "https://www.example.com/inception.jpg",
  "director": "Christopher Nolan",
  "main_actor": "Leonardo DiCaprio",
  "genre": "Science Fiction",
  "synopsis": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
}

route "put('/update-movie/:id'):
id must be of a existing movie in database;
example of body:

{
  "title": "Inception",
  "release_year": 2010,
  "image_url": "https://www.example.com/inception.jpg",
  "director": "Christopher Nolan",
  "main_actor": "Leonardo DiCaprio",
  "genre": "Science Fiction, action",
  "synopsis": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.";
  "watched": "false"
}

route patch('/watched-movie/:id)' turns column "watched" of the selected movie into true