const { watch } = require('fs');
const { exec, spawn } = require('child_process');
const path = require('path');

const DEBOUNCE_MS = 2000;
const GIT_DIR = path.join(__dirname);

let timer = null;

function git(args) {
    return new Promise((resolve, reject) => {
        exec(`git ${args}`, { cwd: GIT_DIR }, (err, stdout, stderr) => {
            if (err) { reject(err); return; }
            resolve(stdout.trim());
        });
    });
}

async function commitAndPush() {
    try {
        const status = await git('status --porcelain');
        if (!status) {
            console.log('[watch] no changes');
            return;
        }

        await git('add .');

        const date = new Date().toLocaleString('pt-BR');
        await git(`commit -m "update ${date}"`);
        await git('push');

        console.log(`[watch] committed & pushed at ${date}`);
    } catch (e) {
        console.error('[watch] error:', e.message);
    }
}

function onChange() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(commitAndPush, DEBOUNCE_MS);
}

const targets = ['portifolio.html', 'portfolio.css'];
targets.forEach(file => {
    const filePath = path.join(GIT_DIR, file);
    watch(filePath, onChange);
    console.log(`[watch] monitoring ${file}`);
});

console.log('[watch] started. Press Ctrl+C to stop.');
