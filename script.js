let app = new Vue({
    el: '#app',
    data: {
        questions: [{
            question: "What is Pierce's full name?",
            answers: ["Pierce Ong Jun Siong", "Pierce Ong Ming Ern", "Pierce Ong Kok Leong", "Pierce Ong Van Schneider"],
            answer: "Pierce Ong Ming Ern", localscore: 0
        },
        {
            question: "What year is Pierce born in?",
            answers: ["1999", "1998", "2077", "1997"], answer: "1999", localscore: 0
        },
        {
            question: "What does Pierce study in college?",
            answers: ["Arts", "Computer Science", "Rocket Science", "Accounting & Finance"],
            answer: "Accounting & Finance", localscore: 0
        },
        {
            question: "Is Pierce a vanilla or chocolate guy?",
            answers: ["Chocolate ftw!!", "Nah it's gotta be vanilla"], answer: "Nah it's gotta be vanilla", localscore: 0
        }, {
            question: "What is Pierce's favorite sport?",
            answers: ["Football", "Badminton", "Coding", "Basketball"], answer: "Badminton", localscore: 0
        }
        ],
        current: 0
        , models: [1],
        totalscore: 0,
        testphase: true,
        endphase: false,
        passed: false,
        failed: false,
        center: "center",
        toggle: true
    },
    methods: {
        nextpage: function () {
            this.toggle = false;
            setTimeout(this.delaynomore, 200);
        },
        previouspage: function () {
            this.toggle = false
            setTimeout(this.delaynomoreprevious, 200)
        },
        addpoint: function () {
            if (this.models[this.current] == this.questions[this.current].answer && this.questions[this.current].localscore == 0) {
                this.questions[this.current].localscore++;
                this.totalscore++;
            }
            else if (this.models[this.current] != this.questions[this.current].answer && this.questions[this.current].localscore != 0) {
                this.questions[this.current].localscore--;
                this.totalscore--;
            }
        },
        submit: function () {
            this.testphase = false;
            this.endphase = true;
            if (this.totalscore > 2) {
                this.passed = true
            }
            else {
                this.failed = true
            }
        },
        delaynomore: function () {
            if (this.current < this.questions.length - 1) {
                this.models.push(this.current + 1);
                this.current++;
                this.toggle = true;
            }
            else {
                return
            }
        },
        delaynomoreprevious: function () {
            if (this.current != 0) {
                this.current--;
                this.toggle = true
            }
        },
        restart:function(){
            this.current = 0;
            this.testphase = true;
            this.endphase = false;
            this.models = [1];
            this.totalscore = 0;
            for (var i = 0;i < this.questions.length;i++) {
                this.questions[i].localscore = 0;
            }
        }
    }

})