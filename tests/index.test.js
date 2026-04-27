const fs = require('fs');

test('Arquivo index.html existe', () => {
  expect(fs.existsSync('index.html')).toBe(true);
});

test('index.html contém tag <html>', () => {
  const content = fs.readFileSync('index.html', 'utf8');
  expect(content).toMatch(/<html>/);
});

test('index.html contém título', () => {
  const content = fs.readFileSync('index.html', 'utf8');
  expect(content).toMatch(/<title>/);
});

test('Arquivo style.css existe', () => {
  expect(fs.existsSync('style.css')).toBe(true);
});

test('style.css não está vazio', () => {
  const content = fs.readFileSync('style.css', 'utf8');
  expect(content.length).toBeGreaterThan(0);
});
