const cron = require('node-cron');
const { exec } = require('child_process');

const cronJob = cron.schedule('0 0 * * *', () => {
    exec('npx sequelize db:seed --seed 20230405032452-add-seeder-companies.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Stocks data refreshed: ${stdout}`);
    });
});

module.exports = cronJob;