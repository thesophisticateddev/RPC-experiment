#!/usr/bin/env bash

# Root directory of app
ROOT_DIR=$(git rev-parse --show-toplevel)

# PARENT_DIR=$(builtin cd $ROOT_DIR/..; pwd)

# Path to Protoc Plugin
PROTOC_GEN_TS_PATH="${ROOT_DIR}/rpc-client-service/node_modules/.bin/protoc-gen-ts_proto"

# Directory holding all .proto files
SRC_DIR="${ROOT_DIR}/rpc-rust/proto"
# Directory to write generated code (.d.ts files)
OUT_DIR="${ROOT_DIR}/rpc-client-service/src/generated"

# Clean all existing generated files
rm -r "${OUT_DIR}"
mkdir "${OUT_DIR}"

PROTO_FILE_LIST=$(find "${SRC_DIR}" -iname "*.proto")
echo "Proto Files: ${PROTO_FILE_LIST}"
# Generate all messages
# protoc \
#     --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
#     --ts_out="${OUT_DIR}" \
#     --proto_path="${SRC_DIR}" \
#     $(find "${SRC_DIR}" -iname "*.proto")

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --ts_out="${OUT_DIR}" \
    --proto_path="${SRC_DIR}" \
    $(find "${SRC_DIR}" -iname "*.proto")

echo "Typescript files generated Successfully!"
