const names = require('../../data/name')
const genders = require('../../data/gender')

class Exam4Service {
    exec() {
        let result = [];
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            let gender = 'U';  
            for (let j = 0; j < genders.length; j++) {
                if (genders[j].id === name.id) {
                    gender = genders[j].gender || 'U';
                    break;
                }
            }
            const item = result.find(group => group.gender === gender);
            if (item) {
                item.names.push(name);
            } else {
                result.push({ gender, names: [name]});
            }
        }
       console.log(JSON.stringify(result, null, 4));  
       return result;
    }
}

module.exports = Exam4Service;
