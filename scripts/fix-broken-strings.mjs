import { readFileSync, writeFileSync } from "node:fs";

const files = process.argv.slice(2);

// State machine that walks the source char-by-char. A raw newline encountered
// while inside a single- or double-quoted string is ALWAYS a syntax error
// (the corruption), so we replace that newline + the next line's leading
// whitespace with a single space, rejoining the string. Newlines inside
// template literals (backtick) are left untouched (legal), except when they
// break an interpolation `${ ... }` expression, which we rejoin with nothing.

function repair(src) {
  let out = "";
  let i = 0;
  const n = src.length;
  let state = "normal"; // normal | line | block | single | double | template
  let templateExprDepth = 0; // brace depth inside ${ } within a template

  while (i < n) {
    const c = src[i];
    const c2 = src[i + 1];

    if (state === "normal" || (state === "template" && templateExprDepth > 0)) {
      if (c === "/" && c2 === "/") { state = "line"; out += c; i++; continue; }
      if (c === "/" && c2 === "*") { state = "block"; out += c; i++; continue; }
      if (c === '"') { state = "double"; out += c; i++; continue; }
      if (c === "'") { state = "single"; out += c; i++; continue; }
      if (c === "`") { state = "template"; templateExprDepth = 0; out += c; i++; continue; }
      if (state === "template" && templateExprDepth > 0) {
        if (c === "{") templateExprDepth++;
        else if (c === "}") {
          templateExprDepth--;
          if (templateExprDepth === 0) { out += c; i++; continue; }
        } else if (c === "\n") {
          // newline breaking a ${ } expression -> rejoin without space
          i++;
          while (i < n && (src[i] === " " || src[i] === "\t")) i++;
          continue;
        }
      }
      out += c; i++; continue;
    }

    if (state === "line") {
      if (c === "\n") state = "normal";
      out += c; i++; continue;
    }

    if (state === "block") {
      if (c === "*" && c2 === "/") { state = "normal"; out += c + c2; i += 2; continue; }
      out += c; i++; continue;
    }

    if (state === "single" || state === "double") {
      const quote = state === "single" ? "'" : '"';
      if (c === "\\") { out += c + (c2 ?? ""); i += 2; continue; }
      if (c === "\n") {
        // corruption: rejoin with a single space, strip next-line indent
        i++;
        while (i < n && (src[i] === " " || src[i] === "\t")) i++;
        out += " ";
        continue;
      }
      if (c === quote) { state = "normal"; out += c; i++; continue; }
      out += c; i++; continue;
    }

    if (state === "template") {
      if (c === "\\") { out += c + (c2 ?? ""); i += 2; continue; }
      if (c === "`") { state = "normal"; out += c; i++; continue; }
      if (c === "$" && c2 === "{") { templateExprDepth = 1; out += c + c2; i += 2; continue; }
      out += c; i++; continue;
    }
  }
  return out;
}

let changed = 0;
for (const file of files) {
  const src = readFileSync(file, "utf8");
  const fixed = repair(src);
  if (fixed !== src) {
    writeFileSync(file, fixed, "utf8");
    changed++;
    console.log("fixed:", file);
  }
}
console.log(`\nRepaired ${changed}/${files.length} files`);
