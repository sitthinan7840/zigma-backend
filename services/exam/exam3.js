class Exam3Service {
    exec(req, res) {
        const data = req.body.data || [];
        const results = [];

        data.forEach((item, index) => {
            if (item.is_sample && Array.isArray(item.sample)) {
                const numericSample = item.sample.map(value => {
                    const num = Number(value);
                    return isNaN(num) ? 0 : num;
                });

                const sd = this.calculateSD(numericSample);
                results.push(`Index ${index} : ${sd.toFixed(2)}`);
            }
        });

        if (results.length === 0) {
            return "No Sample";
        } else {
            return results.join(', ');
        }
    }

    calculateSD(numbers) {
        if (numbers.length <= 1) return 0;
        const mean = this.calculateMean(numbers);
        const variance = numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / (numbers.length - 1);
        return Math.sqrt(variance);
    }

    calculateMean(numbers) {
        if (numbers.length === 0) return 0;
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length;
    }
}

module.exports = Exam3Service;
