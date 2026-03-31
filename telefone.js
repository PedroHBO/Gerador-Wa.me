const fs = require('fs');

function loadConfig() {
    try {
        return JSON.parse(fs.readFileSync('config.json', 'utf8'));
    } catch {
        return {
            usuario: 'Pedro Henrique',
            setor: 'TI',
            template: '{greeting}, meu nome é {nome}, sou do setor de {setor}, recebi sua solicitação'
        };
    }
}

function validatePhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const isValid = /^\d{10,11}$/.test(cleaned);
    return { cleaned, isValid };
}

function getGreeting(hour) {
    if (hour >= 7 && hour < 12) return 'Bom dia';
    if (hour >= 12 && hour < 18) return 'Boa tarde';
    return 'Boa noite';
}

function buildMessage(config, greeting) {
    return config.template
        .replace('{greeting}', greeting)
        .replace('{nome}', config.usuario)
        .replace('{setor}', config.setor);
}

function generateLink(phone, message) {
    return `//wa.me/+55${phone}?text=${encodeURIComponent(message)}`;
}

function processNumbers(filePath) {
    const input = fs.readFileSync(filePath, 'utf8');
    const lines = input.split('\n').filter(line => line.trim());
    const config = loadConfig();
    const hour = new Date().getHours();
    const greeting = getGreeting(hour);
    const message = buildMessage(config, greeting);

    console.log(`\n=== Gerador de Links WhatsApp ===\n`);
    console.log(`Usuário: ${config.usuario}`);
    console.log(`Setor: ${config.setor}`);
    console.log(`Horário: ${greeting}\n`);
    console.log('--- Links gerados ---\n');

    const results = [];

    for (const line of lines) {
        const { cleaned, isValid } = validatePhone(line);

        if (!isValid) {
            console.log(`❌ ${line.trim()} - Número inválido (formato: DDD + 8/9 dígitos)`);
            results.push({ number: line.trim(), valid: false, link: null });
            continue;
        }

        const link = generateLink(cleaned, message);
        console.log(`✓ ${cleaned} → ${link}`);
        results.push({ number: cleaned, valid: true, link });
    }

    console.log(`\n=== Total: ${results.filter(r => r.valid).length}/${results.length} válidos ===\n`);

    return results;
}

const args = process.argv.slice(2);
const filePath = args[0] || 'numeros.txt';

if (!fs.existsSync(filePath)) {
    console.error(`Arquivo não encontrado: ${filePath}`);
    process.exit(1);
}

processNumbers(filePath);
