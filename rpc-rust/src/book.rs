pub mod grpc_book {
    tonic::include_proto!("book");
}
use grpc_book::book_server::{Book, BookServer};
use grpc_book::{AddBookRequest, BookRequest, BookResponse};
use tonic::{Request, Response, Status};
use tonic_web::CorsGrpcWeb;
#[derive(Debug, Default)]
pub struct BookService {}

#[tonic::async_trait]
impl Book for BookService {
    async fn get_book(
        &self,
        request: Request<BookRequest>,
    ) -> Result<Response<BookResponse>, Status> {
        println!("Got a request: {:?}", request);

        let mut book_list = Vec::new();
        book_list.push(grpc_book::BookItem {
            title: "The Great Gatsby".to_string(),
            author: "F. Scott Fitzgerald".to_string(),
            price: 10,
        });
        book_list.push(grpc_book::BookItem {
            title: "To Kill a Mockingbird".to_string(),
            author: "Harper Lee".to_string(),
            price: 12,
        });
        book_list.push(grpc_book::BookItem {
            title: "1984".to_string(),
            author: "George Orwell".to_string(),
            price: 15,
        });

        let reply = grpc_book::BookResponse { books: book_list };

        Ok(Response::new(reply))
    }

    async fn add_book(
        &self,
        request: Request<AddBookRequest>,
    ) -> Result<Response<BookResponse>, Status> {
        println!("Got a request: {:?}", request);

        // let request_data = request.into_inner();

        let reply = grpc_book::BookResponse { books: vec![] };
        Ok(Response::new(reply))
    }
}

pub fn get_book_server() -> CorsGrpcWeb<BookServer<BookService>> {
    tonic_web::enable(BookServer::new(BookService::default()))
}
