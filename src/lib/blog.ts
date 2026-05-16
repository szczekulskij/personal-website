import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  technologies?: string;
  ghLink?: string;
  content: string;
};

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter(
      (name) =>
        (name.endsWith('.md') || name.endsWith('.mdx')) &&
        !name.startsWith('_')
    )
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      return getPostBySlug(slug);
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost {
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);

  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const htmlContent = remark().use(html, { sanitize: false }).processSync(content).toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date ? new Date(data.date).toISOString() : '',
    description: data.description || '',
    tags: data.tags || [],
    technologies: data.technologies,
    ghLink: data.GHlink || data.ghLink,
    content: htmlContent,
  };
}


