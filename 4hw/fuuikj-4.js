class Warrior {
    constructor() {
        this._level = 1;
        this._experience = 100;
        this._rank = "Pushover";
        this._achievements = [];
    }

    level() {
        return this._level;
    }

    experience() {
        return this._experience;
    }

    rank() {
        return this._rank;
    }
    achievements() {
        return this._achievements;
    }
    // тренування воїна
    training(training) {
        const [description, points, minLvl] = training;
        if (minLvl <= this._level) {
            this._experience += points;
            this._achievements.push(description);
    
            // Віднімання 100 балів досвіду після оновлення рівня
            while (this._experience >= 100) {
                this._experience -= 100;
                this._level += 1;
            }
    
            this._updateLevelAndRank();
            return description;
        } else {
            return "Not strong enough";
        }
    }
    
     // бійка
    battle(enemyLvl) {
        if (enemyLvl < 0 || enemyLvl > 100) {
            return "Invalid level";
        }

        const lvlDiff = enemyLvl - this._level;
        if (lvlDiff === 0) {
            this._experience += 10;
            this._updateLevelAndRank();
            return "A good fight";
        } else if (lvlDiff === 1) {
            this._experience += 5;
            this._updateLevelAndRank();
            return "Easy fight";
        } else if (lvlDiff >= 2) {
            const expEarned = 20 * lvlDiff * lvlDiff;
            this._experience += expEarned;
            this._updateLevelAndRank();
            return "An intense fight";
        } else {
            return "You've been defeated";
        }
    }

    _updateLevelAndRank() {
        if (this._experience >= 10000) {
            this._experience = 10000;
        }

        while (this._experience >= 100) {
            this._level += 1;
            this._experience -= 100;
        }

        const ranks = [
            "Pushover",
            "Novice",
            "Fighter",
            "Warrior",
            "Veteran",
            "Sage",
            "Elite",
            "Conqueror",
            "Champion",
            "Master",
            "Greatest",
        ];
        if (this._level > 100) {
            this._level = 100;
        }

        this._rank = ranks[Math.floor((this._level - 1) / 10)];
    }
}


let bruce_lee = new Warrior();
console.log(bruce_lee.level());
console.log(bruce_lee.experience());
console.log(bruce_lee.rank());
console.log(bruce_lee.achievements());
console.log(bruce_lee.training(["Defeated Chuck Norris", 9000, 1]));
console.log(bruce_lee.experience());
console.log(bruce_lee.level());       
console.log(bruce_lee.rank());         
console.log(bruce_lee.battle(90));     
console.log(bruce_lee.experience());   
console.log(bruce_lee.achievements()); 