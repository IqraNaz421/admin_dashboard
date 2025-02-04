import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "car",
  title: "Car",
  type: "document",
  fields: [
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "model",
      title: "Model",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (rule) => rule.min(1886).max(new Date().getFullYear()), // Valid year check
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Car Image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "mileage",
      title: "Mileage (km)",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "fuelType",
      title: "Fuel Type",
      type: "string",
      options: {
        list: ["Petrol", "Diesel", "Electric", "Hybrid", "CNG"],
      },
    }),
    defineField({
      name: "engine",
      title: "Engine",
      type: "string",
      description: "e.g., 2.0L Turbo, 1500cc",
    }),
    defineField({
      name: "transmission",
      title: "Transmission",
      type: "string",
      options: {
        list: ["Automatic", "Manual"],
      },
    }),
    defineField({
      name: "seats",
      title: "Number of Seats",
      type: "number",
      validation: (rule) => rule.min(2).max(9),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of features (e.g., Sunroof, ABS, Navigation)",
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions",
      type: "object",
      fields: [
        { name: "length", title: "Length", type: "string" },
        { name: "width", title: "Width", type: "string" },
        { name: "height", title: "Height", type: "string" },
      ],
      description: "Car dimensions in meters or inches",
    }),
  ],
});
