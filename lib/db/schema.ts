import {pgTable, integer, text} from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: text("name").notNull(),
    description: text("description").notNull().unique(),
});
