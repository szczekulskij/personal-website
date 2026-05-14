import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const readingsDirectory = path.join(process.cwd(), 'content/readings');

export type Reading = {
  slug: string;
  title: string;
  date: string;
  labels: string[];
  summary: string;
  authors?: string;
  source?: string;
  sourceUrl?: string;
  content: string;
};

export function getAllReadings(): Reading[] {
  if (!fs.existsSync(readingsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(readingsDirectory);
  const readings = fileNames
    .filter(
      (name) =>
        (name.endsWith('.md') || name.endsWith('.mdx')) &&
        !name.startsWith('_')
    )
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      return getReadingBySlug(slug);
    });

  return readings.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getReadingBySlug(slug: string): Reading {
  const mdPath = path.join(readingsDirectory, `${slug}.md`);
  const mdxPath = path.join(readingsDirectory, `${slug}.mdx`);

  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const htmlContent = markdownToHtml(content);

  return {
    slug,
    title: data.title || slug,
    date: data.date ? new Date(data.date).toISOString() : '',
    labels: data.labels || [],
    summary: data.summary || '',
    authors: data.authors,
    source: data.source,
    sourceUrl: data.sourceUrl,
    content: htmlContent,
  };
}

function markdownToHtml(markdown: string): string {
  let html = markdown;

  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_match, lang, code) => {
    return `<pre><code class="language-${lang}">${escapeHtml(code.trim())}</code></pre>`;
  });

  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  html = html.replace(/^(\s*)-\s+(.+)$/gm, '<li>$2</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
  html = html.replace(/^>\s+(.+)$/gm, '<blockquote>$1</blockquote>');

  const lines = html.split('\n');
  const result: string[] = [];
  let inBlock = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed.startsWith('<h') ||
      trimmed.startsWith('<pre') ||
      trimmed.startsWith('<ul') ||
      trimmed.startsWith('<ol') ||
      trimmed.startsWith('<li') ||
      trimmed.startsWith('<blockquote') ||
      trimmed.startsWith('<img') ||
      trimmed === '</pre>' ||
      trimmed === '</ul>' ||
      trimmed === '</ol>'
    ) {
      inBlock = trimmed.startsWith('<pre');
      result.push(line);
    } else if (inBlock) {
      if (trimmed === '</pre>') inBlock = false;
      result.push(line);
    } else if (trimmed === '') {
      result.push('');
    } else {
      result.push(`<p>${trimmed}</p>`);
    }
  }

  return result.join('\n');
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
