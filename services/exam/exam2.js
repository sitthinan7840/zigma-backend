class Exam2Service {

    constructor() {
        this.emojis = {
            ':smile:': ':)',
            ':sad:': ':(',
            ':laugh:': 'XD',
            ':cry:': ':’(',
            ':kidding:': ':P',
            ':wow:': ':o'
        };
    }

    exec(req) {
        const message = req.body.message || '';
        let result = message.replace(/:\w+:/g, match => this.emojis[match] || '-');    
        return result;
    }

   
}

module.exports = Exam2Service;
