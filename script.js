
let words = [
    "নমস্কাৰ = Hello",
    "ধন্যবাদ = Thank you",
    "বন্ধু = Friend",
    "পিতৃ = Father",
    "মাতৃ = Mother",
    "বিদ্যালয় = School",
    "শিক্ষক = Teacher",
    "ছাত্ৰ = Student",
    "কলম = Pen",
    "পাঠ = Lesson",
    "পৰীক্ষা = Exam",
    "ঘৰ = House",
    "পথ = Road",
    "গছ = Tree",
    "ফুল = Flower",
    "নদী = River",
    "পানি = Water",
    "ভাত = Rice",
    "চাহ = Tea",
    "দিন = Day",
    "ৰাতি = Night",
    "সময় = Time",
    "ভাল = Good",
    "বেয়া = Bad",
    "ডাঙৰ = Big",
    "সৰু = Small",
    "নতুন = New",
    "পুৰণি = Old",
    "সুখ = Happiness",
    "দুখ = Sadness",
    "কাম = Work",
    "খেলা = Play",
    "পঢ়া = Study",
    "লিখা = Write",
    "শুনা = Listen",
    "কথা = Talk"
];

// DAILY WORD
let today = new Date().getDate();
let index = today % words.length;

document.getElementById("word").innerText = words[index];

// BUTTON CLICK
function nextWord() {
    index++;
    if (index >= words.length) {
        index = 0;
    }
    document.getElementById("word").innerText = words[index];
}
