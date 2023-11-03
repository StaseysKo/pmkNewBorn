//функция для чтения и парсинга данных о вакансиях из файлов .md

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getJobsData() {
  const directory = path.join(process.cwd(), '_data', 'career');
  const allFilenames = fs.readdirSync(directory);

  // Отфильтровываем список файлов, оставляем только .md
  const filenames = allFilenames.filter(filename => path.extname(filename) === '.md');
  
  let jobs = filenames.map(filename => {
    const filePath = path.join(directory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      id: filename.replace('.md', ''),
      ...data,
      description: content
    };
  });

  // Если какой-то элемент массива null или undefined, то он будет удален из итоговой версии массива
  jobs = jobs.filter(job => job !== null && job !== undefined)
  console.log(`Актуальные вакасии ${jobs}`)

  // Сортируем элементы массива по полю order, чем больше значение - тем ниже элемент в итоговом массиве
  jobs.sort((firstEl, secondEl) => (firstEl.order > secondEl.order ? 1 : -1))
  console.log(`Актуальные вакасии после поля order ${jobs}`)
  
  return jobs;
}