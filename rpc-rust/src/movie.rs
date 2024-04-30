pub mod grpc_movie {
    tonic::include_proto!("movie");
}

use tonic::{transport::Server, Request, Response, Status};

use grpc_movie::movie_server::{Movie, MovieServer};
use grpc_movie::{MovieRequest, MovieResponse};
use tonic_web::CorsGrpcWeb;

#[derive(Debug, Default)]
pub struct MovieService {}

#[tonic::async_trait]
impl Movie for MovieService {
    async fn get_movies(
        &self,
        request: Request<MovieRequest>,
    ) -> Result<Response<MovieResponse>, Status> {
        println!("Got a request: {:?}", request);

        let mut movies = Vec::new();
        movies.push(grpc_movie::MovieItem {
            id: 1,
            title: "Matrix".to_string(),
            year: 1999,
            genre: "Sci-Fi".to_string(),
            rating: "8.7".to_string(),
            star_rating: "4.8".to_string(),
            runtime: "136".to_string(),
            cast: "Keanu Reeves, Laurence Fishburne".to_string(),
            image: "http://image.tmdb.org/t/p/w500//aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg".to_string(),
        });
        movies.push(grpc_movie::MovieItem {
            id: 2,
            title: "Spider-Man: Across the Spider-Verse".to_string(),
            year: 2023,
            genre: "Animation".to_string(),
            rating: "9.7".to_string(),
            star_rating: "4.9".to_string(),
            runtime: "136".to_string(),
            cast: "Donald Glover".to_string(),
            image: "http://image.tmdb.org/t/p/w500//8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg".to_string(),
        });
        movies.push(grpc_movie::MovieItem {
            id: 3,
            title: "Her".to_string(),
            year: 2013,
            genre: "Drama".to_string(),
            rating: "8.7".to_string(),
            star_rating: "4.1".to_string(),
            runtime: "136".to_string(),
            cast: "Joaquin Phoenix".to_string(),
            image: "http://image.tmdb.org/t/p/w500//eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg".to_string(),
        });

        let reply = grpc_movie::MovieResponse { movies: movies };

        Ok(Response::new(reply))
    }
}

pub fn get_movie_server() -> CorsGrpcWeb<MovieServer<MovieService>> {
    tonic_web::enable(MovieServer::new(MovieService::default()))
}
