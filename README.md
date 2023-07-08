# phase-2-project
This app simulates a movie library, where the user can store information on movies that the user likes. The info on each movie includes the title (the name) of the movie, the movie poster, the number of likes which indicates the degree of the the user's favor, and the user's comment on the movie.

The app can let the user add a movie as the user finds a movie that the user likes or can delete a movie as the user lose the interest.

Adding a movie, the user click New Movie button.
Then, the form appears, and requires the name of the movie
and the URL of the movie poster.
Then, the user click SUBMIT button.
Hiding the form, the user clicks New Movie Button agian.

Deleteing a movie, the user click Delete button shown on the movie card.

Chainging the comment of a movie, the user clikc New Comment button.
Then, the form appears, and requires the name of the movie and the new comment.
Then, the user click SUBMIT button.
Hiding the form, the user clicks New Comment button again.

Increaseing the level of the likeness, the user clicks Like button.

Therer are four user side routes, one is Home, another is Movie Specs, another is Actors List, and the other is Directors List.

Runing this app, the user clones the repo first, which is located at
https://github.com/runmathpython/phase-2-project

The backend repo is at the location as follows:
https://github.com/runmathpython/json-server-template

If not installed, install JSON Server globally on your machine using the command as follows:
$ npm install -g json-server

Then, run the following code at the terminal:
$ run npm server
$ npm start

And developing this app, I've had serveral issues that I have corrected,
and those are as follows:

1. Problems with putting each image file in Header and MovieCard have been resolved.

1.1 The image file for the Header can be in the componets folder, and yet, it has to be imported into the Header.

1.2 Each imiage file for the MovieCard has to be in the public folder.

1.2.1 The image location specified in the db.json has to be properly spcified.

1.2.2 The image URL can be used as the image location, also.

2. Inline style doesn't work. So css is used for styling.

3. When adding a movie, we can use one of the objects in the movies array in db.json for "testing purposes".

3.1 We can use one of the movie names and the string for the movie's image location.

3.2 Copy each of the above and pase it into each place replacing the placeholder.

3.3 And of course, we can use any URL pointing a image loation in an appropriate internet website.

3.3 Then, click SUBMIT button.

