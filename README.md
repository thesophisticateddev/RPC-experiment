# RPC setup between Rust RPC server and NestJS RPC client server

It is fairly simple to create a communication channel between an RPC server and a client. Here is a small example of how a Rust server RPC can work with a NestJS RPC client.

## Load all the Typescript interfaces

The following shell script allows generating Typescript interfaces to to be generated for easy integration in the NestJS client.

```bash
./protoc-generate.sh
```

## Start NestJS server

```bash
cd rpc-client-service
npm install
npm run start
```

## Start Rust RPC server

```bash
cd rpc-rust
cargo run
```
