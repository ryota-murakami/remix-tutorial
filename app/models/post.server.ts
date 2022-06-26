import { prisma } from "~/db.server";

export type Post = {
  slug: string;
  title: string;
};

export async function getPosts() {
  return prisma.post.findMany();
}
