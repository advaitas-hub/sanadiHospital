const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');
let html = fs.readFileSync('index.html', 'utf8');

// 1. FONT FIX in HTML
// Ensure no rogue inline cinzel exists
html = html.replace(/style="[^"]*font-family:[^"]*"/g, '');

// BUTTON FIX
html = html.replace(/btn-navy-solid/g, 'btn-primary');

// Replace the gold/brass #C9A24B with blue #2563EB across html and css
html = html.replace(/#C9A24B/gi, '#2563EB');
css = css.replace(/#C9A24B/gi, '#2563EB');

// Trust strip styling updates (which had #0B1F3A background)
css = css.replace(/\.trust-strip-section\s*\{\s*background-color:\s*#0B1F3A;/g, '.trust-strip-section {\n  background: linear-gradient(135deg, #EBF2FF 0%, #F4F8FF 50%, #E6F8F3 100%);');
// trust strip text was white, change to dark
css = css.replace(/\.trust-stat-val-container\s*\{([^}]*)color:\s*#FFFFFF;/g, '.trust-stat-val-container {$1color: #0B1F3A;');
css = css.replace(/\.trust-stat-number\s*\{([^}]*)color:\s*#FFFFFF;/g, '.trust-stat-number {$1color: #0B1F3A;');
css = css.replace(/\.trust-stat-suffix\s*\{([^}]*)color:\s*#FFFFFF;/g, '.trust-stat-suffix {$1color: #0B1F3A;');
css = css.replace(/\.trust-stat-copy\s*\{([^}]*)color:\s*#9FB3D1;/g, '.trust-stat-copy {$1color: var(--color-text-muted);');
// hairline divider
css = css.replace(/\.trust-stat-divider\s*\{([^}]*)background-color:\s*rgba\(255,\s*255,\s*255,\s*0\.2\);/g, '.trust-stat-divider {$1background-color: rgba(11, 31, 58, 0.08);');

// Vision/Mission styling updates
// vision panel background
css = css.replace(/\.vision-panel\s*\{\s*background-color:\s*#0B1F3A;/g, '.vision-panel {\n  background: linear-gradient(135deg, #EBF2FF 0%, #F4F8FF 50%, #E6F8F3 100%);');
// vision text was ivory/white
css = css.replace(/\.vision-statement\s*\{([^}]*)color:\s*#FFFFFF;/g, '.vision-statement {$1color: #0B1F3A;');
// watermark color
css = css.replace(/\.vision-watermark\s*\{([^}]*)color:\s*rgba\(255, 255, 255, 0\.03\);/g, '.vision-watermark {$1color: rgba(11, 31, 58, 0.03);');

// Vision title font fix just in case
css = css.replace(/\.vision-title\s*\{([^}]*)font-family:[^;]+;/g, '.vision-title {$1font-family: var(--font-heading);');


// Fallback to replace ANY remaining dark navy backgrounds #0B1F3A to gradient in CSS (excluding text colors obviously)
css = css.replace(/background(-color)?:\s*#0B1F3A(!important)?;?/ig, (match, p1, p2) => {
    return 'background: linear-gradient(135deg, #EBF2FF 0%, #F4F8FF 50%, #E6F8F3 100%)' + (p2 ? ' !important;' : ';');
});


// "Find the heading style used in "Why Patients Trust Us" ... and change its font-family"
// Fix .why-trust-title font-family to match established font 
css = css.replace(/\.why-trust-title\s*\{([^}]*)font-family:[^;}]+;?/g, '.why-trust-title {$1font-family: var(--font-heading);');
// Wait, if it didn't have one, it might inherit. Let's explicitly inject `font-family: var(--font-heading)` after `{` if it doesn't have one.
css = css.replace(/\.why-trust-title\s*\{/g, '.why-trust-title {\n  font-family: var(--font-heading);');


// Keep eyebrow labels visually consistent with each other too - same font, same size, same letter-spacing
const eyebrowCSS = `
  font-family: var(--font-main);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

// why-trust-eyebrow
css = css.replace(/\.why-trust-eyebrow\s*\{([^}]*)\}/g, (match, inner) => {
    let colorMatch = inner.match(/color:\s*[^;]+;/);
    let color = colorMatch ? colorMatch[0] : 'color: #0F6E4F;';
    return `.why-trust-eyebrow {\n  ${color}\n${eyebrowCSS}}`;
});

// section-tag
css = css.replace(/\.section-tag\s*\{([^}]*)\}/g, (match, inner) => {
    let colorMatch = inner.match(/color:\s*[^;]+;/);
    let color = colorMatch ? colorMatch[0] : 'color: var(--color-medical-blue);';
    return `.section-tag {\n  ${color}\n${eyebrowCSS}  margin-bottom: 12px;\n  display: block;\n}`;
});

// faq-eyebrow
css = css.replace(/\.faq-eyebrow\s*\{([^}]*)\}/g, (match, inner) => {
    let colorMatch = inner.match(/color:\s*[^;]+;/);
    let color = colorMatch ? colorMatch[0] : 'color: #0F6E4F;';
    return `.faq-eyebrow {\n  ${color}\n${eyebrowCSS}  margin-bottom: 12px;\n}`;
});

// vision-label
css = css.replace(/\.vision-label\s*\{([^}]*)\}/g, (match, inner) => {
    return `.vision-label {\n  color: var(--color-medical-blue);\n${eyebrowCSS}  margin-bottom: 16px;\n}`;
});

// mission-label
css = css.replace(/\.mission-label\s*\{([^}]*)\}/g, (match, inner) => {
    return `.mission-label {\n  color: var(--color-medical-blue);\n${eyebrowCSS}  margin-bottom: 16px;\n}`;
});


fs.writeFileSync('style.css', css);
fs.writeFileSync('index.html', html);
console.log('Fixed successfully!');
