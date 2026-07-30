"use client"

import { defineConfig } from "sanity"

import { structureTool } from "sanity/structure"

import { visionTool } from "@sanity/vision"

import { apiVersion, dataset, projectId } from "./sanity/env"

import { schema } from "./sanity/schemaTypes"

import { structure } from "./sanity/structure"

export default defineConfig({
    name: "default",
    title: "Serve First",
    projectId,
    dataset,
    basePath: "/studio",
    plugins: [
        structureTool({ structure }),
        visionTool({ defaultApiVersion: apiVersion }),
    ],
    schema,
})
