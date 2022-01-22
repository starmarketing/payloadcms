"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var path_1 = __importDefault(require("path"));
// import Examples from './collections/Examples';
var Users_1 = __importDefault(require("./collections/Users"));
exports.default = (0, config_1.buildConfig)({
    serverURL: 'http://localhost:3000',
    admin: {
        user: Users_1.default.slug,
    },
    collections: [
        Users_1.default,
        // Add Collections here
        // Examples,
    ],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts')
    },
});
