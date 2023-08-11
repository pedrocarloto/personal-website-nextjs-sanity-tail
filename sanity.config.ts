import {defineConfig} from "sanity"
import { deskTool } from "sanity/desk"

import schemas from "./sanity/schemas/index";

const config = defineConfig({
projectId: "do1ul3oe",
dataset: "production",
title: "Pedro Carloto",
apiVersion: "2023-08-09",
basePath: "/admin",
plugins: [deskTool()],
schema: {types: schemas}
})

export default config;