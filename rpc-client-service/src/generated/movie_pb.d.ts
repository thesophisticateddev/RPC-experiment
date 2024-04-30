// package: movie
// file: movie.proto

import * as jspb from "google-protobuf";

export class MovieItem extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getYear(): number;
  setYear(value: number): void;

  getGenre(): string;
  setGenre(value: string): void;

  getRating(): string;
  setRating(value: string): void;

  getStarrating(): string;
  setStarrating(value: string): void;

  getRuntime(): string;
  setRuntime(value: string): void;

  getCast(): string;
  setCast(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MovieItem.AsObject;
  static toObject(includeInstance: boolean, msg: MovieItem): MovieItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MovieItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MovieItem;
  static deserializeBinaryFromReader(message: MovieItem, reader: jspb.BinaryReader): MovieItem;
}

export namespace MovieItem {
  export type AsObject = {
    id: number,
    title: string,
    year: number,
    genre: string,
    rating: string,
    starrating: string,
    runtime: string,
    cast: string,
    image: string,
  }
}

export class MovieRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MovieRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MovieRequest): MovieRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MovieRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MovieRequest;
  static deserializeBinaryFromReader(message: MovieRequest, reader: jspb.BinaryReader): MovieRequest;
}

export namespace MovieRequest {
  export type AsObject = {
  }
}

export class MovieResponse extends jspb.Message {
  clearMoviesList(): void;
  getMoviesList(): Array<MovieItem>;
  setMoviesList(value: Array<MovieItem>): void;
  addMovies(value?: MovieItem, index?: number): MovieItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MovieResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MovieResponse): MovieResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MovieResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MovieResponse;
  static deserializeBinaryFromReader(message: MovieResponse, reader: jspb.BinaryReader): MovieResponse;
}

export namespace MovieResponse {
  export type AsObject = {
    moviesList: Array<MovieItem.AsObject>,
  }
}

