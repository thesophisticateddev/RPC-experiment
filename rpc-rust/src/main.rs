use log::info;
use std::env;
use tonic::transport::Server;

mod book;
mod movie;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let log_level = env::var("RUST_LOG").unwrap_or("debug".to_string());
    env_logger::builder().parse_filters(&log_level).init();
    let port = env::var("PORT").unwrap_or("50051".to_string());
    let addr = format!("0.0.0.0:{}", port).parse()?;
    let movie = movie::get_movie_server();
    let book = book::get_book_server();
    info!("gRPC server started");
    info!("Running on port {}", port);

    Server::builder()
        .accept_http1(true)
        .add_service(movie)
        .add_service(book)
        .serve(addr)
        .await?;

    Ok(())
}
