import { copyFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const generatedSitemap = path.join(projectRoot, 'dist', 'sitemap-0.xml');
const simpleSitemap = path.join(projectRoot, 'dist', 'sitemap.xml');

const xml = await readFile(generatedSitemap, 'utf8');

if (!xml.includes('<urlset') || !xml.includes('<loc>')) {
  throw new Error('生成されたサイトマップに公開ページが含まれていません。');
}

await copyFile(generatedSitemap, simpleSitemap);

const pageCount = (xml.match(/<loc>/g) ?? []).length;
console.log(`sitemap.xml を作成しました（${pageCount}ページ）。`);
