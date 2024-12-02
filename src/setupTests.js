import { server } from "./__mocks__/server";
import "@testing-library/jest-dom";
import fetch from "node-fetch";
import { Response } from "node-fetch";

global.fetch = fetch;
global.Response = Response;

// Set up MSW before tests
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
