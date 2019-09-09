import {
    handleBodyRequestParsing,
    handleCompression,
    handleCors,
    handleResponseHeaders
} from './common';

export default [handleCompression, handleBodyRequestParsing, handleCors, handleResponseHeaders];