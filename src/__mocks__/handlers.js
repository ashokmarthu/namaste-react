import { http } from "msw";
import { testData } from "./testData";
import { RESTAURANT_DETAIS_API } from "../utils/constants";

export const handlers = [
  http.get(RESTAURANT_DETAIS_API, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testData));
  }),
];
