// package: book
// file: book.proto

import * as jspb from "google-protobuf";

export class BookItem extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookItem.AsObject;
  static toObject(includeInstance: boolean, msg: BookItem): BookItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BookItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookItem;
  static deserializeBinaryFromReader(message: BookItem, reader: jspb.BinaryReader): BookItem;
}

export namespace BookItem {
  export type AsObject = {
    title: string,
    author: string,
    price: number,
  }
}

export class BookRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BookRequest): BookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookRequest;
  static deserializeBinaryFromReader(message: BookRequest, reader: jspb.BinaryReader): BookRequest;
}

export namespace BookRequest {
  export type AsObject = {
    title: string,
  }
}

export class AddBookRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBookRequest): AddBookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBookRequest;
  static deserializeBinaryFromReader(message: AddBookRequest, reader: jspb.BinaryReader): AddBookRequest;
}

export namespace AddBookRequest {
  export type AsObject = {
    title: string,
    author: string,
    price: number,
  }
}

export class BookResponse extends jspb.Message {
  clearBooksList(): void;
  getBooksList(): Array<BookItem>;
  setBooksList(value: Array<BookItem>): void;
  addBooks(value?: BookItem, index?: number): BookItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BookResponse): BookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookResponse;
  static deserializeBinaryFromReader(message: BookResponse, reader: jspb.BinaryReader): BookResponse;
}

export namespace BookResponse {
  export type AsObject = {
    booksList: Array<BookItem.AsObject>,
  }
}

