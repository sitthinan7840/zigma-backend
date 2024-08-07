class Exam1Service {

    exec() {
        const aWins = 3;
        const bFinalMoney = 5;
        const bLoss = aWins; //3
        const bWins = bFinalMoney + bLoss; //8
        return aWins + bWins;
    }
}

module.exports = Exam1Service;
